import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 24px;
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  z-index: 100;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: black;

    &:hover {
      color: var(--green-jussi);
    }
  }

  .search-icon, .shopping-cart {
    transition: all 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
      path {
        stroke: var(--green-jussi);
      }
    }
  }

  .about-jussi {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 32px;
    }

    @media (max-width: 840px) {
      a {
        display: none;
      }

      .jussi-logo {
        margin-right: 0;
      }
    }

    @media (max-width: 600px) {
      width: 100%;
      justify-content: space-between;

      .jussi-logo {
        margin-right: 0;
      }
    }
  }

  .action-bar {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 32px;
    }

    .search-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 16px;
      border: 1px solid var(--gray);
      border-radius: 24px;
      width: 240px;
      height: 40px;

      input {
        border: none;
        outline: none;
        width: 80%;

        &::placeholder {
          color: var(--pink-jussi);
          font-weight: 500;
        }
      }
    }

    @media (max-width: 840px) {
      a, .shopping-cart {
        display: none;
      }

      .search-bar {
        margin-right: 0;
      }
    }

    @media (max-width: 600px) {
      width: 100%;
      margin-top: 20px;

      .search-bar {
        width: 100%;
        margin-right: 0;

        input {
          width: 100%;
        }
      }
    }
  }
`;
