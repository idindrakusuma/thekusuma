import React from 'react';
import { styBoxWrapper } from './styles';

function SectionBox({ icon, text }) {
  return (
    <div className="col-md-4" css={styBoxWrapper}>
      <div className="img-section">
        <img src={icon} alt="icon" className="img" />
      </div>
      <div className="text__section">
        <span className="text__info">{text}</span>
      </div>
    </div>
  );
}

export default SectionBox;
