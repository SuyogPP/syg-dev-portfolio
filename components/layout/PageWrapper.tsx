"use client";

import { ReactNode, useEffect } from "react";
import PageTransition from "../navigation/PageTransition";
import Navbar from "../navigation/Navbar";
import Footer from "../Footer";
import { usePathname } from "next/navigation";

interface PageWrapperProps {
  children: ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export default function PageWrapper({ 
  children, 
  showNavbar = true, 
  showFooter = true 
}: PageWrapperProps) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}
      
      <main className="flex-grow">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
