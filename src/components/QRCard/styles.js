import { css } from '@emotion/core';

export const styWrapper = css`
  width: 100%;

  .qr {
    border: 1px solid;
    margin: 8px 0;
    padding: 16px 4px 4px 4px;
  }

  .qr__wrapper {
    display: flex;
    justify-content: center;
  }

  .title__name {
    text-align: center;
    margin-top: 8px;
    margin: 8px 0 0 0;
    font-size: 11px;
  }

  .title__code {
    text-align: center;
    font-size: 10px;
    margin: 0 0 8px 0;
  }

  .title__transaparent {
    opacity: 0;
  }
`;
