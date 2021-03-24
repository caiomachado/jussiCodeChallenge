import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 136px 24px;

  .newsletter-wrapper {
    display: flex;
    justify-content: center;

    .left-column {
      margin-right: 50px;

      span {
        color: var(--green-jussi);
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
      }
    }

    .right-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      
      h2 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
        margin-bottom: 24px;
      }
      
      form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--green-jussi);
        width: 95%;

        input {
          height: 60px;
          width: 320px;
          background-color: transparent;
          color: white;
          outline: none;
          border: none;

          &::placeholder {
            color: white;
            font-weight: 500;
          }
        }

        button {
          font-weight: 500;
          color: var(--green-jussi);
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          transition: all 0.1s ease-in-out;
          

          &:hover {
            box-shadow: 0 0 10px var(--green-jussi);
            padding: 10px 0;
          }
        }
      }
    }

    @media (max-width: 1100px) and (min-width: 601px) {
      .left-column {
        margin-right: 10px;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;

      .left-column {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0;
      }

      .right-column {
        form {
          flex-direction: column;
          padding: 20px 0;
          width: 100%;

          input {
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    padding: 64px 24px;
  }
`;
