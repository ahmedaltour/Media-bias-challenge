import React from "react";
import Link from "next/link";

export function HomeCard(props) {
  return (
    <Link href={props.target} passHref>
      <div className="card__wrapper">
        <div class="card__shape">{props.title.toUpperCase()}</div>
        <div className="card__description">
          <p className="card__description-text"> Popular {props.title}</p>
        </div>
      </div>
    </Link>
  );
}
