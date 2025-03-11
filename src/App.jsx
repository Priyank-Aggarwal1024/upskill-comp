import { useState } from "react";
import "./App.css";
import { YellowButton } from "./components/Button";
import GroupStudy from "./components/GroupStudy";
import Hero from "./components/Hero";
import MentorConnect from "./components/MentorConnect";
import Plan from "./components/Plan";
import TaskBased from "./components/TaskBased";
function App() {
  const plan = [
    {
      price: "199",
      discount: "5999",
      disper: "60%",
      time: "1 Month",
      head: "Monthly Payment Plan",
    },
    {
      price: "999",
      discount: "5999",
      disper: "60%",
      time: "12 Months",
      head: "Yearly Payment Plan",
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(0);
  return (
    <>
      <div className="usm">
        <Hero />
        <div className="usm-bot-fix-sec-outer">
          <div className="usm-bot-fix-sec">
            <div className="usm-bfs-left">
              <div className="usm-bfsl-top">
                <span className="usm-bfslt-price">₹199</span>
                <span className="usm-bfslt-disprice">₹599</span>
              </div>
              <div className="usm-bfsl-bottom">Per month</div>
            </div>
            <div className="usm-bfs-right">
              <YellowButton>
                <div className="usm-bfsr-text">
                  <span>Start learning Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="22"
                    viewBox="0 0 27 22"
                    fill="none"
                  >
                    <path
                      d="M2.00455 10.7255L25.4297 10.7255M25.4297 10.7255L16.6453 1.35547M25.4297 10.7255L16.6453 20.0956"
                      stroke="black"
                      strokeWidth="2.34251"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </YellowButton>
            </div>
          </div>
        </div>
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
        <Plan
          plan={plan}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
        <div className="usm-bottom"></div>
      </div>
    </>
  );
}

export default App;
