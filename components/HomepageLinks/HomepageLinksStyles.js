import styled from 'styled-components';

export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

// Links Container
export const LinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center
`

// Links Container
export const LinkList = styled.li`
  margin: 5px 0;
`

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 22px;
  color: #f2f4db;
  margin: 1.2rem;
  border-radius: 10px;
  &:hover {
    color: white;
    cursor: pointer;
    transition: .5s;
  }
`;