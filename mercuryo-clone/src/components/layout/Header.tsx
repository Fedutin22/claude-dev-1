"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Mercuryo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown("products")}
                className="flex items-center gap-1 font-medium transition-colors hover:text-blue-600"
              >
                Products
                <svg
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "products" && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                  <Link
                    href="/on-ramp"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    On Ramp
                  </Link>
                  <Link
                    href="/spend"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    Spend
                  </Link>
                  <Link
                    href="/pay"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    Mercuryo Pay
                  </Link>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown("company")}
                className="flex items-center gap-1 font-medium transition-colors hover:text-blue-600"
              >
                Company
                <svg
                  className={`h-4 w-4 transition-transform ${
                    activeDropdown === "company" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === "company" && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white py-2 shadow-lg">
                  <Link
                    href="/about"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    About
                  </Link>
                  <Link
                    href="/explore"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    Explore
                  </Link>
                  <Link
                    href="/career"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    Career
                  </Link>
                  <Link
                    href="/help"
                    className="block px-4 py-2 transition-colors hover:bg-gray-100"
                  >
                    Help
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/builders"
              className="font-medium transition-colors hover:text-blue-600"
            >
              For Builders
            </Link>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/launch-app"
              className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Launch App
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {/* Mobile Products */}
              <div>
                <button
                  onClick={() => handleDropdown("mobile-products")}
                  className="flex w-full items-center justify-between font-medium"
                >
                  Products
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-products" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "mobile-products" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/on-ramp" className="text-gray-600 hover:text-blue-600">
                      On Ramp
                    </Link>
                    <Link href="/spend" className="text-gray-600 hover:text-blue-600">
                      Spend
                    </Link>
                    <Link href="/pay" className="text-gray-600 hover:text-blue-600">
                      Mercuryo Pay
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Company */}
              <div>
                <button
                  onClick={() => handleDropdown("mobile-company")}
                  className="flex w-full items-center justify-between font-medium"
                >
                  Company
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      activeDropdown === "mobile-company" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeDropdown === "mobile-company" && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link href="/about" className="text-gray-600 hover:text-blue-600">
                      About
                    </Link>
                    <Link href="/explore" className="text-gray-600 hover:text-blue-600">
                      Explore
                    </Link>
                    <Link href="/career" className="text-gray-600 hover:text-blue-600">
                      Career
                    </Link>
                    <Link href="/help" className="text-gray-600 hover:text-blue-600">
                      Help
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/builders" className="font-medium hover:text-blue-600">
                For Builders
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href="/launch-app"
                  className="rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Launch App
                </Link>
                <Link
                  href="/dashboard"
                  className="rounded-lg border-2 border-blue-600 px-6 py-3 text-center font-medium text-blue-600 transition-colors hover:bg-blue-50"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
