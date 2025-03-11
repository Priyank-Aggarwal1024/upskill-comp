import "../styles/Hero.css";
import dash from "../assets//dash.webp";
import play from "../assets/play.svg";
import nodejs from "../assets/nodejs.svg";
import java from "../assets/java.svg";
import react from "../assets/react.svg";
import python from "../assets/python.svg";
function Hero() {
  return (
    <>
      <div className="usm-hero">
        <div className="usm-hero-left">
          <div className="usm-hl-top">
            <div className="usm-hlt-top">An IIT Delhi Alumni initiative</div>
            <div className="usm-hlt-bottom">
              <div className="usm-hltb-head">India’s first virtual campus</div>
              <div className="usm-hltb-subhead">
                Learn Tech skills in the most fun & engaging way
              </div>
            </div>
          </div>
          <div className="usm-hl-bottom hero-large-button">
            <span> Start learning at ₹199</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="135"
              height="35"
              viewBox="0 0 135 35"
              fill="none"
              className="usm-button-halfborder"
            >
              <path
                d="M1.24219 0.894531C1.24219 19.1351 16.0291 33.9221 34.2697 33.9221H133.352"
                stroke="url(#paint0_linear_2177_737)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2177_737"
                  x1="67.2972"
                  y1="0.894531"
                  x2="67.2972"
                  y2="33.9221"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EDD86B" />
                  <stop offset="1" stopColor="#EBCE31" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="usm-hero-right">
          <div className="usm-hr-top">
            <img src={dash} alt="Dashboard" />
            <div className="usm-hr-top-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="136"
                height="36"
                viewBox="0 0 136 36"
                fill="none"
                className="usm-hero-graybutton-stroke"
              >
                <path
                  d="M0.875 0.855469C0.875 19.4088 15.9155 34.4493 34.4688 34.4493H135.25"
                  stroke="#4C4C4C"
                  strokeWidth="1.29207"
                  strokeLinecap="round"
                />
              </svg>
              <div className="usm-hr-top-button-play">
                <img src={play} alt="Play" />
              </div>
              <span>Watch Campus Preview</span>
            </div>
          </div>
          <div className="usm-hr-bottom">
            <div className="usm-hr-bottom-icons">
              <img src={nodejs} alt="Node JS" />
              <img src={java} alt="Java" />
              <img src={react} alt="React" />
              <img src={python} alt="Python" />
            </div>
            <span>& 25+ Tech Skills</span>
          </div>
          <div className="usm-hl-bottom hero-small-button">
            <span> Start learning at ₹199</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="usm-button-halfborder"
              width="110"
              height="30"
              viewBox="0 0 110 30"
              fill="none"
            >
              <path
                d="M0.84375 1.4668C0.84375 16.3701 12.9253 28.4516 27.8286 28.4516H108.783"
                stroke="url(#paint0_linear_2177_88)"
                strokeWidth="1.55682"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2177_88"
                  x1="54.8134"
                  y1="1.4668"
                  x2="54.8134"
                  y2="28.4516"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EDD86B" />
                  <stop offset="1" stopColor="#EBCE31" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
