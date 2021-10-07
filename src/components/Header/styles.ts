import styled from 'styled-components';

export const Container = styled.header`
background: var(--blue);

`;

export const Content = styled.div`
//largura maxima
max-width: 1120px;

//sempre centralizado 
margin: 0 auto;

// 1rem significa 16px e 10rem 160px
padding: 2rem 1rem 12rem;
display: flex;
align-items: center;
justify-content: space-between;

button{
    font-size: 1rem;
    color: #ffff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    //adicionando transição ao botão
    transition: filter 0.2s ;

    // Vou falar para o botão quando estiver passando o mouse por cima
    &:hover{
        //da uma levemente escurecida no botão
        filter: brightness(0.9);
    }

}
`;
