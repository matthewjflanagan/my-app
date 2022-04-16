import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
`

export const Box = styled.div`
  background: #f2f4db;
  box-shadow: 0 0 5px #f2f4db;
  border-radius: 12px;
  height: 100px;
  width: 200px;
  padding: 12px;
  margin: 15px;
`
export const BoxTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #3e412e;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 18px;
  };
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: #3e412e;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: #3e412e;

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
