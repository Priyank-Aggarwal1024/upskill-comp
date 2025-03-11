import "../styles/CommonSection.css";
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
            <iframe
              src="https://www.youtube.com/embed/tmFfRvn6CyQ?si=lbFgu4X6SJa6TNJV"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskBased;
