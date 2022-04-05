import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;
  background-image: linear-gradient(180deg, #f2f4db, #3e412e);
`;

export const Span= styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: #3e412e;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;
export const Div2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 32px;
  color: #f2f4db;
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #3e412e;
    transform: scale(1.1);
    cursor: pointer;
    transition: .5s;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const SocialIcons = styled.a`
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s ease;
width: 5rem;
color: #f2f4db;
border-radius: 10px;
  padding: 2px;
&:hover {
    background-color: #3e412e;
    transform: scale(1.1);
    cursor: pointer;
  }
`