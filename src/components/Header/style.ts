import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 13px 0 22px;
  margin-bottom: 24px;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;

  span {
    font-family: 'Manrope', sans-serif;
    margin-left: 8px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.14px;
  }
  button {
    margin-left: 30px;
  }
`;
