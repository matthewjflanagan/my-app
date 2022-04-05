import styled from 'styled-components';

export const Div2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

// Links Container
export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

`

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 22px;
  color: #f2f4db;
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    color: white;
    cursor: pointer;
    transition: .5s;
  }
`;