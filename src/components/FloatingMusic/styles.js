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

  @media screen and (max-width: 420px) {
    .icon-music {
      width: 40px;
      left: 20px;
    }
  }

  @media screen and (max-width: 360px) {
    .icon-music {
      width: 30px;
      left: 20px;
    }
  }


`;

export const styWrapperModal = css`
  .modal-dialog {
    display: flex;
    justify-content: center;
  }

  .modal {
    display: block;
    width: 100%;
    background: rgba(44, 62, 80, 0.8);
  }

  .modal-content {
    width: 90%;
  }

  .sub-title {
    text-align: center;
    font-size: 20px;
  }

  .title {
    font-family: 'Cookie', cursive;
    text-align: center;
    font-size: 50px;
    margin-bottom: 0px;
  }
`;
