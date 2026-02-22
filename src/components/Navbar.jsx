// src/components/Navbar.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
    const navigate = useNavigate();
    const navRef = useRef(null);

    // ✅ OurStaff va shunga o‘xshash hero-baner page lar
    const isStaffListPage = location.pathname === "/staff";
    const isStaffDetailPage = location.pathname.startsWith("/staff/");
    const isLegacyStaffPage =
        location.pathname === "/our-staff" || location.pathname === "/department-community";

    const overlayPages = ["/our-staff"];
    const overlayMode = overlayPages.includes(location.pathname);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const onRouteCheck = () => setScrolled(window.scrollY > 30);
        onRouteCheck();
    }, [location.pathname]);

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
        navigate("/staff");
    };

    const solidWhiteMode =
  isStaffListPage || isStaffDetailPage || isLegacyStaffPage;

    return (
        <header
            className={`navx ${scrolled ? "is-scrolled" : ""} ${overlayMode ? "navx--overlay" : ""
                } ${solidWhiteMode ? "navx--solid" : ""}`}
            ref={navRef}
            style={{ fontFamily: '"DM Sans", sans-serif' }}
        >
            {/* ================= TOP STRIP ================= */}
            <div className="navx-top">
                <div className="navx-container">
                    <div className="navx-top-row">
                        <div className="navx-top-left">
                            <a className="navx-top-link" href="mailto:info@newuu.uz">
                                <IoMailOutline /> info@iau.uz
                            </a>
                            <span className="navx-sep" />
                            <a className="navx-top-link" href="tel:+998998810919">
                                <IoCallOutline /> +998 (99) 981-09-19
                            </a>
                        </div>

                        <div className="navx-top-center">

                        </div>

                        <div className="navx-top-right">
                            <button className="navx-iconBtn" type="button" aria-label="View">
                                <IoEyeOutline />
                            </button>

                            <button
                                className="navx-iconBtn"
                                type="button"
                                aria-label="Search"
                            >
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

                                <div className="navx-langMenu">
                                    <button type="button" onClick={() => setLangOpen(false)}>
                                        UZ — O‘zbek
                                    </button>
                                    <button type="button" onClick={() => setLangOpen(false)}>
                                        RU — Русский
                                    </button>
                                    <button type="button" onClick={() => setLangOpen(false)}>
                                        EN — English
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAV ================= */}
            <nav className="navx-main" aria-label="Main Navigation">
                <div className="navx-container">
                    <div className="navx-main-row">
                        <Link
                            className="navx-brand"
                            to="/"
                            onClick={() => setMobileOpen(false)}
                        >
                            <img
                                src={navbarLogo}
                                alt="University Logo"
                                className="navx-logo"
                            />
                        </Link>

                        <div className="navx-links">
                            <div className={`navx-dd ${openDD === "about" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "about" ? null : "about"));
                                    }}
                                >
                                    Programmes <IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.about.map((x) => (
                                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                            {x}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "research" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "research" ? null : "research"));
                                    }}
                                >
                                    Students Life <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.research.map((x) => (
                                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                            {x}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div
                                className={`navx-dd ${openDD === "admissions" ? "open" : ""}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "admissions" ? null : "admissions"));
                                    }}
                                >
                                    Research <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.admissions.map((x) => (
                                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                            {x}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "life" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "life" ? null : "life"));
                                    }}
                                >
                                    Festivals <IoChevronDownOutline />
                                </button>
                                <div className="navx-ddMenu">
                                    {dropdowns.life.map((x) => (
                                        <a key={x} href="#" onClick={() => setOpenDD(null)}>
                                            {x}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className={`navx-dd ${openDD === "news" ? "open" : ""}`}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLangOpen(false);
                                        setOpenDD((v) => (v === "news" ? null : "news"));
                                    }}
                                >
                                    About us <IoChevronDownOutline />
                                </button>

                                <div className="navx-ddMenu">
                                    {dropdowns.news.map((x) => {
                                        if (x === "OUR STAFF") {
                                            return (
                                                <button
                                                    key={x}
                                                    type="button"
                                                    className="navx-ddAction"
                                                    onClick={goStaff}
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
                                </div>
                            </div>

                            <a className="navx-link" href="#" onClick={() => setOpenDD(null)}>
                                Contact us
                            </a>
                        </div>

                        <div className="navx-cta">
                            <button className="navx-apply" type="button">
                                Apply now <IoChevronForwardOutline className="navx-applyArrow" />
                            </button>
                        </div>

                        <button
                            className="navx-burger"
                            type="button"
                            aria-label="Open menu"
                            onClick={() => {
                                closeAll();
                                setMobileOpen(true);
                            }}
                        >
                            <IoMenuOutline />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ================= MOBILE OVERLAY MENU ================= */}
            <div className={`navx-mOverlay ${mobileOpen ? "open" : ""}`}>
                <div className="navx-mPanel">
                    <div className="navx-mTop">
                        <div className="navx-mBrand">
                            <span className="navx-brand-mark" />
                            <span className="navx-brand-text">
                                <span>New</span>
                                <span>Uzbekistan</span>
                                <span>University</span>
                            </span>
                        </div>

                        <button
                            className="navx-mClose"
                            type="button"
                            aria-label="Close menu"
                            onClick={() => setMobileOpen(false)}
                        >
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
                                                className="navx-mDDbtn"
                                                onClick={goStaff}
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
                </div>

                <button
                    className="navx-mBackdrop"
                    type="button"
                    aria-label="Close menu backdrop"
                    onClick={() => setMobileOpen(false)}
                />
            </div>
        </header>
    );
}
