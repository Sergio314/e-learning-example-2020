import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;

  span {
    font-weight: 500;
    font-size: 15px;
    line-height: 26px;
    letter-spacing: 0.46px;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.palette.background};
  font-size: 14px;
  line-height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  letter-spacing: 0.14px;
`;
