import { css } from '@emotion/core';
import Background from '@assets/images/cileunca.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;

  p {
    color: rgba(255, 255, 255, 0.8) !important;
  }
`;

export const styFlex = css`
  display: flex;
  justify-content: center;
`;
