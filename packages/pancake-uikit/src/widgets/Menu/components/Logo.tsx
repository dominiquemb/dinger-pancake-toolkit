import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoIcon, LogoWithTextIcon } from "../../../components/Svg";

interface Props {
  href: string;
  darkLogo?: string;
  lightLogo?: string;
  desktopLogoHeight?: string;
  desktopLogoWidth?: string;
  mobileLogoHeight?: string;
  mobileLogoWidth?: string;
  isDark: boolean;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const Logo: React.FC<Props> = ({ isDark, href, ...props }) => {
  const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    .mobile-icon {
      width: ${props.mobileLogoWidth ? props.mobileLogoWidth + "px" : "32px"};
      height: ${props.mobileLogoHeight ? props.mobileLogoHeight + "px" : "auto"};
      ${({ theme }) => theme.mediaQueries.nav} {
        display: none;
      }
    }
    .desktop-icon {
      width: ${props.desktopLogoWidth ? props.desktopLogoWidth + "px" : "160px"};
      height: ${props.desktopLogoHeight ? props.desktopLogoHeight + "px" : "auto"};
      display: none;
      ${({ theme }) => theme.mediaQueries.nav} {
        display: block;
      }
    }
    .right-eye {
      animation-delay: 20ms;
    }
    &:hover {
      .left-eye,
      .right-eye {
        transform-origin: center 60%;
        animation-name: ${blink};
        animation-duration: 350ms;
        animation-iteration-count: 1;
      }
    }
  `;

  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      <LogoIcon className="mobile-icon" darkLogo={props.darkLogo} lightLogo={props.lightLogo} />
      <LogoWithTextIcon
        className="desktop-icon"
        isDark={isDark}
        darkLogo={props.darkLogo}
        lightLogo={props.lightLogo}
      />
    </>
  );

  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
