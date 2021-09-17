import React from "react";
import PropTypes from "prop-types";
import Colors from "./Colors";

const StaccIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.99995 0L20 6.00996V17.99L9.99995 24L0 17.99V6.00996L9.99995 0ZM1.65006 17.0328V13.4702L9.17483 17.9903V21.5552L1.65006 17.0328ZM9.17483 16.0415L1.65006 11.5215V7.95881L9.17483 12.4789V16.0415ZM10.8249 21.5553V12.4793L13.7638 10.7139V19.789L10.8249 21.5553ZM15.4139 18.7973L18.3499 17.0328V7.959L15.4139 9.72268V18.7973ZM12.9676 3.73247L9.99995 1.94896L2.44653 6.48857L5.41299 8.2705L12.9676 3.73247ZM14.5892 4.70707L7.03511 9.24485L10.0002 11.026L17.5536 6.48866L14.5892 4.70707Z"
      fill={color}
    />
  </svg>
);

StaccIcon.propTypes = {
  color: PropTypes.string
};

StaccIcon.defaultProps = {
  color: Colors.Ferrari
};

export default StaccIcon;
