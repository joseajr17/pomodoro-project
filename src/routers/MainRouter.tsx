import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { Settings } from "../pages/Settings";
import { useEffect } from "react";
import { Header } from "@/components/Header";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    );
}