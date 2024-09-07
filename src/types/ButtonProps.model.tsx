export interface ButtonPropsPair {
  onClick?: () => void;
  web?: boolean;
}

export interface ButtonProps extends ButtonPropsPair {
  children: React.ReactNode;
  theme: "light" | "dark";
}
