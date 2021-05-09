import { PlayerContext } from '../../contexts/PlayerContext';
import { useContext } from 'react';
import Image from "next/image";
import stytes from './styles.module.scss';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export function Player() {
    const { episodeList, currentEpisodeIndex } = useContext(PlayerContext)
    const episode = episodeList[currentEpisodeIndex]

    return (
        <div className={stytes.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando Agora" />
                <strong>Tocando Agora</strong>
            </header>

            { episode ? (
                <div className={stytes.currentEpisode}>
                    <Image
                        width={592}
                        height={592}
                        src={episode.thumbnail}
                        objectFit="cover"
                    />
                    <strong>{episode.title}</strong>
                    <span>{ episode.members }</span>
                </div>
            ) : (
                <div className={stytes.emptyPlayer}>
                    <strong>Selecione um podcast para ouvir</strong>
                </div>
            ) }

            <footer className={!episode ? stytes.empty : ''}>
                <div className={stytes.progress}>
                    <span>00:00</span>
                    <div className={stytes.slider}>
                        {episode ? (
                            <Slider
                                trackStyle={{ backgroundColor: '#84d361' }}
                                railStyle={{ backgroundColor: '#9f75ff' }}
                                handleStyle={{ borderColor: '#84d361', borderWidth: 4 }}
                            />
                        ): (
                            <div className={stytes.emptySlider} />        
                        ) }
                    </div>
                    <span>00:00</span>
                </div>

                <div className={stytes.buttons}>
                    <button type="button">
                        <img src="/shuffle.svg" alt="Embaralhar"/>
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="Tocar anterior"/>
                    </button>
                    <button type="button" className={stytes.playButton}>
                        <img src="/play.svg" alt="Tocar"/>
                    </button>
                    <button type="button">
                        <img src="/play-next.svg" alt="Tocar próxima"/>
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="Repetir"/>
                    </button>
                </div>
            </footer>
        </div>
    );
}