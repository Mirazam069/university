import "./Footer.css";
import { motion } from "framer-motion";
import {
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import footerLogo from "../images/navbarLogo.PNG";

export default function Footer() {
  const easePro = [0.22, 1, 0.36, 1];

  const wrap = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.22, // ✅ juda sekin ketma-ket
        delayChildren: 0.28,
      },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -70, y: 14, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 70, y: 14, filter: "blur(12px)" },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  const popBtn = {
    hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(12px)" },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.25, ease: easePro },
    },
  };

  return (
    <motion.footer
      className="footx"
      variants={wrap}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* CTA STRIP */}
      <motion.section className="footx-cta" variants={fadeDown}>
        <div className="footx-shell footx-ctaRow">
          <motion.div className="footx-ctaLeft" variants={fadeLeft}>
            <h3>Ready to start your journey?</h3>
            <p>
              Explore programs, admissions, scholarships and campus life — all in
              one place.
            </p>
          </motion.div>

          <motion.div className="footx-ctaRight" variants={fadeRight}>
            <motion.button
              className="footx-btn primary"
              type="button"
              variants={popBtn}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              Apply now <IoChevronForwardOutline />
            </motion.button>

            <motion.button
              className="footx-btn ghost"
              type="button"
              variants={popBtn}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18 }}
            >
              Contact us <IoChevronForwardOutline />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* MAIN FOOTER */}
      <motion.section className="footx-main" variants={fadeUp}>
        <div className="footx-shell footx-grid">
          {/* Brand */}
          <motion.div className="footx-col" variants={fadeLeft}>
            <div className="footx-brand">
              <div className="footx-brandText">
                <img src={footerLogo} alt="Footer Logo" className="footx-logo" />
              </div>
            </div>

            <p className="footx-desc">
              A modern university shaping future leaders through world-class
              education, research, and innovation.
            </p>

            <div className="footx-badges">
              <span className="footx-badge">Innovation</span>
              <span className="footx-badge">Research</span>
              <span className="footx-badge">Global</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div className="footx-col" variants={fadeUp}>
            <h4 className="footx-h4">Quick Links</h4>
            <ul className="footx-links">
              <li>
                <a href="#">About NewUU</a>
              </li>
              <li>
                <a href="#">Admissions</a>
              </li>
              <li>
                <a href="#">News & Events</a>
              </li>
              <li>
                <a href="#">Student Life</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </motion.div>

          {/* Academics */}
          <motion.div className="footx-col" variants={fadeUp}>
            <h4 className="footx-h4">Academics</h4>
            <ul className="footx-links">
              <li>
                <a href="#">Undergraduate</a>
              </li>
              <li>
                <a href="#">Graduate</a>
              </li>
              <li>
                <a href="#">PhD & DSc</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Research Centers</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footx-col" variants={fadeRight}>
            <h4 className="footx-h4">Contact</h4>

            <div className="footx-contact">
              <a className="footx-contactRow" href="mailto:info@newuu.uz">
                <span className="footx-ic">
                  <IoMailOutline />
                </span>
                <span>info@newuu.uz</span>
              </a>

              <a className="footx-contactRow" href="tel:+998712024111">
                <span className="footx-ic">
                  <IoCallOutline />
                </span>
                <span>+998 (71) 202-41-11</span>
              </a>

              <div className="footx-contactRow noLink">
                <span className="footx-ic">
                  <IoLocationOutline />
                </span>
                <span>
                  University street №2 Kibray, Tashkent Uzbekistan, 111200
                </span>
              </div>
            </div>

            <div className="footx-miniNote">
              Working hours: Mon–Fri, 9:00–18:00
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div className="footx-shell footx-bottom" variants={fadeUp}>
          <span className="footx-copy">
            © {new Date().getFullYear()} New Uzbekistan University. All rights
            reserved.
          </span>

          <div className="footx-social">
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Telegram">
              TG
            </a>
            <a href="#" aria-label="YouTube">
              YT
            </a>
            <a href="#" aria-label="Facebook">
              FB
            </a>
          </div>
        </motion.div>
      </motion.section>
    </motion.footer>
  );
}
