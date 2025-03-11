import "../styles/CommonSection.css";
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
            <iframe
              src="https://www.youtube.com/embed/swSeye91dVg?si=RhoxSrEX51skQuuW"
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

export default GroupStudy;
