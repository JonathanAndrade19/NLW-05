import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player';
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setcurrentEpisodeIndex] = useState(0);

  function play(episode) {
    setEpisodeList([episode]);
    setcurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play}}>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
        <Player/>
      </div>
    </PlayerContext.Provider>
      
  )
}

export default MyApp
