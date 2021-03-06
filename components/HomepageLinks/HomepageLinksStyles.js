import styled from 'styled-components';

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: center;
`;

// Links Container
export const LinkContainer = styled.ul`
  margin: 5px;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  text-align: center;
`

// Links Container
export const LinkList = styled.ul`
  margin-top: 5px;
    opacity: 0.8;
  &:hover {
    opacity: 1.0;
    transition: .5s;
  }
`

// Navigation Links
export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 5px;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 22px;
  color: ${props => props.theme.colors.primary1};
  &:hover {
    cursor: pointer;
  }
`;