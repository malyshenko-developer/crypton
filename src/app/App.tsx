import { ModeToggle } from "@shared/components/ui/mode-toggle";
import { RouterProvider } from "./providers/router";
import { StoreProvider } from "./providers/store";
import { ThemeProvider } from "@shared/providers/theme";

function App() {
  return (
    <StoreProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex justify-center items-center h-screen flex-col gap-6">
          <ModeToggle />
          <RouterProvider />
        </div>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App;
