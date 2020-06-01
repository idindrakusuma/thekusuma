import React, { Fragment, useState, useEffect, useCallback } from 'react';

import isMobileDevice from '@helpers/isMobileDevice';
import IconMusic from '@assets/images/music-icon.png';
import IconMusicStop from '@assets/images/music-stop-icon.png';
import MusicBacksound from '@assets/music/lagu-pernikahan-impian.mp3';

import Modal from './Modal';
import { styMusicFloating } from './styles';

function FloatingMusic() {
  const [play, setPlay] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  const handleClickModalAction = () => {
    const myAudio = document.getElementById('myAudio');
    myAudio.play();

    setPlay(true);
    setShowModal(false);
  };

  /**
   * side effect  to show modal if mobile device
   */
  useEffect(() => {
    if (isMobileDevice()) {
      setShowModal(true);
    }
  }, []);

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <audio id="myAudio" autoPlay loop className="hide">
          <source src={MusicBacksound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Matikan Musik' : 'Putar Musik'}`}
          />
        </div>
      </div>
      <Modal isShow={showModal} onClickAction={handleClickModalAction} />
    </Fragment>
  );
}

export default FloatingMusic;
