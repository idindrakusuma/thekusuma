import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { wishlist } from './wishlist-data';
import { styButtonWrapper } from './styles';
import { Link } from 'gatsby';
import { string } from 'prop-types';

const INTERVAL_SLIDE = 35000;

function WishesContainer( {codeLink} ) {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = wishlist.length || 0;

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
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

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
    <div className="wrap-testimony">
      {renderWishlist()}
      <div css={styButtonWrapper}>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(false)}>{`< Sebelumnya`}</button>
        <button className="btn btn-sm button-nav" onClick={() => handleSetActive(true)}>{`Selanjutnya >`}</button>
      </div>
      <br></br>
      <div css={styButtonWrapper}>
        <Link to={`/send-wishes?${codeLink}`}>
          <button className="btn btn-default btn-block">Tulis Pesan</button>
        </Link>
      </div>
      <br></br>
      <div css={styButtonWrapper}>
        <span align="center">Note: Bagi yang beberapa hari lalu merasa sudah mengirimkan pesan tapi belum muncul, silahkan untuk kirim ulang dikarenakan ada kesalahan teknis 🙏</span>
      </div>
      </div>
  );
}

WishesContainer.propTypes = {
  codeLink: string.isRequired,
};

export default React.memo(WishesContainer);
