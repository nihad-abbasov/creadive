"use client";

import { useState, useEffect } from 'react';

interface ScrollPosition {
    scrollY: number;
    isScrolled: boolean;
}

export const useScrollPosition = (threshold: number = 100): ScrollPosition => {
    const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
        scrollY: 0,
        isScrolled: false,
    });

    useEffect(() => {
        let ticking = false;

        const updateScrollPosition = () => {
            const currentScrollY = window.scrollY;

            setScrollPosition({
                scrollY: currentScrollY,
                isScrolled: currentScrollY > threshold,
            });

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollPosition);
                ticking = true;
            }
        };

        // Initial check
        updateScrollPosition();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    return scrollPosition;
};
