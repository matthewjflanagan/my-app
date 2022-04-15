import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding: 0;
  margin: 0;
  max-width: 800px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
`

export const SectionTitle = styled.h2`
  font-weight: 500;
  margin-left: 15px;
  font-size: ${(props) => props.main ? '28px' : '32px'};
  margin-left: 10px;
  width: max-content;
  -webkit-background-clip: text;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  line-height: ${(props) => props.main ? '32px' : '40px'};
  margin-bottom: 8px;
  padding: ${(props) => props.main ? '16px 0 8px' : '0'};
  max-width: 100%;
`

export const SectionText = styled.p`
  max-width: 800px;
  margin-top: 10px;
  margin-left: 15px;
  font-size: 18px;
  line-height: 40px;
  font-weight: 500;
  padding-bottom: 3.6rem;
  color: #f2f4db;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    margin-left: 15px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    margin-left: 10px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #3e412e;
  background: #3e412e;

    margin: ${(props) => props.divider ? "4rem 0" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #f2f4db;

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #f2f4db;
  background: none;
  border: #f2f4db;
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  width: fit-content;
  font-size: 20px;
  line-height: 20px;
  margin-top: 24px; 
  margin-bottom: 64px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #f2f4db;
    background: #3e412e;
    border: 1px solid white;
  }

  &:active {
    background: ##3e412e;
    border: 1px solid #f2f4db;
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 25px;
  padding: 3px 0;
  margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3e412e;
  background: #f2f4db;
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 18px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  color: #3e412e;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? '#3e412e' : '#f2f4db'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: 24px;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
  }

  &:disabled{
    background: #f2f4db;
    opacity: 0.5;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #f2f4db;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
