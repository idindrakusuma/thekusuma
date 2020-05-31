import { css } from '@emotion/core';
import Background from '@assets/images/img_bg_2.jpg';

export const styHero = css`
  width: 100%;
  height: 100vh;

  .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const styWrapper = css`
  color: #fff;

  h1 {
    margin-bottom: 0px;
    font-size: 100px;
    line-height: 1.5;
    font-family: 'Sacramento', Arial, serif;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 30px;
    margin-top: -12px;
  }

  a {
    color: #f14e95;
  }
`;

export const styWrapperCount = css`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: rgba(241, 78, 149, 0.8);
  margin: 0 4px;
  border-radius: 50%;
  position: relative;
  animation: pulse 1s ease infinite;
  color: #fff;

  h3 {
    font-size: 30px;
    color: #fff;
    margin: 20px 0 0 0;
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;
