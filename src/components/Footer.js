import React from "react";
import "../styles/footer.css";
import { Phone } from "react-feather";
import { Mail } from "react-feather";
import { Globe } from "react-feather";
import { Facebook } from "react-feather";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";
function Footer() {
  return (
    <div className="Footer">
      <div className="container Footer-container">
        <div className="Footer-1">
          <div className="Footer-1-logo">
            <img src="/logos/mntc-white.svg" alt="" />
          </div>
          <div className="Footer-links-container">
            <h2 className="Footer-links-heading">Contact Us On</h2>

            <a href="tel:+919007795158" target="_blank">
              <Phone />
              90077-95158 (Abantika Basu)
            </a>

            <a href="tel:+919899556677" target="_blank">
              <Phone />
              98995-56677 (Harsh Jha)
            </a>

            <a href="mailto:mntcnitd@gmail.com" target="_blank">
              <Mail />
              mntcnitd@gmail.com
            </a>
          </div>
        </div>

        <div className="Footer-2">
          <div className="Footer-2-logo">
            <a href="https://www.geeksforgeeks.org/">
              <img src="/logos/gfg.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="Footer-3">
          <div className="Footer-3-logo">
            <img src="/logos/nit-dgp-white.svg" alt="" />
          </div>

          <div className="Footer-links-container">
            <h2 className="Footer-links-heading">Our Social Links</h2>
            <a href="https://mntcnitdgp.co.in" target="_blank">
              <Globe /> mntcnitdgp.co.in
            </a>
            <a href="https://www.facebook.com/mathsntechclub/" target="_blank">
              <Facebook /> mathsntechclub
            </a>
            <a href="https://www.instagram.com/mntc.nitd/" target="_blank">
              <Instagram /> mntc.nitd
            </a>
            <a
              href="https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/"
              target="_blank"
            >
              <Linkedin /> maths-n-tech-club
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
