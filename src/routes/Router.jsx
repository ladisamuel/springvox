import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/Footer";

import AboutUSPage from "../pages/AboutUSPage";
import HomePage from "../pages/HomePage";
import WaitlistModal from "../components/WaitlistModal";
import { useState } from "react";
import ReKallIQPopup from "../components/ReKallIQPopup";


export default function Router () {
    const [waitlistOpen, setWaitlistOpen] = useState(false);

    return (
        <BrowserRouter>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            {/* <Router /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUSPage />} />
            </Routes>
            <Footer />
            <WaitlistModal
            
            isOpen={waitlistOpen}
            onClose={() => setWaitlistOpen(false)}
         />
               <ReKallIQPopup onOpenWaitlist={() => setWaitlistOpen(true)} />
         
        </BrowserRouter>
    )
}