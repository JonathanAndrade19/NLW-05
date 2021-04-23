import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import stytes from './styles.module.scss';

export function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    })
    return (
        <header className={stytes.headerContainer}>
            <img src="/logo.svg" alt="Podcast" />
            <p>O melhor para você ouvir, sempre</p>
            <span>{ currentDate }</span>
        </header>
    );
}