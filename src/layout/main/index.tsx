import { ReactNode } from "react";

type MainProps = { children: ReactNode };

export const Main = ({ children }: MainProps) => {
  return <main className="flex flex-col min-h-screen">{children}</main>;
};
