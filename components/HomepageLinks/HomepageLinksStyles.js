import styled from 'styled-components';

export const Div2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

// Links Container
export const LinkContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 22px;
  color: #f2f4db;
  padding: 1.2rem;
  border-radius: 10px;
  &:hover {
    color: white;
    cursor: pointer;
    transition: .5s;
  }
`;