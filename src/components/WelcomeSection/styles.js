import { css } from '@emotion/core';
import Background from '@assets/images/bg-welcome.jpg';

export const styHero = css`
  width: 100%;
  height: 100vh;
`;

export const styBackground = css`
  background-size: cover;
  background-image: url(${Background});
  background-position: center;
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

  @media screen and (max-width: 500px) {
    .title {
      font-size: 54px;
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

  @media screen and (max-width: 330px) {
    img {
      max-width: 40px;
      margin-top: 24px;
      margin-bottom: 8px;
    }

    .to-dearest {
      margin-bottom: 8px;
      font-size: 16px;
    }

    .to-dearest-name {
      margin: auto auto 16px auto;
    }
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

  @media screen and (max-width: 330px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (max-width: 500px) and (min-width: 401px) {
    width: 75px;
    height: 75px;
    margin: 4px;
    font-size: 12px;

    h3 {
      font-size: 24px;
    }
  }
`;

export const styMargin = (px) => css`
  margin: ${px};
`;

export const styButton = css`
  margin: 4px 8px;
  color: #f14e95;

  &:hover {
    background: rgba(241, 78, 149, 0.8);
    color: #fff;
    border-color: rgba(241, 78, 149, 0.8);
  }
`;

export const styButtonDetail = css`
  animation: pulse 1s ease infinite;

  ${styButton}
`;
