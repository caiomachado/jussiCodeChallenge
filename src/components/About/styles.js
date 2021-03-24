import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 24px;
  background: linear-gradient(to right, #FFFFFF 50%, var(--gray) 50%);
  
  .about-company {
    max-width: 241px;
    margin-right: 107px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      margin-bottom: 24px;
    }

    p {
      font-weight: 500;
      margin-bottom: 24px;
      line-height: 24px;
    }

    button {
      border-radius: 6px;
      border: 1px solid black;
      padding: 12px 24px;
      font-weight: 500;
      background-color: white;
      transition: all 0.1s ease-in-out;
      cursor: pointer;
      width: 162px;
      height: 48px;

      &:hover {
        background-color: black;
        color: white;
      }
    }

    @media (max-width: 1100px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 80%;
      margin-right: 0;
      margin-bottom: 20px;

      h2 {
        text-align: center;
      }

      p {
        text-align: justify;
        line-height: 20px;
      }
    }
  }

  .company-photo {
    @media (max-width: 1100px) {
      img {
        max-width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;
