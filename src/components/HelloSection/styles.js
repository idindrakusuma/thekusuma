import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #828282;
    font-weight: 600;
  }

  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
