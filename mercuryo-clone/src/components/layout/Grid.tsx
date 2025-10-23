import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: "sm" | "md" | "lg" | "xl";
}

/**
 * Responsive Grid component using CSS Grid
 * @param children - Grid items
 * @param className - Additional CSS classes
 * @param cols - Number of columns per breakpoint (mobile, tablet, desktop)
 * @param gap - Gap between grid items
 */
export default function Grid({
  children,
  className = "",
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
}: GridProps) {
  const mobileColsClass = `grid-cols-${cols.mobile || 1}`;
  const tabletColsClass = cols.tablet ? `md:grid-cols-${cols.tablet}` : "";
  const desktopColsClass = cols.desktop ? `lg:grid-cols-${cols.desktop}` : "";

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  }[gap];

  return (
    <div
      className={`grid ${mobileColsClass} ${tabletColsClass} ${desktopColsClass} ${gapClasses} ${className}`}
    >
      {children}
    </div>
  );
}
