import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { wishlist } from './wishlist-data';
import { styOwl } from './styles';

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);

  const handleSetActive = (index) => {
    setActive(index);
    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, 5000);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const renderWishlist = () => {
    return wishlist.map((w, index) => <WishesItem key={index} {...w} isActive={index === active} />);
  };

  const renderNavigation = () => {
    return wishlist.map((w, index) => (
      <div
        className={`owl-dot ${index === active ? 'active' : ''}`}
        key={index}
        onClick={() => handleSetActive(index)}
      />
    ));
  };

  /**
   * Side effect to autoscroll
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      <div css={styOwl}>
        <div className="owl-dots">{renderNavigation()}</div>
      </div>
    </div>
  );
}

export default React.memo(WishesContainer);
