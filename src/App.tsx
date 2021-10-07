import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard }  from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');
 
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true);
}

function handleCloseTransactionModal(){
    setIsNewTransactionModalOpen(false);

}
  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenTransactionModal}/>
      <Dashboard />
     <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
     <GlobalStyle/>
    </>
  );
}

