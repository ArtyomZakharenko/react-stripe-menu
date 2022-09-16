import {
	createContext,
	useContext,
	useState,
	ReactNode
} from "react";
import sublinks, { MenuItem } from "./data";

interface ContextProps {
	children: ReactNode;
}

export interface AppContextType {
	isSidebarOpen: boolean;
	isSubmenuOpen: boolean;
	openSidebar: () => void;
	closeSidebar: () => void;
	openSubmenu: (text: string | null, coordinates: Location) => void;
	closeSubmenu: () => void;
	location: Location;
	page: MenuItem;
}

type Location = {
	center: number;
	bottom: number;
}


const AppContext = createContext({ } as AppContextType);

export function AppProvider({ children } : ContextProps) {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [location, setLocation] = useState({ bottom: 0, center: 0 } as Location);
	const [page, setPage] = useState({page: '', links: []} as MenuItem);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	}

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	}

	const openSubmenu = (text: string | null, coordinates: Location) => {
		const page = sublinks.find((link) => link.page === text);
		setPage(page!);
		setLocation(coordinates);
		setIsSubmenuOpen(true);
	}

	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	}

	return (
		<AppContext.Provider value={{
			isSidebarOpen,
			isSubmenuOpen,
			openSidebar,
			closeSidebar,
			openSubmenu,
			closeSubmenu,
			location,
			page
		}}>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => useContext(AppContext);




