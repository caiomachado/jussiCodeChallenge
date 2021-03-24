import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 840px) and (min-width: 601px) {
    display: ${props => props.media === "medium" ? 'flex' : 'none'};
  }

  @media (max-width: 600px) and (min-width: 300px) {
    display: ${props => props.media === "small" ? 'flex' : 'none'};
  }

  .menu-hamb-icon {
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:hover {
      fill: var(--green-jussi);
      stroke: var(--green-jussi);
    }
  }
  
  .menu {
    position: relative;

    ul {
      position: absolute;
      list-style: none;
      background-color: white;
      box-shadow: 3px 6px 12px black;
      padding: 20px 10px;
      right: 0;
      width: 150px;
      z-index: 50;
      border-top: 3px solid var(--green-jussi);
      
      .visible-a {
        display: block;
        
        li {
          margin-bottom: 5px;
          font-weight: 500;
          
          &:hover {
            color: var(--green-jussi);
          }
        }
        
        .flex-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          &:hover {
            svg {
              path {
                stroke: var(--green-jussi);
              }
            }
          }
        }
      }
    }
  }
`;
