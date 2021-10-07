import Modal from 'react-modal';
import {FormEvent, useState} from 'react';
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import  closeImg from '../../assets/close.svg';
import { api } from '../../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType ] = useState('deposit');

    function handleCreateNewTransactions(event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type,
           
        };

        api.post('/transactions', data)
    }


    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                 type="button" 
                 onClick={onRequestClose} 
                 className="react-modal-close"
            >
                        <img src={closeImg} alt="close"/>
            </button>          
            
            <Container onClick={handleCreateNewTransactions}>
                    <h2>Cadastrar transação</h2>

                    <input 
                        placeholder="Titulo" 
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />

                    <input 
                        type="number"  
                        placeholder="Valor"
                        value={value}
                        onChange={event => setValue(parseInt(event.target.value))}    
                    />
                
                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() =>{ setType('deposit'); }} 
                        isActive={type === 'deposit'} 
                        activeColor="green"
                    >

                            <img src={incomeImg} alt="" />
                            <span>Entrada</span>

                    </RadioBox>

                    <RadioBox
                        type="button"   
                        onClick={() =>{ setType('withdraw'); }} 
                        isActive={type ==='withdraw'} 
                        activeColor="red"
                    >

                        <img src={outComeImg} alt="" />
                        <span>Saída</span>

                    </RadioBox>
                </TransactionTypeContainer> 

                <input 
                    placeholder="Categoria" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button 
                    type="submit"
                    placeholder="Categoria"
                > 
                    Cadastrar 
                </button>
            </Container>
          
        </Modal>  
    
    )
}