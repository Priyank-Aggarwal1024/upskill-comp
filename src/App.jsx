import "./App.css";
import GroupStudy from "./components/GroupStudy";
import Hero from "./components/Hero";
import MentorConnect from "./components/MentorConnect";
import TaskBased from "./components/TaskBased";
function App() {
  return (
    <>
      <div className="usm">
        <Hero />
        <div className="usm-note">
          <div className="usm-note-inner">
            <div className="usm-note-inner-head">Note:</div>
            <div className="usm-note-inner-subhead">
              You will not just get one course but you will get all 26 courses
              together and you can learn as many courses as you want.
            </div>
          </div>
        </div>
        <TaskBased />
        <MentorConnect />
        <GroupStudy />
      </div>
    </>
  );
}

export default App;
