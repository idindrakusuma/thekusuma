import { css, keyframes } from '@emotion/core';

export const styOwl = css`
  margin-top: 10px;
  text-align: center;

  .owl-dots {
    display: flex;
    justify-content: center;

    .owl-dot {
      width: 10px;
      height: 10px;
      margin: 0 4px;
      border-radius: 50%;
      background: #e6e6e6;
      cursor: pointer;
    }

    .active {
      background: transparent;
      border: 2px solid #f14e95;
    }
  }
`;

const animation = keyframes`
  0% { right: -300px; opacity: 0;}
  50% { right: 50px; opacity: 0.5;}
  100% {right: 0px; opacity: 1;};
`;

const animationLeft = keyframes`
  0% { left: -300px; opacity: 0;}
  50% { left: 50px; opacity: 0.5;}
  100% {left: 0px; opacity: 1;};
`;

export const styWithAnimation = (isActive) => css`
  position: relative;
  animation: ${isActive ? animation : animationLeft} 1.2s;
`;

export const styWrapperItem = css`
  h4 {
    color: #828282;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 4px 0;
  }

  .infoName {
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 2px;
    display: block;
  }

  .hide {
    display: none;
  }

  .active {
    diplay: block;
  }

  @media screen and (max-width: 400px) {
    .description {
      font-size: 16px !important;
    }
  }
`;
