import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {

  return (
    <>
      {props.isDark ? <img src={props.darkLogo} className="mobile-icon" /> : <img src={props.lightLogo} className="mobile-icon" />}
    </>
  );
};

export default Icon;
