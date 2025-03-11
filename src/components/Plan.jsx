import "../styles/Plan.css";
import tick from "../assets/tick.svg";
import { YellowButton } from "./Button";
function Plan({ plan, selectedPlan, setSelectedPlan }) {
  return (
    <>
      <div className="usm-plan">
        <div className="usm-plan-heading">
          Choose plan <span className="usm-emoji">💰</span>
        </div>
        <div className="usm-plan-inner">
          <div className="usm-plan-left">
            <div className="usm-plan-left-head">{plan[selectedPlan].head}</div>
            <div className="usm-plan-left-plandiv">
              <span
                className={`usm-plp-period ${selectedPlan == 0 && "selected"}`}
              >
                {plan[0].time}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="32"
                viewBox="0 0 64 32"
                fill="none"
                style={{
                  rotate: selectedPlan == 1 && "180deg",
                  cursor: "pointer",
                }}
                onClick={() =>
                  selectedPlan == 0 ? setSelectedPlan(1) : setSelectedPlan(0)
                }
              >
                <rect
                  x="0.671875"
                  y="0.253906"
                  width="62.1363"
                  height="31.0681"
                  rx="15.5341"
                  fill="url(#paint0_linear_2177_704)"
                />
                <circle cx="17.1161" cy="16.2489" r="11.5067" fill="white" />
                <defs>
                  <linearGradient
                    id="paint0_linear_2177_704"
                    x1="0.671875"
                    y1="15.788"
                    x2="62.8081"
                    y2="15.788"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#74A528" />
                  </linearGradient>
                </defs>
              </svg>
              <span
                className={`usm-plp-period ${selectedPlan == 1 && "selected"}`}
              >
                {plan[1].time}
              </span>
            </div>
            <div className="usm-plan-left-price">
              <sup className="usm-plan-left-power">₹</sup>
              <span>{plan[selectedPlan].price}</span>
            </div>
            <div className="usm-plan-left-disdiv">
              <div className="usm-plan-left-discount">
                {plan[selectedPlan].discount}
              </div>
              <div className="usm-plan-left-discountpercentage">
                {plan[selectedPlan].disper}
              </div>
            </div>
            <YellowButton classN={"usm-plan-left-buttonmain"}>
              <div className="usm-plan-left-button">
                Start learning Now for ₹{plan[selectedPlan].price}
              </div>
            </YellowButton>
          </div>
          <div className="usm-plan-right">
            <div className="usm-plan-right-top">
              Learn, Build, Network & Earn
            </div>
            <div className="usm-plan-right-bottom">
              <div className="usm-plan-right-bottom-para">
                Access to 25+ professional courses
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>hackathons & competitions</span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Practise mock interviews</span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Guranteed jobs and internships </span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Clubs & Certifications</span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Resume Building with Experts </span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Resume Building with Experts </span>
              </div>
              <div className="usm-plan-right-bottom-para">
                <img src={tick} alt="right" />
                <span>Personalized Mentorship</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
