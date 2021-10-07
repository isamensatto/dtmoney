import styled from 'styled-components';

export const Container = styled.div`
//Escolhi o display grid pq sao tres caixas
display: grid;
//aqui eu informo que serão 3 caixas com 1fr flexivel todas elas
grid-template-columns: repeat(3, 1fr);
//espaçamento dentre elas
gap: 2rem;
//serve para jogar as caixas mais pra cima e chegar ate o header
margin-top: -10rem;

div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500 ;
        line-height: 3rem;
    }

    &.total {
        background: var(--green);
    }

}

`;