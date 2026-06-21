"use client";

import React, { useEffect, useRef, useState, SVGProps } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TbMapPinFilled } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
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
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { value: "3.63", label: "GPA", sub: "Telkom University · 2026" },
  { value: "3", label: "Internships", sub: "Telkom · Finnet · Nevmock" },
  { value: "2nd", label: "Place", sub: "Epicentrum Unpad 2025" },
];

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
    <desc>
      {"\n  Microsoft Power Bi Streamline Icon: https://streamlinehq.com\n  "}
    </desc>
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
    id="Java--Streamline-Svg-Logos"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <desc>{"\n  Java Streamline Icon: https://streamlinehq.com\n  "}</desc>
    <path
      fill="#5382a1"
      d="M8.916025 18.42385s-0.898025 0.52225 0.6391 0.698975c1.8622 0.212425 2.81395 0.181975 4.8661 -0.206425 0 0 0.539525 0.3383 1.293025 0.6313 -4.600375 1.97165 -10.411575 -0.1142 -6.798225 -1.12385Z"
      strokeWidth={0.25}
    />
    <path
      fill="#5382a1"
      d="M8.3539 15.851025s-1.007225 0.745575 0.53105 0.904675c1.98925 0.205225 3.560225 0.222 6.278575 -0.301425 0 0 0.376 0.381175 0.9672 0.589625 -5.562125 1.62645 -11.75735 0.12825 -7.776825 -1.192875Z"
      strokeWidth={0.25}
    />
    <path
      fill="#e76f00"
      d="M13.092925 11.48655c1.133525 1.30505 -0.297825 2.47945 -0.297825 2.47945s2.878225 -1.48585 1.556375 -3.34645c-1.23455 -1.73515 -2.1813 -2.59725 2.944 -5.56975 0 0 -8.045025 2.009275 -4.20255 6.43675Z"
      strokeWidth={0.25}
    />
    <path
      fill="#5382a1"
      d="M19.177275 20.326925s0.66455 0.547575 -0.7319 0.9712c-2.6554 0.804425 -11.052075 1.047325 -13.384625 0.03205 -0.8385 -0.364775 0.7339 -0.871 1.228525 -0.9772 0.51585 -0.111875 0.810625 -0.091025 0.810625 -0.091025 -0.932475 -0.6569 -6.0272375 1.28985 -2.587875 1.847375 9.37965 1.5211 17.0982 -0.68495 14.66525 -1.7824Z"
      strokeWidth={0.25}
    />
    <path
      fill="#5382a1"
      d="M9.347925 13.18515s-4.271075 1.014475 -1.5125 1.38285c1.16475 0.15595 3.486675 0.120675 5.6495 -0.06055 1.76755 -0.1491 3.5424 -0.466125 3.5424 -0.466125s-0.62325 0.266925 -1.074175 0.574825c-4.3372 1.140675 -12.7159 0.610025 -10.303775 -0.556775 2.039925 -0.986075 3.69855 -0.874225 3.69855 -0.874225Z"
      strokeWidth={0.25}
    />
    <path
      fill="#5382a1"
      d="M17.009625 17.46785c4.408975 -2.291075 2.37045 -4.492775 0.947575 -4.19615 -0.34875 0.072575 -0.50425 0.135475 -0.50425 0.135475s0.129475 -0.202825 0.37675 -0.2906c2.8149 -0.989625 4.979725 2.918775 -0.908675 4.466725 0 0 0.0682 -0.060925 0.0886 -0.11545Z"
      strokeWidth={0.25}
    />
    <path
      fill="#e76f00"
      d="M14.351425 0.25s2.441775 2.442575 -2.3159 6.198575c-3.81515 3.012975 -0.869975 4.730875 -0.001575 6.69365 -2.226975 -2.009275 -3.861275 -3.778025 -2.76485 -5.42425C10.878375 5.3015 15.336625 4.1299 14.351425 0.25Z"
      strokeWidth={0.25}
    />
    <path
      fill="#5382a1"
      d="M9.781125 23.676125c4.23205 0.2709 10.730875 -0.150325 10.884775 -2.1528 0 0 -0.29585 0.759125 -3.497575 1.362 -3.61215 0.67975 -8.067225 0.6004 -10.709575 0.16475 0 0 0.540925 0.447675 3.322375 0.62605Z"
      strokeWidth={0.25}
    />
  </svg>
);

const CustomN8n = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    id="N8n--Streamline-Simple-Icons"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <desc>{"\n  N8n Streamline Icon: https://streamlinehq.com\n  "}</desc>
    <title>{"n8n"}</title>
    <path
      d="M21.4737 5.6842c-1.1772 0 -2.1663 0.8051 -2.4468 1.8947h-2.8955c-1.235 0 -2.289 0.893 -2.492 2.111l-0.1038 0.623a1.263 1.263 0 0 1 -1.246 1.0555H11.289c-0.2805 -1.0896 -1.2696 -1.8947 -2.4468 -1.8947s-2.1663 0.8051 -2.4467 1.8947H4.973c-0.2805 -1.0896 -1.2696 -1.8947 -2.4468 -1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663 -0.8051 2.4468 -1.8947h1.4223c0.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663 -0.8051 2.4468 -1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l0.1038 0.623c0.203 1.218 1.257 2.111 2.492 2.111h0.3692c0.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263 -1.131 2.5263 -2.5263s-1.131 -2.5263 -2.5263 -2.5263c-1.1772 0 -2.1664 0.805 -2.4468 1.8947h-0.3692a1.263 1.263 0 0 1 -1.246 -1.0555l-0.1037 -0.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 0.821 -1.4794l0.1038 -0.623a1.263 1.263 0 0 1 1.2459 -1.0555h2.8955c0.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263 -1.131 2.5263 -2.5263s-1.131 -2.5263 -2.5263 -2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1 -1.2631 1.2632 1.263 1.263 0 0 1 -1.2632 -1.2632 1.263 1.263 0 0 1 1.2632 -1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1 -1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631 -1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1 -1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632 -1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1 -1.2631 1.2631 1.263 1.263 0 0 1 -1.2632 -1.2631 1.263 1.263 0 0 1 1.2632 -1.2632"
      fill="#000000"
      strokeWidth={1}
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
      <filter id="filter0_f">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur" />
      </filter>
      <filter id="filter1_f">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        id="paint0_linear"
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
        id="paint1_linear"
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
        id="paint2_linear"
        x1="37.5"
        y1="10"
        x2="37.5"
        y2="86"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3B90F5" />
        <stop offset="1" stopColor="#2A78EE" />
      </linearGradient>
      <clipPath id="clip0">
        <rect width="96" height="96" fill="white" />
      </clipPath>
      <clipPath id="clip1">
        <rect width="96" height="96" fill="white" />
      </clipPath>
    </defs>
    <g clipPath="url(#clip0)">
      <g clipPath="url(#clip1)">
        <mask
          id="mask0"
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
        <g mask="url(#mask0)">
          <path d="M63 10L29 48L-5 10H63Z" fill="url(#paint0_linear)" />
          <g filter="url(#filter0_f)">
            <path
              d="M63 10.4L-5 86.4H63L97 48.4L63 10.4Z"
              fill="black"
              fillOpacity="0.24"
            />
          </g>
          <g filter="url(#filter1_f)">
            <path
              d="M63 12L-5 88H63L97 50L63 12Z"
              fill="black"
              fillOpacity="0.32"
            />
          </g>
          <path d="M-5 86L63 10L97 48L63 86H-5Z" fill="url(#paint1_linear)" />
          <path d="M-5 86L63 10L80 29L29 86H-5Z" fill="url(#paint2_linear)" />
        </g>
      </g>
    </g>
  </svg>
);

const logoRows = [
  [
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Flutter", icon: SiFlutter },
    { name: "Java", icon: CustomJava },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
  ],
  [
    { name: "PyTorch", icon: SiPytorch },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "HuggingFace", icon: SiHuggingface },
    { name: "scikit-learn", icon: SiScikitlearn },
    { name: "n8n", icon: CustomN8n },
    { name: "Power Automate", icon: CustomPowerAutomate },
    { name: "Power BI", icon: CustomPowerBI },
    { name: "SAP", icon: SiSap },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Laravel", icon: SiLaravel },
  ],
];
interface LogoItem {
  name: string;
  icon?: React.ElementType;
  src?: string;
}
const MarqueeRow = ({
  row,
  rowIndex,
}: {
  row: LogoItem[];
  rowIndex: number;
}) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isRowPaused, setIsRowPaused] = useState(false);

  const duration = 25 + rowIndex * 5;
  const ICON_SIZE = 38;

  const isEven = rowIndex % 2 === 0;
  const keyframesName = `scroll-${rowIndex}`;

  return (
    <div
      style={{
        padding: "40px 0",
        display: "flex",
      }}
      onMouseEnter={() => setIsRowPaused(true)}
      onMouseLeave={() => setIsRowPaused(false)}
    >
      <style>{`
        @keyframes ${keyframesName} {
          0% { transform: translateX(${isEven ? "0%" : "-50%"}); }
          100% { transform: translateX(${isEven ? "-50%" : "0%"}); }
        }
      `}</style>

      <div
        style={{
          display: "flex",
          gap: "clamp(48px, 6vw, 96px)",
          width: "max-content",
          alignItems: "center",
          paddingRight: "clamp(48px, 6vw, 96px)",
          animationName: keyframesName,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isRowPaused ? "paused" : "running",
        }}
      >
        {[...row, ...row, ...row, ...row].map((logo, i) => {
          const uniqueKey = `${logo.name}-${i}`;
          const isHovered = hoveredIcon === uniqueKey;

          const style = {
            opacity: isHovered ? "1" : "0.6",
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transition: "all 0.3s ease",
            cursor: "pointer",
          };

          return (
            <div
              key={uniqueKey}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
              onMouseEnter={() => setHoveredIcon(uniqueKey)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    position: "absolute",
                    top: "-45px",
                    background: "#222",
                    color: "#fff",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "12px",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 10,
                  }}
                >
                  {logo.name}
                </motion.div>
              )}

              {logo.icon ? (
                <logo.icon size={ICON_SIZE} style={style} />
              ) : (
                <Image
                  src={logo.src as string}
                  alt={`${logo.name} logo`}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  style={{
                    ...style,
                    height: `${ICON_SIZE}px`,
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleX1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const titleX2 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fact-item",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".facts-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
      gsap.fromTo(
        ".bio-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".bio-text",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f5f4ef 8%, #f5f4ef 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(180deg, #ffffff 0%, transparent 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          paddingTop: "clamp(100px, 15vh, 160px)",
          paddingBottom: "clamp(32px, 5vh, 56px)",
          overflow: "hidden",
        }}
      >
        <motion.div style={{ x: titleX1 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(64px, 11vw, 148px)",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              color: "var(--black)",
              whiteSpace: "nowrap",
              paddingLeft: "clamp(24px, 5vw, 64px)",
              userSelect: "none",
            }}
          >
            About me.
          </p>
        </motion.div>

        <motion.div style={{ x: titleX2 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "clamp(64px, 11vw, 148px)",
              lineHeight: 0.88,
              letterSpacing: "-4px",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(0,0,0,0.1)",
              whiteSpace: "nowrap",
              textAlign: "right",
              paddingRight: "clamp(24px, 5vw, 64px)",
              userSelect: "none",
            }}
          >
            Who I am.
          </p>
        </motion.div>
      </div>
      <div
        style={{
          padding: "0 clamp(24px, 5vw, 64px)",
          paddingBottom: "clamp(80px, 12vh, 120px)",
        }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--mid)",
            textTransform: "uppercase",
            marginBottom: "clamp(32px, 5vh, 48px)",
          }}
        >
          01 / About
        </motion.p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 80px)",
            marginBottom: "clamp(64px, 10vh, 100px)",
            alignItems: "start",
          }}
        >
          <div>
            <p
              className="bio-text"
              style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                color: "#222",
                lineHeight: 1.75,
                marginBottom: "16px",
                fontWeight: 400,
                opacity: 0,
              }}
            >
              A developer who builds things that work, ranging from backend
              systems and automation pipelines to machine learning models that
              deliver real value.
            </p>
            <p
              className="bio-text"
              style={{
                fontSize: "clamp(14px, 1.5vw, 17px)",
                color: "#888",
                lineHeight: 1.8,
                marginBottom: "28px",
                opacity: 0,
              }}
            >
              I&apos;m drawn to problems that sit at the intersection of
              engineering and real-world impact, especially where good code
              actually changes how people work.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {[
                {
                  label: "Jakarta, Indonesia",
                  icon: TbMapPinFilled,
                  color: "#B5838D",
                },
                { label: "Telkom University", icon: FaGraduationCap },
              ].map((b) => (
                <span
                  key={b.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    border: "0.5px solid rgba(0,0,0,0.1)",
                    borderRadius: "100px",
                    fontSize: "12px",
                    color: "#666",
                    background: "rgba(255,255,255,0.6)",
                  }}
                >
                  <b.icon size={16} style={{ color: b.color }} />
                  {b.label}
                </span>
              ))}
            </motion.div>
          </div>
          <div
            className="facts-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1px",
              background: "rgba(0,0,0,0.06)",
              borderRadius: "20px",
              overflow: "hidden",
              border: "0.5px solid rgba(0,0,0,0.06)",
            }}
          >
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="fact-item"
                style={{
                  flex: "1 1 200px",
                  background: "#fafaf8",
                  padding: "clamp(20px, 3vw, 32px)",
                  opacity: 0,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#fafaf8";
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontSize: "clamp(30px, 4vw, 48px)",
                    color: "var(--black)",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {fact.value}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--black)",
                    marginBottom: "3px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {fact.label}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#aaa",
                  }}
                >
                  {fact.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--mid)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Technical Skills
        </motion.p>
      </div>
      <div
        style={{
          overflow: "hidden",
          paddingTop: "20px",
        }}
      >
        {logoRows.map((row, rowIndex) => (
          <MarqueeRow key={rowIndex} row={row} rowIndex={rowIndex} />
        ))}
      </div>
      <div
        style={{
          height: "clamp(60px, 8vh, 100px)",
          background: "linear-gradient(180deg, transparent 0%, #f0efe8 100%)",
          pointerEvents: "none",
        }}
      />
    </section>
  );
}
