import React from "react";

import Link from "next/link";

import Logo from "../logo/logo";

function Header() {
  return (
    <header className="h-16 w-full mb-20 bg-gray-200 flex items-center justify-between ps-5 pe-5">
      <Logo />
      <div className="flex gap-x-10">
        <Link className="hover:underline" href="/">Главная</Link>
        <Link className="hover:underline" href="/catalog">Каталог продуктов</Link>
      </div>
    </header>
  );
}

export default Header;
