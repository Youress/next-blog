"use client";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import React from "react";
import ThemeSwitch from "./components/ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="border-b  p-3 ">
      <Container>
        <Flex justify="between" align="center">
          <Link className="font-bold" href="/">
            Youssef
          </Link>
          <Flex>
            <NavLinks />
          </Flex>
          <ThemeSwitch/>
        </Flex>
      </Container>
    </nav>
  );
};
const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classnames({
              "nav-link": true,
              "font-bold": true,
              "text-zinc-900 dark:text-slate-50": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
