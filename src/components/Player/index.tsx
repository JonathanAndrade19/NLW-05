import stytes from './styles.module.scss';

export function Player() {
    return (
        <div className={stytes.playerContainer}>
            <header>
                <img src="/playing.svg" alt="Tocando Agora" />
                <strong>Tocando Agora</strong>
            </header>

            <div className={stytes.emptyPlayer}>
                <strong>Selecione um podcast para ouvir</strong>
            </div>

            <footer className={stytes.empty}>
                <div className={stytes.progress}>
                    <span>00:00</span>
                    <div className={stytes.slider}>
                        <div className={stytes.emptySlider} />
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