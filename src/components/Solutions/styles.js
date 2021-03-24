import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 56px 24px;

  .wrapper {
    display: flex;
    flex-direction: column;

    .block-title {
      margin-bottom: 24px;

      h2 {
        font-size: 32px;
        font-weight: 700;
        line-height: 40px;

        span {
          color: var(--green-jussi);
          margin-right: 4px;
        }
      }
    }

    .solutions-wrap {
      display: flex;

      & > *:not(:last-child) {
        margin-right: 20px;
      }

      .solution {
        display: flex;
        flex-direction: column;
        padding: 16px;
        width: 241px;
        border-radius: 4px;
        border: 1px solid var(--gray);
        transition: all 0.1s ease-in-out;

        &:hover {
          box-shadow: 4px 6px 12px black;
        }

        .solution-image {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100px;
          height: 100px;
          background-color: var(--gray);
          border-radius: 50%;
          margin-bottom: 53px;

          span {
            font-size: 32px;
            font-weight: 500;
          }
        }

        h3 {
          font-weight: 500;
          margin-bottom: 16px;
        }

        h4 {
          font-size: 12px;
          font-weight: 500;
          color: var(--pink-jussi);
          line-height: 18px;
          margin-bottom: 16px;
        }

        ul {
          list-style: none;

          li {
            font-weight: 500;
            font-size: 12px;
            color: var(--dark-gray);
            margin-bottom: 2px;

            &:last-of-type {
              margin-bottom: 16px;
            }
          }
        }

        button {
          width: 100%;
          height: 48px;
          background-color: var(--green-jussi);
          border-radius: 6px;
          padding: 12px 0;
          border: none;
          outline: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            transform: scale(1.02);
          }
        }
      }

      @media (max-width: 1100px) and (min-width: 878px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
      }
      
      @media (max-width: 877px) and (min-width: 560px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;

        .solution {
          margin-right: 0;
          align-items: center;

          a {
            width: 100%;
          }
        }
      }
      
      @media (max-width: 559px) and (min-width: 300px) {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        place-items: center;

        .solution {
          margin-right: 0;
          align-items: center;

          a {
            width: 100%;
          }
        }
      }
    }
  }
`;
