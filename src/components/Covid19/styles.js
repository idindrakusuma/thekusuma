import { css } from '@emotion/core';

export const styBoxWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;

  .img-section {
  }

  img {
    max-width: 70px;
    margin-right: 8px;
  }

  .text__section {
    width: 100%;
  }

  .text__info {
    font-weight: 500;
    font-size: 1.2em;
  }

  @media screen and (max-width: 480px) {
    img {
      max-width: 50px;
      margin-right: 8px;
    }

    .text__info {
      font-size: 1em;
    }
  }
`;
