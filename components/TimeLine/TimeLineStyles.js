import styled from 'styled-components'

export const CarouselContainer = styled.ul`
  width: 500px;
  height: 160px;
  background: #f2f4db;
  border-radius: 10px;
  padding: .5rem 1rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  &:first-of-type{
    margin: 0 10px;
  }
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
  justify-content: initial;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    width: 300px;
    height: 100px;
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  display: flex;
  min-width: ${({ final }) => final ? `120%;` : `min-content`}
`

export const CarouselItem = styled.div`
margin-left: 32px;
width: 300px;
background: #f2f4db;
padding: 4px;
align-content: start;
scroll-snap-align: start;
border-radius: 3px;
overflow: visible;
position: relative;
height: fit-content;

${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  
  @media ${props => props.theme.breakpoints.sm} {
    width: 180px;
  }
`

export const CarouselItemTitle = styled.h5`
  font-weight: bold;
  font-size: 24px;
  line-height: 16px;
  height: fit-content;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: #3e412e;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 5px;
  padding: 5px;
  
  @media ${props => props.theme.breakpoints.sm} {
    margin: 3px;
    font-size: 16px;
    line-height: 2px;
  }
`
export const CarouselItemImg = styled.svg`
  -webkit-mask-image: none;
  margin-left: 16px;
  overflow: visible;
  width: 100%;
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #3e412e;
  padding: 0 8px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
  }
`
export const CarouselButtons = styled.div`
  display: flex;
  visibility: visible;
  margin-bottom: 48px;
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};
  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background-color: #f2f4db;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`
