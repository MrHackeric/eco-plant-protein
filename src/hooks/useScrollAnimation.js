"use client";

import { useEffect } from "react";

export const useScrollAnimation = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.05, // Trigger earlier
            rootMargin: "0px 0px -20px 0px", // Sooner detection
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    // Ensure image inside is loaded before animating
                    const image = target.querySelector("img");
                    if (image && !image.complete) {
                        image.onload = () => animateElement(target);
                    } else {
                        animateElement(target);
                    }

                    // Stop observing after first trigger
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        const animateElement = (el) => {
            requestAnimationFrame(() => {
                el.classList.add("animate");
                el.style.transitionDelay = "0s"; // eliminate default delay
            });
        };

        const animatableElements = document.querySelectorAll(
            ".founder-card, .advisor-card, .team-member-card, .cta-section, .join-section"
        );

        animatableElements.forEach((el) => observer.observe(el));

        return () => {
            animatableElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};
