import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";
import { Colors } from "../../theme";

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
  darkLogo?: string;
  lightLogo?: string;
  desktopLogoHeight?: string;
  desktopLogoWidth?: string;
  mobileLogoHeight?: string;
  mobileLogoWidth?: string;
  isDark?: boolean;
}

export type IconComponentType = {
  iconName: string;
  isActive?: boolean;
  height?: string;
  width?: string;
  activeColor?: string;
  activeBackgroundColor?: keyof Colors;
} & SvgProps;
