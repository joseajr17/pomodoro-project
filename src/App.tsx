import { Bounce, ToastContainer } from "react-toastify";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function checkTheme() {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  useEffect(() => {
    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <TaskContextProvider>
      <Home />

      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
        transition={Bounce}
      />
    </TaskContextProvider>
  );
}