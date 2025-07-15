import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  margin: 100px auto 0 auto;
`;

export const Fio = styled.input`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@100;200;300;400;500;600;800&display=swap");
  font-family: "Manrope", sans-serif;
  width: 373px;
  height: 52px;
  border-radius: 100px;
  border: 1px solid #454545;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: 0%;
  padding-left: 20px;
  text-transform: capitalize;

  &[type=number]::-webkit-outer-spin-button,
  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;
