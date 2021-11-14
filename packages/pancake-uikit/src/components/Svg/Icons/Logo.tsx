import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const DingerLight = require("../../../assets/Dinger Swap Light.svg");

  return (
    <>
      <img src={DingerLight} className="mobile-icon" />
    </>
  );
};

export default Icon;
