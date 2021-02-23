import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <div className="header__wrapper">
      <div className="header__content">
        <Link href="/" passHref>
          <div className="header__content-text">DEMO Streaming</div>
        </Link>
        <div className="header__buttons">
          <a className="header__buttons-login">Log in</a>
          <a className="header__buttons-trial">Start Your Free Trial</a>
        </div>
      </div>
    </div>
  );
}
