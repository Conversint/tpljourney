"use client";

import { init_classic_menu_resize } from "@/utlis/menuToggle";
import { closeMobileMenu } from "@/utlis/toggleMobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NavTPL({ links }) {
  useEffect(() => {
    init_classic_menu_resize();
    window.addEventListener("resize", init_classic_menu_resize);

    return () => {
      window.removeEventListener("resize", init_classic_menu_resize);
    };
  }, []);

  const pathname = usePathname();

  // Check if the current path matches the link
  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            className={isActive(link.href) ? "active" : ""}
            href={link.href}
            onClick={() => closeMobileMenu()}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
}
