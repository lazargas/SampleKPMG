import React from "react";

export const GridIcon = ({ size = 24, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
  >
    <rect x="3" y="3" width="7" height="7" fill={color} rx="1" ry="1" />
    <rect x="12" y="3" width="7" height="7" fill={color} rx="1" ry="1" />
    <rect x="3" y="12" width="7" height="7" fill={color} rx="1" ry="1" />
    <rect x="12" y="12" width="7" height="7" fill={color} rx="1" ry="1" />
  </svg>
);

export const ListIcon = ({ size = 24, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
  >
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
);

export const TableIcon = ({
  size = 24,
  strokeColor = "black",
  fillColor = "none",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
  >
    <rect
      x="1"
      y="1"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="8"
      y="1"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="15"
      y="1"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="1"
      y="8"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="8"
      y="8"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="15"
      y="8"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="1"
      y="15"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="8"
      y="15"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
    <rect
      x="15"
      y="15"
      width="7"
      height="7"
      stroke={strokeColor}
      fill={fillColor}
    />
  </svg>
);
