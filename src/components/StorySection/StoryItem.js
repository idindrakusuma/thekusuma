import React from 'react';
import { string, bool } from 'prop-types';

function StoryItem({ image, title, date, description, isInverted }) {
  return (
    <li className={isInverted && `timeline-inverted`}>
      {image && <div className="timeline-badge" style={{ backgroundImage: `url(${image})` }} />}
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h3 className="timeline-title">{title}</h3>
          <span className="date">{date}</span>
        </div>
        <div className="timeline-body">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

StoryItem.propTypes = {
  image: string,
  title: string.isRequired,
  date: string.isRequired,
  description: string.isRequired,
  isInverted: bool.isRequired,
};

StoryItem.defaultProps = {
  image: '',
};

export default React.memo(StoryItem);
