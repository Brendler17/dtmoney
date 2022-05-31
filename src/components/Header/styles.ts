import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  padding: 2rem 1rem 12rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: var(--shape);
    background: var(--light-blue);
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`