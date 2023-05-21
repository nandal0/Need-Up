import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
import csss from "./Footer.css";

const Footer = () => {
  return (
    <section>
        <footer className="footer-4 wf-section">
          <div className="wrapper-1160">
            <div className="footer-hero">
              <div className="footer-contact">
                <h2 className="heading-121">Ready to elevate your documentation work?</h2>
                <div className="footer-buttons">
                  <a id="create-free-account-footer" href="/" class="button_fill small home-v2 w-inline-block">
                    <div className="buttontext">Sign up for free</div>
                    </a>
                    <a id="take-a-tour-footer" href="/" class="button_outline small home-v2 w-inline-block">
                      <div className="buttontext">Product tour</div>
                      </a>
                      </div>
                      </div>
                      <img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/6126238e144f7970c00d7c57_60f17a27f09c3f9cecf7ef53_footer-avatar.png" loading="lazy" width="281" alt="The Avo mascot on a boat holding a flag saying &quot;SHIP IT!&quot;" className="footer-avatar"/>
                        </div>
                        <div className="footer-content">
                          <div>
                            <img src="./needuplogo.png" loading="lazy" alt="Avo logo" className="footer-logo"/>
                              <div className="footar-quote">Fixing data quality in product analytics</div>
                              </div>
                              <div className="footer-grid">
                                <div>
                                  <a href="/" className="footer-link-2">About</a>
                                  <a href="/" className="footer-link-2">Jobs</a>
                                  <a href="/" className="footer-link-2">Docs</a>
                                  <a href="/" className="footer-link-2">Security</a>
                                  </div>
                                  <div>
                                    <a href="/" className="footer-link-2">Terms and Conditions</a>
                                    <a href="/" className="footer-link-2">Privacy Policy</a>
                                    <a href="/" className="footer-link-2">Cookie Policy</a>
                                    </div>
                                    <div>
                                      <div className="footer-link-2">Let’s chat!</div>
                                      <a href="/" className="footer-link-2">hi@avo.app</a>
                                      <div className="social-wrap">
                                        <a href="/" className="socila-link w-inline-block">
                                          <img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f7722f7ef58_icon%20(2).svg" loading="lazy" alt="Facebook logo"/>
                                          </a>
                                          <a href="/" className="socila-link w-inline-block">
                                            <img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3fa670f7ef56_icon%20(4).svg" loading="lazy" alt="Twitter logo"/>
                                              </a>
                                              <a href="/" className="socila-link w-inline-block">
                                                <img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f1f0df7ef59_icon%20(1).svg" loading="lazy" alt="LinkedIn logo"/>
                                                  </a>
                                                  <a href="/" className="socila-link w-inline-block">
                                                    <img src="https://uploads-ssl.webflow.com/5ec440af4659932990a1020c/60f17a27f09c3f768ef7ef57_icon%20(3).svg" loading="lazy" alt="Instagram logo"/>
                                                    </a>
                                      </div>
                                    </div>
                                 </div>
                                </div>
                              </div>
                            </footer>
    </section>
  );
};
export default Footer;
