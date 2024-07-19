import Link from "next/link";

const FooterSS = () => {
  return (
    <footer className="bg-black text-blue-400 py-4 px-6">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="space-x-4 mb-2 text-center">
          <Link
            href="/resources"
            className="hover:text-blue-300 transition-colors"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-300 transition-colors"
          >
            Contact
          </Link>
          <Link href="/terms" className="hover:text-blue-300 transition-colors">
            Terms & Conditions
          </Link>
          <Link
            href="/privacy"
            className="hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link href="/about" className="hover:text-blue-300 transition-colors">
            About this Site
          </Link>
        </nav>
        <p className="text-white text-xs text-center max-w-3xl">
          Copyright © 2011-2024 DGA. All Rights Reserved. Your use of this site
          is bound by the terms and conditions set forth by the Directors Guild
          of America.
        </p>
      </div>
    </footer>
  );
};

export default FooterSS;
