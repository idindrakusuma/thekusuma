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
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media screen and (max-width: 400px) {
    .icon-music {
      width: 40px;
      left: 20px;
    }
  }
`;
