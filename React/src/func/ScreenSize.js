import React, { useState, useEffect } from "react";

export default function ScreenSize() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Determine if screenWidth is less than or equal to 576
    const isMobile = screenWidth <= 576;

    // Return the result of the condition for rendering
    return isMobile;
}
