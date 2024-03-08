import styled from 'styled-components'
import variables from '../../styles/variables'

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 24px;
  border: none;
  border-radius: 8px;
  background-color: ${variables.blue};
  width: 280px;
  height: 64px;
  transition: 0.5s all ease;
  color: ${variables.white};

  &:hover {
    background-color: ${variables.lightBlue};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    width: 160px;
    height: 40px;
  }
`
export const ButtonIcon = styled.i`
  font-size: 24px;
  margin-right: 16px;
  color: ${variables.white};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
