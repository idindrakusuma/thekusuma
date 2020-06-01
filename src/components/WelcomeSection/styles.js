import { css } from '@emotion/core';
import Background from '@assets/images/img_bg_2.jpg';

export const styHero = css`
  width: 100%;
  height: 100vh;
`;

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 400px) {
    .title {
      font-size: 40px;
    }

    .sub-title {
      font-size: 28px;
    }
  }
`;

export const styWrapper = css`
  color: #fff;

  img {
    max-width: 80px;
    margin-bottom: 24px;
  }

  h1 {
    margin-bottom: 0px;
    font-size: 100px;
    line-height: 1.5;
    font-family: 'Cookie', cursive;
    color: #fff;
  }

  h2 {
    color: #fff;
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  h4 {
    font-family: 'Cookie', cursive;
    margin: 0;
    color: #fff;
    font-size: 30px;
  }

  .getting-married {
    margin-top: -12px;
  }

  .to-dearest {
    margin-bottom: 12px;
  }

  .to-dearest-name {
    border-bottom: 1px solid;
    padding-bottom: 12px;
    max-width: 250px;
    margin: auto auto 30px auto;
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
  margin: 8px;
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
