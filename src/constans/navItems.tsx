export interface NavItem{
    id: number;
    label: string;
    path: string;
}

const navItems: NavItem[] = [
    { id: 1, path: "/", label: "navbar.about" },
    { id: 2, path: "/projects", label: "navbar.projects" },
    { id: 3, path: "/contact", label: "navbar.contact" },
];

export default navItems;