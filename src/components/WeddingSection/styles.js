import { css } from '@emotion/core';
import Background from '@assets/images/img_bg_3.jpg';

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
    font-size: 16px !important;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;
  }

  .main-font {
    margin-top: 12px;
  }
`;
