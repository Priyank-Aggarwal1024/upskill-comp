import "../styles/CommonSection.css";
function MentorConnect() {
  return (
    <>
      <div className="usm-section usm-mentor">
        <div className="usm-section-inner usm-mentor-inner">
          <div className="usm-section-image">
            <iframe
              src="https://www.youtube.com/embed/hSPNvXXRk04?si=oCmkZSnYXsCVWlCT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
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
