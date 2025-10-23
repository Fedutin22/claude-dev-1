import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "mobile" | "tablet" | "desktop" | "none";
  background?: "light" | "dark" | "transparent";
}

/**
 * Section component for page sections with consistent vertical spacing
 * @param children - Content to be wrapped
 * @param className - Additional CSS classes
 * @param spacing - Vertical spacing variant (mobile: 4rem, tablet: 6rem, desktop: 8rem)
 * @param background - Background color variant
 */
export default function Section({
  children,
  className = "",
  spacing = "desktop",
  background = "transparent",
}: SectionProps) {
  const spacingClasses = {
    mobile: "py-section-mobile",
    tablet: "py-section-tablet",
    desktop: "py-section-mobile md:py-section-tablet lg:py-section-desktop",
    none: "",
  }[spacing];

  const backgroundClasses = {
    light: "bg-white",
    dark: "bg-gray-900 text-white",
    transparent: "",
  }[background];

  return (
    <section className={`${spacingClasses} ${backgroundClasses} ${className}`}>
      {children}
    </section>
  );
}
