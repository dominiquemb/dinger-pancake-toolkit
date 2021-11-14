import React from "react";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
  darkLogo?: string;
  lightLogo?: string;
  desktopLogoHeight?: string;
  desktopLogoWidth?: string;
  mobileLogoHeight?: string;
  mobileLogoWidth?: string;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";

  return (
    <>
      {isDark ? (
        <img src={props.darkLogo} className="desktop-icon" />
      ) : (
        <img src={props.lightLogo} className="desktop-icon" />
      )}
    </>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
