import { HeaderContainer, HeaderContent, NewTranscationButton } from './styles';

import logoImage from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage} alt="Logo DT Money" />
                <NewTranscationButton>Nova transação</NewTranscationButton>
            </HeaderContent>
        </HeaderContainer>
    );
}
