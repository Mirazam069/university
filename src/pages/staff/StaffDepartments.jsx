import { Link } from "react-router-dom";
import departments from "../../data/departments.json";
import DepartmentCard from "../../components/staff/DepartmentCard";
import "./StaffDepartments.css";

const teamMenu = [
  { label: "University Staff", active: true, href: "/staff" },
  { label: "Academic Community", active: false, href: "#" },
  { label: "Other separate organizations", active: false, href: "#" },
  { label: "University structure", active: false, href: "#" },
];

export default function StaffDepartments() {
  return (
    <main className="sdp-page">
      <section className="sdp-hero">
        <div className="sdp-hero__container">
          <nav className="sdp-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our team</span>
            <span>/</span>
            <strong>University Staff</strong>
          </nav>
          <h1 className="sdp-title">University Staff</h1>
        </div>
      </section>

      <section className="sdp-body">
        <div className="sdp-container">
          <div className="sdp-layout">
            <section className="sdp-main">
              <div className="sdp-grid">
                {departments.map((department) => (
                  <DepartmentCard key={department.id} department={department} />
                ))}
              </div>
            </section>

            <aside className="sdp-side">
              <div className="sdp-sideCard">
                <h2 className="sdp-sideTitle">Our team</h2>

                {teamMenu.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`sdp-sideLink ${item.active ? "is-active" : ""}`}
                    >
                      <span className="sdp-sideMark" />
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`sdp-sideLink ${item.active ? "is-active" : ""}`}
                    >
                      <span className="sdp-sideMark" />
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
