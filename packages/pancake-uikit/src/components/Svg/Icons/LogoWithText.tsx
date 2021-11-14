import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const DingerLight = require('../../../../assets/Dinger Swap Light.svg');
  const DingerDark = require('../../../../assets/Dinger Swap Dark.svg');

  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <>
      {isDark ? <img src={DingerDark} className="desktop-icon" /> : <img src={DingerLight} className="desktop-icon" />}
    </>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
