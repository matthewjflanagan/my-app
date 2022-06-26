import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    transition: .5s;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px #f2f4db;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 20px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: ${props => props.theme.colors.primary1};
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${props => props.theme.colors.background2};
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: ${props => props.theme.colors.primary1};
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: ${props => props.theme.colors.primary1};
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:1rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: ${props => props.theme.colors.primary1};
font-size: 1.5rem;
`

export const SocialIcons = styled.a`
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s ease;
width: 100px;
color: ${props => props.theme.colors.primary2};
border-radius: 10px;
padding: 2px;
background-color: ${props => props.theme.colors.primary1};
&:hover {
    background-color: ${props => props.theme.colors.primary1};
    transform: scale(1.1);
    transition: .5s;
    cursor: pointer;
  }
`