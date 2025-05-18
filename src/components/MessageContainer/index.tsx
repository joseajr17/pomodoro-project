import { Bounce, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

type MessageContainerProps = {
    children: React.ReactNode;
}

export function MessageContainer({ children }: MessageContainerProps) {

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
        <>
            {children}

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
        </>
    )
}