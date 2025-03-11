import "../styles/CommonSection.css";
import dash2 from "../assets/dash-2.webp";
function MentorConnect() {
  return (
    <>
      <div className="usm-section usm-mentor">
        <div className="usm-section-inner usm-mentor-inner">
          <div className="usm-section-image">
            <img src={dash2} alt="Dash 2" />
          </div>
          <div className="usm-section-content">
            <div className="usm-section-cont-head">
              Instant 1:1 Mentor connect
            </div>
            <div className="usm-section-cont-subhead">
              Connect with mentors of different fields live everyday 8pm-11pm.
              Ask doubts through audio & screensharing
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MentorConnect;
