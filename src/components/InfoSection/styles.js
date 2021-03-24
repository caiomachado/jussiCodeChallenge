import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background-color: var(--green-jussi);

  .introduction {
    display: flex;
    margin-right: 60px;

    .left-column {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: 30px;

      span {
        font-size: 64px;
        font-weight: 500;
        line-height: 76.8px;
        color: white;
      }
    }
    
    
    .right-column {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 64px;
        font-weight: 500;
        line-height: 76.8px;
      }
      
      p {
        max-width: 330px;
        font-weight: 500;
        margin: 16px 0 32px;
      }
      
      a {
        max-width: 196px;

        button {
          cursor: pointer;
          outline: none;
          padding: 12px 24px;
          border: 1px solid black;
          background-color: transparent;
          border-radius: 6px;
          font-weight: 500;
          width: 196px;
          height: 48px;
          transition: all 0.1s ease-in-out;
          
          &:hover {
            background-color: black;
            color: var(--green-jussi);
          }
        }
      }
    }
  }

  .products-highlight {
    width: 460px;
    height: 480px;
    position: relative;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      background-color: white;
      position: absolute;
      box-shadow: 0px 32px 32px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      border: 1px solid var(--gray);
      height: 271px;
      width: 209px;

      button {
        border-radius: 24px;
        border: 1px solid var(--pink-jussi);
        color: var(--pink-jussi);
        padding: 12px 24px;
        font-weight: bold;
        background-color: white;
        outline: none;
        cursor: pointer;

        &:hover {
          background-color: var(--pink-jussi);
          color: white;
        }
      }

      &.top {
        top: 0;
        left: 28%;
        z-index: 10;
      }

      &.left {
        bottom: 12%;
      }

      &.bottom-right {
        bottom: 0;
        right: 0;
      }

      &:hover {
        z-index: 20;
      }
    }
  }

  @media (max-width: 800px) and (min-width: 601px) {
    flex-direction: column;

    .introduction {
      flex-direction: column;
      margin-right: 0;

      .left-column {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0;
      }

      .right-column {
        align-items: center;
        margin-right: 0;

        h1, p {
          text-align: center;
        }
      }
    }

    .products-highlight {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      .card {
        &.left {
          bottom: unset;
          left: 0;
        }

        &.top {
          top: unset;
          left: unset;
        }

        &.bottom-right {
          left: unset;
          bottom: unset;
          right: 0;
          z-index: 10;
        }
      }
    }
  }

  @media (max-width: 600px) and (min-width: 300px) {
    flex-direction: column;

    .introduction {
      flex-direction: column;
      margin-right: 0;

      .left-column {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0;
      }

      .right-column {
        align-items: center;
        margin-right: 0;

        h1 {
          text-align: center;
          font-size: 50px;
          line-height: 60px;
        }

        p {
          text-align: center;
        }
      }
    }

    .products-highlight {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;

      .card {
        &.left {
          bottom: unset;
          left: 0;
        }

        &.top {
          top: unset;
          left: unset;
        }

        &.bottom-right {
          left: unset;
          bottom: unset;
          right: 0;
          z-index: 10;
        }
      }
    }
  }
`;
