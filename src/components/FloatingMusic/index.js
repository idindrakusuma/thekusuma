import React, { useState, useEffect, useCallback, useRef } from 'react';

import IconMusic from '@assets/images/music-icon.png';
import IconMusicStop from '@assets/images/music-stop-icon.png';
import MusicBacksound from '@assets/music/lagu-pernikahan-impian.mp3';
import { styMusicFloating } from './styles';

function FloatingMusic() {
  const [play, setPlay] = useState(true);
  const alreadyPlay = useRef(false);

  const toggleMusic = useCallback(() => {
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
  }, [play]);

  /**
   * side effect to play music after delay  in 4s
   */
  useEffect(() => {
    if (!alreadyPlay.current) {
      const myAudio = document.getElementById('myAudio');
      setTimeout(() => {
        myAudio.play();
        alreadyPlay.current = true;
      }, 4000);
    }
  }, []);

  return (
    <div css={styMusicFloating}>
      <audio id="myAudio" loop={true} className="hide">
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
  );
}

export default FloatingMusic;
