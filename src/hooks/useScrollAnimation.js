"use client"

import { useEffect } from "react"

export const useScrollAnimation = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate")
                }
            })
        }, observerOptions)

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(
            ".founder-card, .advisor-card, .team-member-card, .cta-section, .join-section",
        )

        animatableElements.forEach((el) => observer.observe(el))

        return () => {
            animatableElements.forEach((el) => observer.unobserve(el))
        }
    }, [])
}
