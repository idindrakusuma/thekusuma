import { css } from '@emotion/core';

export const styMusicFloating = css`
  .hide {
    display: none;
  }

  .icon-music {
    position: fixed;
    bottom: 24px;
    width: 50px;
    z-index: 999;
    left: 24px;
    animation: pulse 2s ease infinite;
    cursor: pointer;
  }
`;
