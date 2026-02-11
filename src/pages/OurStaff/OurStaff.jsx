import "./OurStaff.css";
import { Link, useNavigate } from "react-router-dom";
import staffHero from "../../images/campus.png"; // xohlasang o'zing rasm qo'yasan

const DEPARTMENTS = [
  {
    title: "Department of Control and Execution Control",
    avatars: ["https://i.pravatar.cc/80?img=32"],
  },
  {
    title: "Information Analysis and Strategic Development Department",
    avatars: ["https://i.pravatar.cc/80?img=12"],
  },
  {
    title: "Department of Media Relations",
    avatars: [
      "https://i.pravatar.cc/80?img=15",
      "https://i.pravatar.cc/80?img=22",
      "https://i.pravatar.cc/80?img=25",
      "https://i.pravatar.cc/80?img=28",
    ],
  },
  {
    title: "International Cooperation Department",
    avatars: ["https://i.pravatar.cc/80?img=18"],
  },
  {
    title:
      "Department of Human Resources, Recruitment and Operations with Foreign",
    avatars: ["https://i.pravatar.cc/80?img=35"],
  },
  {
    title: "Legal Department",
    avatars: ["https://i.pravatar.cc/80?img=40"],
  },
];

export default function OurStaff() {
  const navigate = useNavigate();

  const goDepartment = (title) => {
    navigate("/department-community", { state: { title } });
  };

  return (
    <main className="os-page">
      {/* HERO */}
      <section className="os-hero">
        <div className="os-hero-bg">
          {/* agar rasm kerak bo'lmasa, comment qil */}
          <img src={staffHero} alt="University" />
        </div>
        <div className="os-hero-overlay" />

        <div className="os-hero-inner">
          <nav className="os-breadcrumb">
            <Link to="/" className="os-crumb">
              Home
            </Link>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb">About NewUU</span>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb">Leadership</span>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb">Our team</span>
            <span className="os-crumbSep">›</span>
            <span className="os-crumb os-crumbActive">University Staff</span>
          </nav>

          <h1 className="os-title">University Staff</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="os-body">
        <div className="os-container">
          <div className="os-layout">
            {/* LEFT: CARDS */}
            <div className="os-grid">
              {DEPARTMENTS.map((d, idx) => (
                <article
                  className="os-card"
                  key={idx}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${d.title}`}
                  onClick={() => goDepartment(d.title)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goDepartment(d.title);
                    }
                  }}
                >
                  <h3 className="os-cardTitle">{d.title}</h3>
                  <div className="os-cardLine" />

                  <div className="os-cardBottom">
                    <div className="os-avatars">
                      {d.avatars.map((src, i) => (
                        <img
                          className="os-avatar"
                          src={src}
                          alt="staff"
                          key={i}
                        />
                      ))}
                    </div>

                    <button
                      className="os-moreBtn"
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // ✅ card clickini to'xtatadi
                        goDepartment(d.title);
                      }}
                    >
                      See more <span className="os-arrow">→</span>
                    </button>
                  </div>

                  {/* pattern background */}
                  <span className="os-pattern" aria-hidden="true" />
                </article>
              ))}
            </div>

            {/* RIGHT: SIDEBAR */}
            <aside className="os-side">
              <div className="os-sideCard">
                <div className="os-sideTitle">Our team</div>

                <Link className="os-sideLink active" to="/our-staff">
                  <span className="os-sideMark" />
                  University Staff
                </Link>

                <a className="os-sideLink" href="#">
                  Academic Community
                </a>
                <a className="os-sideLink" href="#">
                  Other separate organizations
                </a>
                <a className="os-sideLink" href="#">
                  University structure
                </a>
              </div>

              <div className="os-sidePhoto">
                <div className="os-sidePhotoInner">
                  {/* pastdagi rasmni xohlasang qo'yasan */}
                  <div className="os-sidePhotoPlaceholder">Photo</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
