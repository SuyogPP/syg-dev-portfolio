"use client";

import Link from "next/link";

interface NavCTAProps {
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export default function NavCTA({ onClick, className = "", mobile = false }: NavCTAProps) {
  return (
    <Link
      href="/#contact"
      onClick={onClick}
      className={`relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 group cursor-pointer ${
        mobile 
          ? "btn-primary w-full text-lg !py-4" 
          : "btn-primary !px-5 !py-2 !text-xs md:!text-sm"
      } ${className}`}
    >
      <span className="relative z-10">Let&apos;s Talk</span>
    </Link>
  );
}
