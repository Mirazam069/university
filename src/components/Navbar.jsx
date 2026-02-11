import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import {
  IoMailOutline,
  IoCallOutline,
  IoEyeOutline,
  IoSearchOutline,
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoTwitter,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import navbarLogo from "../images/navbarLogo.PNG";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [openDD, setOpenDD] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  // ✅ OurStaff va shunga o‘xshash hero-baner page lar
  const overlayMode = location.pathname === "/our-staff";

  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) {
        setLangOpen(false);
        setOpenDD(null);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  useEffect(() => {
    // ✅ route o'zgarsa ham hammasini yopib yuboradi
    setLangOpen(false);
    setOpenDD(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const dropdowns = useMemo(
    () => ({
      about: [
        "PRE-FOUNDATION",
        "FOUNDATION",
        "UNDERGRADUATE",
        "POSTGRADUATE",
        "PHD AND DSC PROGRAMMES",
      ],
      research: ["Centers", "Publications", "Labs", "Projects"],
      admissions: ["How to apply", "Tuition fees", "Scholarships", "FAQ"],
      life: ["Dormitory", "Clubs", "Sports", "Services"],
      news: ["OUR STAFF", "Upcoming Events", "Announcements"],
    }),
    []
  );

  const closeAll = () => {
    setLangOpen(false);
    setOpenDD(null);
  };

  const goStaff = () => {
    closeAll();
    setMobileOpen(false);
    navigate("/our-staff");
  };

  // ================== ANIMATION VARIANTS ==================
  const pageStagger = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const menuOverlay = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.18 } },
    exit: { opacity: 0, transition: { duration: 0.16 } },
  };

  const panelSlide = {
    hidden: { x: "100%" },
    show: { x: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
    exit: { x: "100%", transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } },
  };

  const listStagger = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.06, delayChildren: 0.04 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.header
      className={`navx ${scrolled ? "is-scrolled" : ""} ${overlayMode ? "navx--overlay" : ""}`}
      ref={navRef}
      style={{ fontFamily: '"DM Sans", sans-serif' }}
      variants={pageStagger}
      initial="hidden"
      animate="show"
    >
      {/* ================= TOP STRIP ================= */}
      <motion.div className="navx-top" variants={itemUp}>
        <div className="navx-container">
          <div className="navx-top-row">
            <div className="navx-top-left">
              <a className="navx-top-link" href="mailto:info@newuu.uz">
                <IoMailOutline /> info@iau.uz
              </a>
              <span className="navx-sep" />
              <a className="navx-top-link" href="tel:+998712024111">
                <IoCallOutline /> +998 (99) 981-09-19
              </a>
            </div>

            <div className="navx-top-center">
              <div className="navx-pill">
                <span className="navx-pill-dot" />
                The site works in test mode
              </div>
            </div>

            <div className="navx-top-right">
              <button className="navx-iconBtn" type="button" aria-label="View">
                <IoEyeOutline />
              </button>

              <button className="navx-iconBtn" type="button" aria-label="Search">
                <IoSearchOutline />
              </button>

              <a className="navx-iconA" href="#" aria-label="Instagram">
                <IoLogoInstagram />
              </a>
              <a className="navx-iconA" href="#" aria-label="YouTube">
                <IoLogoYoutube />
              </a>
              <a className="navx-iconA" href="#" aria-label="Facebook">
                <IoLogoFacebook />
              </a>
              <a className="navx-iconA" href="#" aria-label="Twitter">
                <IoLogoTwitter />
              </a>

              <div className={`navx-lang ${langOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="navx-langBtn"
                  onClick={() => {
                    closeAll();
                    setLangOpen((v) => !v);
                  }}
                >
                  <span className="navx-flag">GB</span>
                  <span>English</span>
                  <IoChevronDownOutline className="navx-chev" />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      className="navx-langMenu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                    >
                      <button type="button" onClick={() => setLangOpen(false)}>
                        UZ — O‘zbek
                      </button>
                      <button type="button" onClick={() => setLangOpen(false)}>
                        RU — Русский
                      </button>
                      <button type="button" onClick={() => setLangOpen(false)}>
                        EN — English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN NAV ================= */}
      <motion.nav className="navx-main" aria-label="Main Navigation" variants={itemUp}>
        <div className="navx-container">
          <div className="navx-main-row">
            <Link className="navx-brand" to="/" onClick={() => setMobileOpen(false)}>
              <img src={navbarLogo} alt="University Logo" className="navx-logo" />
            </Link>

            <motion.div className="navx-links" variants={listStagger} initial="hidden" animate="show">
              <motion.div className={`navx-dd ${openDD === "about" ? "open" : ""}`} variants={listItem}>
                <button
                  type="button"
                  onClick={() => {
                    setLangOpen(false);
                    setOpenDD((v) => (v === "about" ? null : "about"));
                  }}
                >
                  Programmes <IoChevronDownOutline />
                </button>

                <AnimatePresence>
                  {openDD === "about" && (
                    <motion.div
                      className="navx-ddMenu"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.18 }}
                    >
                      {dropdowns.about.map((x) => (
                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                          {x}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className={`navx-dd ${openDD === "research" ? "open" : ""}`} variants={listItem}>
                <button
                  type="button"
                  onClick={() => {
                    setLangOpen(false);
                    setOpenDD((v) => (v === "research" ? null : "research"));
                  }}
                >
                  Students Life <IoChevronDownOutline />
                </button>

                <AnimatePresence>
                  {openDD === "research" && (
                    <motion.div
                      className="navx-ddMenu"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.18 }}
                    >
                      {dropdowns.research.map((x) => (
                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                          {x}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className={`navx-dd ${openDD === "admissions" ? "open" : ""}`} variants={listItem}>
                <button
                  type="button"
                  onClick={() => {
                    setLangOpen(false);
                    setOpenDD((v) => (v === "admissions" ? null : "admissions"));
                  }}
                >
                  Research <IoChevronDownOutline />
                </button>

                <AnimatePresence>
                  {openDD === "admissions" && (
                    <motion.div
                      className="navx-ddMenu"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.18 }}
                    >
                      {dropdowns.admissions.map((x) => (
                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                          {x}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className={`navx-dd ${openDD === "life" ? "open" : ""}`} variants={listItem}>
                <button
                  type="button"
                  onClick={() => {
                    setLangOpen(false);
                    setOpenDD((v) => (v === "life" ? null : "life"));
                  }}
                >
                  Festivals <IoChevronDownOutline />
                </button>

                <AnimatePresence>
                  {openDD === "life" && (
                    <motion.div
                      className="navx-ddMenu"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.18 }}
                    >
                      {dropdowns.life.map((x) => (
                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                          {x}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div className={`navx-dd ${openDD === "news" ? "open" : ""}`} variants={listItem}>
                <button
                  type="button"
                  onClick={() => {
                    setLangOpen(false);
                    setOpenDD((v) => (v === "news" ? null : "news"));
                  }}
                >
                  About us <IoChevronDownOutline />
                </button>

                <AnimatePresence>
                  {openDD === "news" && (
                    <motion.div
                      className="navx-ddMenu"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.18 }}
                    >
                      {dropdowns.news.map((x) => {
                        if (x === "OUR STAFF") {
                          return (
                            <button
                              key={x}
                              type="button"
                              onClick={goStaff}
                              style={{
                                width: "100%",
                                textAlign: "left",
                                background: "transparent",
                                border: 0,
                                padding: "10px 10px",
                                borderRadius: "12px",
                                cursor: "pointer",
                                color: "inherit",
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: "14px",
                              }}
                            >
                              {x}
                            </button>
                          );
                        }

                        return (
                          <a key={x} href="#" onClick={() => setOpenDD(null)}>
                            {x}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.a className="navx-link" href="#" onClick={() => setOpenDD(null)} variants={listItem}>
                Contact us
              </motion.a>
            </motion.div>

            <motion.div className="navx-cta" variants={listItem}>
              <button className="navx-apply" type="button">
                Apply now <IoChevronForwardOutline className="navx-applyArrow" />
              </button>
            </motion.div>

            <motion.button
              className="navx-burger"
              type="button"
              aria-label="Open menu"
              onClick={() => {
                closeAll();
                setMobileOpen(true);
              }}
              variants={listItem}
            >
              <IoMenuOutline />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE OVERLAY MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="navx-mOverlay open" variants={menuOverlay} initial="hidden" animate="show" exit="exit">
            <motion.div className="navx-mPanel" variants={panelSlide} initial="hidden" animate="show" exit="exit">
              <div className="navx-mTop">
                <div className="navx-mBrand">
                  <span className="navx-brand-mark" />
                  <span className="navx-brand-text">
                    <span>New</span>
                    <span>Uzbekistan</span>
                    <span>University</span>
                  </span>
                </div>

                <button className="navx-mClose" type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                  <IoCloseOutline />
                </button>
              </div>

              <div className="navx-mSearch">
                <IoSearchOutline />
                <input placeholder="Search..." />
              </div>

              <div className="navx-mLinks">
                <details>
                  <summary>
                    About NewUU <IoChevronDownOutline />
                  </summary>
                  <div className="navx-mDD">
                    {dropdowns.about.map((x) => (
                      <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                        {x}
                      </a>
                    ))}
                  </div>
                </details>

                <details>
                  <summary>
                    Research <IoChevronDownOutline />
                  </summary>
                  <div className="navx-mDD">
                    {dropdowns.research.map((x) => (
                      <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                        {x}
                      </a>
                    ))}
                  </div>
                </details>

                <details>
                  <summary>
                    Admissions <IoChevronDownOutline />
                  </summary>
                  <div className="navx-mDD">
                    {dropdowns.admissions.map((x) => (
                      <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                        {x}
                      </a>
                    ))}
                  </div>
                </details>

                <details>
                  <summary>
                    Student life <IoChevronDownOutline />
                  </summary>
                  <div className="navx-mDD">
                    {dropdowns.life.map((x) => (
                      <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                        {x}
                      </a>
                    ))}
                  </div>
                </details>

                <details>
                  <summary>
                    News & Events <IoChevronDownOutline />
                  </summary>
                  <div className="navx-mDD">
                    {dropdowns.news.map((x) => {
                      if (x === "OUR STAFF") {
                        return (
                          <button
                            key={x}
                            type="button"
                            onClick={goStaff}
                            style={{
                              width: "100%",
                              textAlign: "left",
                              background: "transparent",
                              border: 0,
                              padding: "10px 0",
                              cursor: "pointer",
                              fontFamily: '"DM Sans", sans-serif',
                            }}
                          >
                            {x}
                          </button>
                        );
                      }
                      return (
                        <a key={x} href="#" onClick={() => setMobileOpen(false)}>
                          {x}
                        </a>
                      );
                    })}
                  </div>
                </details>

                <a className="navx-mLink" href="#" onClick={() => setMobileOpen(false)}>
                  Contact us
                </a>
              </div>

              <div className="navx-mActions">
                <button className="navx-apply wide" type="button">
                  Apply now <IoChevronForwardOutline className="navx-applyArrow" />
                </button>

                <div className="navx-mContacts">
                  <a href="mailto:info@newuu.uz">
                    <IoMailOutline /> info@newuu.uz
                  </a>
                  <a href="tel:+998712024111">
                    <IoCallOutline /> +998 (71) 202-41-11
                  </a>
                </div>
              </div>
            </motion.div>

            <button className="navx-mBackdrop" type="button" aria-label="Close menu backdrop" onClick={() => setMobileOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
