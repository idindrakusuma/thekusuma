import { css } from '@emotion/core';

export const styTicket = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: calc(100vh - 4px);
  padding: 0 20px;

  .homepage {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  .title {
    font-family: 'Cookie', cursive;
    font-weight: 600;
    letter-spacing: 4px;
    font-size: 45px;
    user-select: none;
    margin-top: 20px;
    text-align: center;
  }

  .sub-title-ticket {
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.7rem;
    user-select: none;
    margin-top: 20px;
    text-align: center;
  }

  .input-ticket {
    width: 85vw;
    min-width: auto;

    input {
      font-family: 'Work Sans', Courier, monospace;
      font-size: 18px;
      width: 100%;
      text-align: center;
      border-radius: 12px;
      padding: 10px 30px 10px 10px;
      background: transparent;
      border: 0.5px solid rgba(0, 0, 0, 0.3);
    }
  }
`;
