import "../styles/CommonSection.css";
import dash2 from "../assets/dash-2.webp";
function GroupStudy() {
  return (
    <>
      <div className="usm-section">
        <div className="usm-section-inner">
          <div className="usm-section-content">
            <div className="usm-section-cont-head">
              Group study with other smart students{" "}
              <span className="emoji">👩🏻‍🎓</span>
            </div>
            <div className="usm-section-cont-subhead">
              Work on group projects, participate in competitions and build
              lifelong friends with like-minded people{" "}
            </div>
          </div>
          <div className="usm-section-image">
            <img src={dash2} alt="Dash 2" />
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupStudy;
