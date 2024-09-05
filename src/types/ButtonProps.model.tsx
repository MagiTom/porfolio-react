export interface ButtonPropsPair {
  onClick?: () => void;
}

export interface ButtonProps extends ButtonPropsPair {
  children: React.ReactNode;
  theme: "light" | "dark";
}
