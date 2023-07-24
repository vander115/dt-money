import { HeaderContainer, HeaderContent, NewTranscationButton } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import logoImage from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImage} alt="Logo DT Money" />


                <Dialog.Root>
                    <Dialog.Trigger asChild>
                    <NewTranscationButton>Nova transação</NewTranscationButton>
                    </Dialog.Trigger>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
}
