import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray);
  padding: 22px;

  & > *:not(:last-child) {
    margin-right: 48px;
  }

  p {
    font-weight: bold;
  }

  @media (max-width: 1100px) and (min-width: 601px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 20px;

    .rotate-small {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    
    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 10px;
    }

    .rotate-small {
      transform: rotate(90deg);
    }
  }
`;
