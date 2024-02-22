import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="flex">
        <ul className="flex">
          <li>Popular</li>
          <li>Battle</li>
        </ul>
        <div className="torch">🔦</div>
      </nav>
    </header>
  );
}
