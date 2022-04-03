import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 90%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    display: flex;
    flex-direction: column;

    margin: 0 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 90%;
    display: flex;
    flex-direction: column;

    margin: 0 10px;
  }
`;
