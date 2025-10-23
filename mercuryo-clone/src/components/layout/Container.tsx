import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "container" | "content" | "narrow";
  noPadding?: boolean;
}

/**
 * Container component that limits content width and provides consistent padding
 * @param children - Content to be wrapped
 * @param className - Additional CSS classes
 * @param maxWidth - Maximum width variant (container: 1440px, content: 1280px, narrow: 960px)
 * @param noPadding - Remove horizontal padding
 */
export default function Container({
  children,
  className = "",
  maxWidth = "container",
  noPadding = false,
}: ContainerProps) {
  const maxWidthClass = {
    container: "max-w-container",
    content: "max-w-content",
    narrow: "max-w-narrow",
  }[maxWidth];

  const paddingClass = noPadding ? "" : "px-4 sm:px-6 lg:px-8";

  return (
    <div className={`mx-auto w-full ${maxWidthClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
