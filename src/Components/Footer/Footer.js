import React from "react";

export function Footer() {
  return (
    <div className="footer__wrapper">
      <div className="footer__content">
        <div className="footer__content-text">
          <div className="footer__linkgroup">
            <a className="footer__link">Home</a>
            <a className="footer__link">Terms and Conditions</a>
            <a className="footer__link">Privacy Policy</a>
            <a className="footer__link">Collection Statement</a>
            <a className="footer__link">Help</a>
            <a className="footer__link">Manage Account</a>
          </div>
          <div className="footer__copyright">
            Copyright © 2016 DEMO Streaming. All Rights Reserved.
          </div>
        </div>
        <div className="footer__logos">
          <div className="footer__socialmedia">
            <span className="footer__socialmedia-facebook"></span>
            <span className="footer__socialmedia-twitter"></span>
            <span className="footer__socialmedia-instgram"></span>
          </div>
          <div className="footer__storebuttons">
            <img
              className="footer__storebuttons-link"
              src={"/assets/store/app-store.svg"}
            ></img>
            <img
              className="footer__storebuttons-link"
              src={"/assets/store/play-store.svg"}
            ></img>
            <img
              className="footer__storebuttons-link"
              src={"/assets/store/windows-store.svg"}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
