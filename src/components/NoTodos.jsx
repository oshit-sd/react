import React from 'react';

export default function NoTodos() {
  return (
    <div className="text-center flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#808080"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z" />
        <path d="M16 8H8" />
        <path d="M16 12H8" />
        <path d="M16 16H8" />
      </svg>

      <span>Add some todos...</span>
    </div>
  );
}
