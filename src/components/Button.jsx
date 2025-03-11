import "../styles/YellowButton.css";
export const YellowButton = ({ children, classN }) => {
  return (
    <>
      <div className={`usm-yellowbutton ${classN}`}>
        {children}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="143"
          height="38"
          viewBox="0 0 143 38"
          fill="none"
          className="usm-yellowbutton-stroke"
        >
          <path
            d="M1.22656 1.65625C1.22656 20.9862 16.8966 36.6563 36.2266 36.6563H141.227"
            stroke="url(#paint0_linear_2177_700)"
            strokeWidth="2.01923"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2177_700"
              x1="1.22656"
              y1="19.1563"
              x2="141.227"
              y2="19.1563"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#74A528" />
              <stop offset="1" stopColor="#ECD661" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};
