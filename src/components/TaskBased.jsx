import "../styles/CommonSection.css";
import dash2 from "../assets/dash-2.webp";
function TaskBased() {
  return (
    <>
      <div className="usm-section">
        <div className="usm-section-inner">
          <div className="usm-section-content">
            <div className="usm-section-cont-head">
              Task based Learning <span className="emoji">📚</span>
            </div>
            <div className="usm-section-cont-subhead">
              You learn concepts here by building multiple projects
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

export default TaskBased;
