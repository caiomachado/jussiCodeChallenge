import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 26px 208px;

  .social-media {
    display: flex;
    align-items: center;
    
    a {
      margin-right: 17px;
      
      &:last-of-type {
        margin-right: 0;
      }
      .icon {
        transition: all 0.1s ease-in-out;

        &:hover {
          path {
            fill: var(--green-jussi);
          }
        }
      }
    }
  }

  @media (max-width: 1100px) and (min-width: 601px) {
    padding: 26px 108px;
  }

  @media (max-width: 600px) {
    padding: 24px;

    .social-media {
      a {
        margin-right: 10px;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
`;
