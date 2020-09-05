import { css } from '@emotion/core';

export const styWrapper = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

  .container {
    margin: 30px auto;
    overflow: hidden;
    box-shadow: 0 0 10px rgb(202, 202, 204);
    background-color: ;
    border-radius: 2px;
    padding: 0 16px;
  }

  .ticket {
    display: flex;

    #qrcode {
      justify-content: center;
      align-content: center;
      margin: 12px auto;
    }
  }

  .details {
    color: #828282;
    padding: 16px 0;
    border-top: 1px dashed #c3c3c3;
  }

  .tinfo {
    font-size: 10px;
    font-weight: 300;
    color: #555;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 16px 0 0 0;
  }

  .tdata {
    font-size: 1em;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.5px;
    margin: 0;
  }

  .additional {
    font-size: 10px;
  }

  .name {
    font-size: 1.3em;
    font-weight: 500;
  }

  .masinfo {
    display: block;
  }
  .left,
  .right {
    width: 49%;
    display: inline-table;
  }

  .nesp {
    letter-spacing: 0px;
  }

  .btn {
    margin-right: 4px;
    margin-bottom: 4px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    border-radius: 30px;
    transition: 0.5s;
    padding: 8px 20px;
  }

  .primary {
    background: #f14e95;
    color: #fff;
    border: none;
  }
`;

export const styTicket = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 18px);
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

    input[type='text']:disabled {
      background: #dddddd;
    }
  }
`;
