import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../pages/Home";

function ScrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
    return null;
}

export function MainRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    );
}