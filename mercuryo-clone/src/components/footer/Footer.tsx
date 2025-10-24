import Link from "next/link";
import { Container } from "@/components/layout";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Mercuryo</h3>
            <p className="text-sm text-gray-600">
              The payment engine behind top web3 businesses.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/on-ramp" className="text-gray-600 hover:text-blue-600">
                  On Ramp
                </Link>
              </li>
              <li>
                <Link href="/spend" className="text-gray-600 hover:text-blue-600">
                  Spend
                </Link>
              </li>
              <li>
                <Link href="/pay" className="text-gray-600 hover:text-blue-600">
                  Mercuryo Pay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-600 hover:text-blue-600">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-600 hover:text-blue-600">
                  Help
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          © 2025 Mercuryo Clone. Built with Next.js & GSAP.
        </div>
      </Container>
    </footer>
  );
}
