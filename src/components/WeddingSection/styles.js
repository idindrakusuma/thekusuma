import { css } from '@emotion/core';
import Background from '@assets/images/img_bg_3.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;

  .bismillah {
    font-size: 16px !important;
    font-family: sans-serif;
  }
`;
