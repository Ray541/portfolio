import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

type AppProps = {
  children: ReactNode;
};

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      {children}
    </ThemeProvider>
  );
}

export default App;
