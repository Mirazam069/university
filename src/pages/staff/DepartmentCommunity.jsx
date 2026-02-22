import { Link, Navigate, useParams } from "react-router-dom";
import departments from "../../data/departments.json";
import StaffCard from "../../components/staff/StaffCard";
import "./DepartmentCommunity.css";

const teamMenu = [
  { label: "University Staff", active: true, href: "/staff" },
  { label: "Academic Community", active: false, href: "#" },
  { label: "Other separate organizations", active: false, href: "#" },
  { label: "University structure", active: false, href: "#" },
];

export default function DepartmentCommunity() {
  const { deptId } = useParams();
  const department = departments.find((item) => item.id === deptId);

  if (!department) {
    return <Navigate to="/staff" replace />;
  }

  return (
    <main className="dcp-page">
      <section className="dcp-body">
        <div className="dcp-container">
          <div className="dcp-layout">
            <section className="dcp-main">
              <p className="dcp-subtitle">{department.title}</p>
              <h1 className="dcp-title">Department community</h1>

              <div className="dcp-grid">
                {department.members.map((member) => (
                  <StaffCard key={`${member.name}-${member.position}`} member={member} />
                ))}
              </div>
            </section>

            <aside className="dcp-side">
              <div className="dcp-sideCard">
                <h2 className="dcp-sideTitle">Our team</h2>

                {teamMenu.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`dcp-sideLink ${item.active ? "is-active" : ""}`}
                    >
                      <span className="dcp-sideMark" />
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`dcp-sideLink ${item.active ? "is-active" : ""}`}
                    >
                      <span className="dcp-sideMark" />
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
