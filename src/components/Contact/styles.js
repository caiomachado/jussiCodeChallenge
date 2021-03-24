import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--pink-jussi);
  padding: 136px 24px;

  .contact-wrapper {
    text-align: center;
    color: white;
    font-weight: 500;

    h2 {
      margin-bottom: 32px;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
    }

    .email {
      font-size: 32px;
      margin-top: 8px;
    }

    @media (max-width: 500px) {
      max-width: 100%;

      h2 {
        font-size: 28px;
        line-height: 38px;
      }

      .email {
        font-size: 24px;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 64px 24px;
  }
`;
