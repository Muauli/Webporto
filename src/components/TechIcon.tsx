"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react";
import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiNodedotjs,
  SiTypescript,
  SiPytorch,
  SiTensorflow,
  SiHuggingface,
  SiScikitlearn,
  SiSap,
  SiDocker,
  SiGit,
  SiLaravel,
  SiFlutter,
  SiJavascript,
  SiMysql,
  SiDbeaver,
} from "react-icons/si";

interface CustomIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CustomPowerBI = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 96 96"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <mask
      id="a"
      width={72}
      height={94}
      x={12}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path
        fill="#ffffff"
        d="M51.9167 4.91667C51.9167 2.75355 53.6703 1 55.8333 1h23.5C81.4964 1 83.25 2.75355 83.25 4.91667V91.0833C83.25 93.2464 81.4964 95 79.3333 95H16.6667c-2.1631 0-3.9167-1.7536-3.9167-3.9167V51.9167C12.75 49.7536 14.5036 48 16.6667 48h15.6667V28.4167c0-2.1631 1.7536-3.9167 3.9167-3.9167h15.6666V4.91667Z"
      />
    </mask>
    <g mask="url(#a)">
      <path fill="url(#b)" d="M83.2503 1v94H51.917V1h31.3333Z" />
    </g>
    <mask
      id="c"
      width={72}
      height={94}
      x={12}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path
        fill="#ffffff"
        d="M51.9167 4.91667C51.9167 2.75355 53.6703 1 55.8333 1h23.5C81.4964 1 83.25 2.75355 83.25 4.91667V91.0833C83.25 93.2464 81.4964 95 79.3333 95H16.6667c-2.1631 0-3.9167-1.7536-3.9167-3.9167V51.9167C12.75 49.7536 14.5036 48 16.6667 48h15.6667V28.4167c0-2.1631 1.7536-3.9167 3.9167-3.9167h15.6666V4.91667Z"
      />
    </mask>
    <g mask="url(#c)">
      <path
        fill="#000000"
        fillOpacity={0.2}
        d="M63.6663 28.8083v66.5833H32.333v-70.5h27.4167c2.1631 0 3.9166 1.7536 3.9166 3.9167Z"
      />
    </g>
    <mask
      id="d"
      width={72}
      height={94}
      x={12}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path
        fill="#ffffff"
        d="M51.9167 4.91667C51.9167 2.75355 53.6703 1 55.8333 1h23.5C81.4964 1 83.25 2.75355 83.25 4.91667V91.0833C83.25 93.2464 81.4964 95 79.3333 95H16.6667c-2.1631 0-3.9167-1.7536-3.9167-3.9167V51.9167C12.75 49.7536 14.5036 48 16.6667 48h15.6667V28.4167c0-2.1631 1.7536-3.9167 3.9167-3.9167h15.6666V4.91667Z"
      />
    </mask>
    <g mask="url(#d)">
      <path
        fill="#000000"
        fillOpacity={0.18}
        d="M63.6663 30.3752v66.5833H32.333v-70.5h27.4167c2.1631 0 3.9166 1.7536 3.9166 3.9167Z"
      />
    </g>
    <mask
      id="e"
      width={72}
      height={94}
      x={12}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path
        fill="#ffffff"
        d="M51.9167 4.91667C51.9167 2.75355 53.6703 1 55.8333 1h23.5C81.4964 1 83.25 2.75355 83.25 4.91667V91.0833C83.25 93.2464 81.4964 95 79.3333 95H16.6667c-2.1631 0-3.9167-1.7536-3.9167-3.9167V51.9167C12.75 49.7536 14.5036 48 16.6667 48h15.6667V28.4167c0-2.1631 1.7536-3.9167 3.9167-3.9167h15.6666V4.91667Z"
      />
    </mask>
    <g mask="url(#e)">
      <path
        fill="url(#f)"
        d="M63.6663 28.4167V95H32.333V24.5h27.4167c2.1631 0 3.9166 1.7536 3.9166 3.9167Z"
      />
    </g>
    <mask
      id="g"
      width={72}
      height={94}
      x={12}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path
        fill="#ffffff"
        d="M51.9167 4.91667C51.9167 2.75355 53.6703 1 55.8333 1h23.5C81.4964 1 83.25 2.75355 83.25 4.91667V91.0833C83.25 93.2464 81.4964 95 79.3333 95H16.6667c-2.1631 0-3.9167-1.7536-3.9167-3.9167V51.9167C12.75 49.7536 14.5036 48 16.6667 48h15.6667V28.4167c0-2.1631 1.7536-3.9167 3.9167-3.9167h15.6666V4.91667Z"
      />
    </mask>
    <g mask="url(#g)">
      <path
        fill="url(#h)"
        d="M12.75 48v47h31.3333V51.9167c0-2.1631-1.7536-3.9167-3.9166-3.9167H12.75Z"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={1386.49}
        x2={4849.79}
        y1={1}
        y2={7342.01}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#e6ad10" />
        <stop offset={1} stopColor="#c87e0e" />
      </linearGradient>
      <linearGradient
        id="f"
        x1={1289.48}
        x2={4178.73}
        y1={24.5}
        y2={5627.89}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f6d751" />
        <stop offset={1} stopColor="#e6ad10" />
      </linearGradient>
      <linearGradient
        id="h"
        x1={883.007}
        x2={2642.02}
        y1={48}
        y2={4216.82}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f9e589" />
        <stop offset={1} stopColor="#f6d751" />
      </linearGradient>
    </defs>
  </svg>
);

const CustomJava = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <path
      fill="#5382a1"
      d="M8.916025 18.42385s-0.898025 0.52225 0.6391 0.698975c1.8622 0.212425 2.81395 0.181975 4.8661 -0.206425 0 0 0.539525 0.3383 1.293025 0.6313 -4.600375 1.97165 -10.411575 -0.1142 -6.798225 -1.12385Z"
    />
    <path
      fill="#5382a1"
      d="M8.3539 15.851025s-1.007225 0.745575 0.53105 0.904675c1.98925 0.205225 3.560225 0.222 6.278575 -0.301425 0 0 0.376 0.381175 0.9672 0.589625 -5.562125 1.62645 -11.75735 0.12825 -7.776825 -1.192875Z"
    />
    <path
      fill="#e76f00"
      d="M13.092925 11.48655c1.133525 1.30505 -0.297825 2.47945 -0.297825 2.47945s2.878225 -1.48585 1.556375 -3.34645c-1.23455 -1.73515 -2.1813 -2.59725 2.944 -5.56975 0 0 -8.045025 2.009275 -4.20255 6.43675Z"
    />
    <path
      fill="#5382a1"
      d="M19.177275 20.326925s0.66455 0.547575 -0.7319 0.9712c-2.6554 0.804425 -11.052075 1.047325 -13.384625 0.03205 -0.8385 -0.364775 0.7339 -0.871 1.228525 -0.9772 0.51585 -0.111875 0.810625 -0.091025 0.810625 -0.091025 -0.932475 -0.6569 -6.0272375 1.28985 -2.587875 1.847375 9.37965 1.5211 17.0982 -0.68495 14.66525 -1.7824Z"
    />
    <path
      fill="#5382a1"
      d="M9.347925 13.18515s-4.271075 1.014475 -1.5125 1.38285c1.16475 0.15595 3.486675 0.120675 5.6495 -0.06055 1.76755 -0.1491 3.5424 -0.466125 3.5424 -0.466125s-0.62325 0.266925 -1.074175 0.574825c-4.3372 1.140675 -12.7159 0.610025 -10.303775 -0.556775 2.039925 -0.986075 3.69855 -0.874225 3.69855 -0.874225Z"
    />
    <path
      fill="#5382a1"
      d="M17.009625 17.46785c4.408975 -2.291075 2.37045 -4.492775 0.947575 -4.19615 -0.34875 0.072575 -0.50425 0.135475 -0.50425 0.135475s0.129475 -0.202825 0.37675 -0.2906c2.8149 -0.989625 4.979725 2.918775 -0.908675 4.466725 0 0 0.0682 -0.060925 0.0886 -0.11545Z"
    />
    <path
      fill="#e76f00"
      d="M14.351425 0.25s2.441775 2.442575 -2.3159 6.198575c-3.81515 3.012975 -0.869975 4.730875 -0.001575 6.69365 -2.226975 -2.009275 -3.861275 -3.778025 -2.76485 -5.42425C10.878375 5.3015 15.336625 4.1299 14.351425 0.25Z"
    />
    <path
      fill="#5382a1"
      d="M9.781125 23.676125c4.23205 0.2709 10.730875 -0.150325 10.884775 -2.1528 0 0 -0.29585 0.759125 -3.497575 1.362 -3.61215 0.67975 -8.067225 0.6004 -10.709575 0.16475 0 0 0.540925 0.447675 3.322375 0.62605Z"
    />
  </svg>
);

const CustomN8n = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <title>n8n</title>
    <path
      d="M21.4737 5.6842c-1.1772 0 -2.1663 0.8051 -2.4468 1.8947h-2.8955c-1.235 0 -2.289 0.893 -2.492 2.111l-0.1038 0.623a1.263 1.263 0 0 1 -1.246 1.0555H11.289c-0.2805 -1.0896 -1.2696 -1.8947 -2.4468 -1.8947s-2.1663 0.8051 -2.4467 1.8947H4.973c-0.2805 -1.0896 -1.2696 -1.8947 -2.4468 -1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663 -0.8051 2.4468 -1.8947h1.4223c0.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663 -0.8051 2.4468 -1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l0.1038 0.623c0.203 1.218 1.257 2.111 2.492 2.111h0.3692c0.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263 -1.131 2.5263 -2.5263s-1.131 -2.5263 -2.5263 -2.5263c-1.1772 0 -2.1664 0.805 -2.4468 1.8947h-0.3692a1.263 1.263 0 0 1 -1.246 -1.0555l-0.1037 -0.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 0.821 -1.4794l0.1038 -0.623a1.263 1.263 0 0 1 1.2459 -1.0555h2.8955c0.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263 -1.131 2.5263 -2.5263s-1.131 -2.5263 -2.5263 -2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1 -1.2631 1.2632 1.263 1.263 0 0 1 -1.2632 -1.2632 1.263 1.263 0 0 1 1.2632 -1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1 -1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631 -1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1 -1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632 -1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1 -1.2631 1.2631 1.263 1.263 0 0 1 -1.2632 -1.2631 1.263 1.263 0 0 1 1.2632 -1.2632"
      fill="#000000"
    />
  </svg>
);

const CustomPowerAutomate = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-5 10.4 102 77.6"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <defs>
      <filter id="pa-filter0">
        <feFlood floodOpacity="0" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" result="shape" />
        <feGaussianBlur stdDeviation="0.4" />
      </filter>
      <filter id="pa-filter1">
        <feFlood floodOpacity="0" result="bg" />
        <feBlend in="SourceGraphic" in2="bg" result="shape" />
        <feGaussianBlur stdDeviation="4" />
      </filter>
      <linearGradient
        id="pa-g0"
        x1="43"
        y1="55"
        x2="29"
        y2="10"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0D36A5" />
        <stop offset="1" stopColor="#1152D4" />
      </linearGradient>
      <linearGradient
        id="pa-g1"
        x1="46"
        y1="10"
        x2="46"
        y2="86"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#84CAFF" />
        <stop offset="1" stopColor="#61B1FB" />
      </linearGradient>
      <linearGradient
        id="pa-g2"
        x1="37.5"
        y1="10"
        x2="37.5"
        y2="86"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B90F5" />
        <stop offset="1" stopColor="#2A78EE" />
      </linearGradient>
      <clipPath id="pa-clip">
        <rect width="96" height="96" fill="white" />
      </clipPath>
    </defs>
    <g clipPath="url(#pa-clip)">
      <mask
        id="pa-mask"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="-1"
        y="10"
        width="97"
        height="76"
      >
        <path
          d="M61.2116 10C62.3496 10 63.4337 10.4847 64.1925 11.3328L94.6136 45.3328C95.9723 46.8514 95.9723 49.1486 94.6136 50.6672L64.1925 84.6672C63.4337 85.5153 62.3496 86 61.2116 86H3.94634C0.488777 86 -1.34012 81.9095 0.965366 79.3328L29 48L0.965366 16.6672C-1.34012 14.0905 0.488777 10 3.94634 10H61.2116Z"
          fill="white"
        />
      </mask>
      <g mask="url(#pa-mask)">
        <path d="M63 10L29 48L-5 10H63Z" fill="url(#pa-g0)" />
        <g filter="url(#pa-filter0)">
          <path
            d="M63 10.4L-5 86.4H63L97 48.4L63 10.4Z"
            fill="black"
            fillOpacity="0.24"
          />
        </g>
        <g filter="url(#pa-filter1)">
          <path
            d="M63 12L-5 88H63L97 50L63 12Z"
            fill="black"
            fillOpacity="0.32"
          />
        </g>
        <path d="M-5 86L63 10L97 48L63 86H-5Z" fill="url(#pa-g1)" />
        <path d="M-5 86L63 10L80 29L29 86H-5Z" fill="url(#pa-g2)" />
      </g>
    </g>
  </svg>
);
export const techIconMap: Record<
  string,
  React.ComponentType<CustomIconProps>
> = {
  Python: SiPython,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  DBeaver: SiDbeaver,
  Flutter: SiFlutter,
  Java: CustomJava,
  "Node.js": SiNodedotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  HuggingFace: SiHuggingface,
  "scikit-learn": SiScikitlearn,
  n8n: CustomN8n,
  "Power Automate": CustomPowerAutomate,
  "Power BI": CustomPowerBI,
  SAP: SiSap,
  Docker: SiDocker,
  Git: SiGit,
  Laravel: SiLaravel,
};

export function getTechIcon(name: string) {
  return techIconMap[name] || null;
}

export function TechBadge({
  tag,
  accent = "#c8f04f",
}: {
  tag: string;
  accent?: string;
}) {
  const [hover, setHover] = useState(false);
  const iconComponent = getTechIcon(tag);

  return (
    <motion.span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      animate={{
        scale: hover ? 1.08 : 1,
        backgroundColor: hover ? `${accent}22` : "#f5f5f3",
        borderColor: hover ? `${accent}90` : "rgba(0,0,0,0.08)",
        color: hover ? "var(--black)" : "#666",
      }}
      transition={{ duration: 0.2 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "100px",
        fontSize: "11px",
        border: "0.5px solid rgba(0,0,0,0.08)",
        cursor: "default",
      }}
    >
      {iconComponent && (
        <motion.span
          animate={{ rotate: hover ? 360 : 0, scale: hover ? 1.2 : 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "inline-flex" }}
        >
          {React.createElement(iconComponent, { size: 12 })}
        </motion.span>
      )}
      {tag}
    </motion.span>
  );
}

export const logoRows = [
  [
    "Python",
    "Django",
    "PostgreSQL",
    "DBeaver",
    "MySQL",
    "Flutter",
    "Java",
    "Node.js",
    "TypeScript",
    "JavaScript",
  ],
  [
    "PyTorch",
    "TensorFlow",
    "HuggingFace",
    "scikit-learn",
    "n8n",
    "Power Automate",
    "Power BI",
    "SAP",
    "Docker",
    "Git",
    "Laravel",
  ],
];
