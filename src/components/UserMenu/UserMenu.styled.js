import styled from 'styled-components';
export const Btn = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 20px;
  background: #65ebff4d;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  justify-content: center;
  text-align: center;
  align-content: center;
  border-color: #0e0e9c;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: blue;
    background-color: #6363e7d4;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #0e0e9c;
  text-align: center;
  margin: 0;
`;
