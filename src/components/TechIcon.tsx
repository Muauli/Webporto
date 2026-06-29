"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { SVGProps } from "react";
import {
  SiReact,
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

const CustomSupabase = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 96 96"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <path
      fill="url(#a)"
      d="M55.7223 93.4383c-2.4014 3.0241-7.2705 1.3672-7.3284-2.4942l-.846-56.4773h37.9752c6.8784 0 10.7146 7.9445 6.4375 13.3315l-36.2383 45.64Z"
    />
    <path
      fill="url(#b)"
      fillOpacity=".2"
      d="M55.7223 93.4383c-2.4014 3.0241-7.2705 1.3672-7.3284-2.4942l-.846-56.4773h37.9752c6.8784 0 10.7146 7.9445 6.4375 13.3315l-36.2383 45.64Z"
    />
    <path
      fill="#3ecf8e"
      d="M40.278 2.56189c2.4014-3.024436 7.2705-1.36726 7.3284 2.49417l.3707 56.47724h-37.5c-6.87853 0-10.714819-7.9446-6.43753-13.3315L40.278 2.56189Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1="1011.58"
        x2="3189.12"
        y1="1286.71"
        y2="2199.97"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#249361" />
        <stop offset="1" stopColor="#3ecf8e" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="139.561"
        x2="1537.44"
        y1="-762.054"
        y2="1869.38"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stopOpacity="0" />{" "}
      </linearGradient>
    </defs>
  </svg>
);

const CustomNextjs = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 180 180"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <circle cx="90" cy="90" r="90" />
    <circle cx="90" cy="90" r="90" />
    <defs>
      <linearGradient
        id="nextjs-grad-a"
        x1="93.23"
        x2="128.73"
        y1="52.776"
        y2="8.776"
        gradientTransform="matrix(1 0 0 -1 0 182)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="nextjs-grad-b"
        x1="121.14"
        x2="120.94"
        y1="128.02"
        y2="75.147"
        gradientTransform="matrix(1 0 0 -1 0 182)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M149.5 157.5 69.1 54H54v72h12.1V69.4l73.9 95.5c3.3-2.3 6.5-4.7 9.5-7.4"
      style={{ fill: "url(#nextjs-grad-a)" }}
    />
    <path fill="url(#nextjs-grad-b)" d="M115 54h12v72h-12z" />
  </svg>
);
const CustomTailwind = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 96 96"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <path
      fill="url(#tailwind-grad)"
      d="M48 19.7998c-12.5333 0-20.3667 6.2667-23.5 18.8 4.7-6.2667 10.1833-8.6167 16.45-7.05 3.5755.8939 6.1311 3.4878 8.9598 6.3591 4.6081 4.6774 9.9413 10.0909 21.5902 10.0909 12.5333 0 20.3667-6.2667 23.5-18.8-4.7 6.2667-10.1833 8.6167-16.45 7.05-3.5755-.8939-6.1311-3.4877-8.9598-6.3591C64.9821 25.2133 59.6489 19.7998 48 19.7998Zm-23.5 28.2c-12.5333 0-20.36667 6.2667-23.5 18.8 4.7-6.2667 10.1833-8.6167 16.45-7.05 3.5755.8939 6.1311 3.4878 8.9598 6.3591C31.0179 70.7863 36.3511 76.1998 48 76.1998c12.5333 0 20.3667-6.2667 23.5-18.8-4.7 6.2667-10.1833 8.6167-16.45 7.05-3.5755-.8939-6.1311-3.4877-8.9598-6.3591-4.6081-4.6774-9.9413-10.0909-21.5902-10.0909Z"
    />
    <defs>
      <linearGradient
        id="tailwind-grad"
        x1="-260.111"
        x2="7858.33"
        y1="1824.6"
        y2="6505.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2298bd" />
        <stop offset="1" stopColor="#0ed7b5" />
      </linearGradient>
    </defs>
  </svg>
);

const CustomOllama = ({ size, style, ...props }: CustomIconProps) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    style={style}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M168.64 23.253c4.608 1.814 8.768 4.8 12.544 8.747 6.293 6.528 11.605 15.872 15.659 26.944 4.074 11.136 6.72 23.467 7.722 35.84a107.824 107.824 0 0143.712-13.568l1.088-.085c18.56-1.494 36.907 1.856 52.907 10.112a103.091 103.091 0 016.336 3.626c1.067-12.138 3.669-24.192 7.68-35.072 4.053-11.093 9.365-20.416 15.637-26.965a35.628 35.628 0 0112.566-8.747c5.482-2.133 11.306-2.517 16.981-.896 8.555 2.432 15.893 7.851 21.675 15.723 5.29 7.19 9.258 16.405 11.968 27.456 4.906 19.925 5.76 46.144 2.453 77.76l1.131.853.554.406c16.15 12.288 27.392 29.802 33.344 50.133 9.28 31.723 4.608 67.307-11.392 87.211l-.384.448.043.064c8.896 16.256 14.293 33.429 15.445 51.2l.043.64c1.365 22.72-4.267 45.589-17.365 68.053l-.15.213.214.512c10.069 24.683 13.226 49.536 9.344 74.368l-.128.832a13.888 13.888 0 01-15.936 11.435 13.83 13.83 0 01-11.31-10.43 13.828 13.828 0 01-.21-5.399c3.562-22.038.213-44.139-10.24-66.624a13.713 13.713 0 01.853-13.163l.085-.128c12.886-19.712 18.219-39.04 17.067-58.027-.981-16.618-6.933-32.938-17.067-48.49a13.737 13.737 0 013.84-18.902l.192-.128c5.184-3.392 9.963-12.053 12.374-23.893a90.218 90.218 0 00-2.027-42.112c-4.373-14.933-12.373-27.392-23.573-35.904-12.694-9.685-29.504-14.357-50.774-13.013a13.93 13.93 0 01-13.482-7.915c-6.699-14.187-16.47-24.341-28.651-30.635a70.145 70.145 0 00-37.803-7.082c-26.56 2.112-49.984 17.088-56.96 35.968a13.91 13.91 0 01-13.013 9.066c-22.763.043-40.384 5.376-53.269 14.998-11.136 8.32-18.731 19.946-22.742 33.877a86.824 86.824 0 00-1.45 40.235c2.389 11.904 7.061 21.76 12.416 27.072l.17.149c4.523 4.416 5.483 11.307 2.326 16.747-7.68 13.269-13.419 33.045-14.358 52.053-1.066 21.717 3.968 40.576 15.339 54.101l.341.406a13.711 13.711 0 012.027 14.72c-12.288 26.368-16.064 48.042-11.989 65.109a13.91 13.91 0 01-27.072 6.357c-5.184-21.717-1.664-46.592 10.09-74.624l.299-.746-.17-.256a92.574 92.574 0 01-12.758-27.926l-.107-.405a122.965 122.965 0 01-3.776-38.08c.939-19.413 5.931-39.296 13.27-55.253l.256-.555-.043-.043c-6.25-8.917-10.88-20.33-13.44-32.96l-.107-.512a114.176 114.176 0 011.984-53.12c5.59-19.52 16.576-36.288 32.768-48.405 1.28-.96 2.624-1.92 3.968-2.816-3.392-31.851-2.538-58.24 2.39-78.293 2.709-11.051 6.698-20.267 11.989-27.456 5.76-7.851 13.099-13.27 21.653-15.723 5.675-1.621 11.52-1.259 17.003.896v.021zm87.808 193.92c19.968 0 38.4 6.678 52.181 18.24 13.44 11.243 21.44 26.347 21.44 41.387 0 18.944-8.661 33.707-24.17 43.136-13.227 8-30.955 11.883-51.264 11.883-21.526 0-39.915-5.526-53.184-15.659-13.163-10.027-20.544-24.107-20.544-39.36 0-15.083 8.49-30.229 22.528-41.515 14.25-11.456 33.066-18.112 53.013-18.112zm0 19.115a65.498 65.498 0 00-40.875 13.867c-9.834 7.893-15.402 17.813-15.402 26.666 0 9.131 4.48 17.686 13.013 24.192 9.707 7.403 23.979 11.691 41.451 11.691 17.045 0 31.424-3.136 41.216-9.088 9.877-5.973 14.933-14.635 14.933-26.816 0-9.024-5.248-18.987-14.571-26.795-10.325-8.64-24.32-13.717-39.765-13.717zm14.123 25.813l.085.086a7.431 7.431 0 01-1.195 10.453l-6.229 4.907v9.514a7.999 7.999 0 01-8.021 7.958 8.004 8.004 0 01-8.022-7.958v-9.813l-5.781-4.651a7.4 7.4 0 01-1.109-10.453 7.53 7.53 0 0110.538-1.088l4.587 3.669 4.693-3.712a7.533 7.533 0 0110.454 1.088zm-107.52-40.938c10.197 0 18.496 8.32 18.496 18.581a18.564 18.564 0 01-18.518 18.581 18.559 18.559 0 01-18.496-18.56 18.565 18.565 0 015.399-13.129 18.609 18.609 0 0113.119-5.473zm185.728 0c10.24 0 18.517 8.32 18.517 18.581a18.559 18.559 0 01-18.517 18.581 18.56 18.56 0 01-18.496-18.56 18.56 18.56 0 0118.496-18.602zM158.72 49.067l-.064.042a14.06 14.06 0 00-6.08 5.078l-.107.128c-2.944 4.032-5.504 9.962-7.424 17.749-3.626 14.763-4.608 34.795-2.645 59.349 9.173-2.73 19.179-4.437 29.952-5.056l.213-.021.406-.725a69.41 69.41 0 013.157-5.099c2.624-16.448.469-36.096-5.397-52.139-2.859-7.765-6.336-13.866-9.664-17.344a13.403 13.403 0 00-2.283-1.92l-.064-.042zm195.712.853l-.043.021a13.396 13.396 0 00-2.282 1.92c-3.328 3.478-6.827 9.6-9.664 17.366-6.187 16.938-8.256 37.888-4.907 54.869l1.237 2.069.171.299h.64a110.599 110.599 0 0131.275 4.523c1.834-23.979.81-43.584-2.731-58.07-1.92-7.786-4.48-13.717-7.445-17.749l-.086-.128a14.054 14.054 0 00-6.08-5.099h-.085v-.021z"
      fill="#000"
    />
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
  Supabase: CustomSupabase,
  Flutter: SiFlutter,
  Java: CustomJava,
  "Node.js": SiNodedotjs,
  "Next.js": CustomNextjs,
  Tailwind: CustomTailwind,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  PyTorch: SiPytorch,
  TensorFlow: SiTensorflow,
  HuggingFace: SiHuggingface,
  Ollama: CustomOllama,
  React: SiReact,
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
    "React",
    "Next.js",
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
    "Tailwind",
    "Supabase",
    "Ollama",
  ],
];
