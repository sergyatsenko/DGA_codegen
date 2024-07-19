import Link from "next/link";
import React from "react";

const FooterSS = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4">
          <Link href="/resources" className="text-blue-400">
            Resources
          </Link>
          <Link href="/contact" className="text-blue-400">
            Contact
          </Link>
          <Link href="/terms" className="text-blue-400">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="text-blue-400">
            Privacy Policy
          </Link>
          <Link href="/about" className="text-blue-400">
            About this Site
          </Link>
        </div>
        <div className="mt-4 text-gray-400 text-sm">
          Copyright © 2011-2024 DGA. All Rights Reserved. Your use of this site
          is bound by the terms and conditions set forth by the Directors Guild
          of America.
        </div>
      </div>
    </footer>
  );
};

export default FooterSS;
