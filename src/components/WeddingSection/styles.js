import { css } from '@emotion/core';
import Background from '@assets/images/bg-wedding.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  color: #fff !important;

  .bismillah {
    color: #fff !important;
    font-size: 16px !important;
    font-family: sans-serif;
  }

  .sub-title {
    color: #fff !important;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;
