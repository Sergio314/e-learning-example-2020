import styled from 'styled-components';

export const Wrapper = styled.section`
  font-family: 'Roboto', sans-serif;
  position: relative;
  margin: 20px 0 30px;

.option {
    display: flex;
    align-items: center;
    width: 100%;
  &:hover{
    text-shadow:0px 0px .5px ${(props) =>
      props.theme.palette['light-lavender']} ;
  }
  &__icon {
    display: flex;
      align-items: center;
              margin-right: 10px;
  }
}


.title {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #525252;
    margin: 0;
  }
  .description {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    margin: 10px 0 5px;

    color: #254555;
  }

  p {
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #525252;
  }

  

  
    label {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.15000000596046448px;
      text-align: left;
      color: #254555;
      &:hover {
        cursor: pointer;
      }
  
 
  .error {
    position: absolute;
    font-size: 14px;
    color: red;
  }

`;
