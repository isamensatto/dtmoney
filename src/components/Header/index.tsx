import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactionsModal: () => void;
}

export function Header ({onOpenNewTransactionsModal}: HeaderProps) {


    return(
        <Container>
            <Content>
            <img src={LogoImg} alt="dt-money-logo" />
            <button type="button" onClick={onOpenNewTransactionsModal}>Nova Transação</button>
           
            </Content>
        </Container>
    )
}