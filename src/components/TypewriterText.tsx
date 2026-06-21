"use client";

import { useEffect, useState } from "react";

const roles = [
  "Backend Development",
  "RPA Development",
  "Machine Learning",
  "AI Development",
  "Data Science & Analytics",
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 65;
    const pauseBeforeDelete = 1600;
    const pauseBeforeNext = 300;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTimeout(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }, pauseBeforeNext);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      {displayText}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "0.9em",
          background: "var(--black)",
          marginLeft: "3px",
          animation: "blink-cursor 0.9s step-end infinite",
        }}
      />
    </span>
  );
}
