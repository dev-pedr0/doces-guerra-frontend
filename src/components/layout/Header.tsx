"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navLinks = [
    { name: "Produtos", href: "/produtos" },
    { name: "Sobre Mim", href: "/sobre" },
    { name: "Feedback", href: "/feedback" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-accent">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-row justify-between items-center h-[73px] lg:h-[87px] py-2 px-4 lg:px-36">
        <Link href="/" passHref>
          <Image
            src="/logo/logo.png"
            alt="Logo Doces Guerra"
            width={150}
            height={50} 
            className="cursor-pointer"
          />
        </Link>
        <nav className="flex gap-[40px]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <span className="text-body heading-h1 cursor-pointer hover:opacity-75 transition-opacity">
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex flex-row justify-between items-center h-[73px] py-2 px-4">
        <Link href="/" passHref>
          <Image
            src="/logo/logo.png"
            alt="Logo Doces Guerra"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        <button
          onClick={toggleDrawer}
          className="py-[10px] px-[15px] rounded-[10px] border border-strong button-primary cursor-pointer"
          aria-label="Abrir Menu"
        >
          <Menu className="button-text" size={30} />
        </button>
      </div>

      {/* Mobile Drawer/Off-canvas Menu */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
          aria-label="Fechar Menu"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-screen w-1/2 max-w-[196px] bg-surface z-50 transition-transform transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-end py-2 px-2`}
      >
        <button
          onClick={toggleDrawer}
          className="p-[10px] rounded-[10px] border border-strong button-primary cursor-pointer mb-[40px]"
          aria-label="Fechar Menu"
        >
          <X className="button-text" size={24} />
        </button>
        <nav className="flex flex-col items-end gap-[40px]">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} passHref>
              <span
                onClick={toggleDrawer}
                className="text-body heading-h1 cursor-pointer hover:opacity-75 transition-opacity"
              >
                {link.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
