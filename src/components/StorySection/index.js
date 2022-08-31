import React, { Fragment } from 'react';

import StoryItem from './StoryItem';
import { stories } from './stories-data';

function StorySection() {
  const renderStories = () => {
    return stories.map((s, index) => <StoryItem key={index} {...s} isInverted={index % 2 === 1} />);
  };

  return (
    <Fragment>
      
    </Fragment>
  );
}

export default StorySection;
