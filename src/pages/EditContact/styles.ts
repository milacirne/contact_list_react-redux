import styled from 'styled-components'
import ReactInputMask from 'react-input-mask'
import variables from '../../styles/variables'

export const FormTitle = styled.h1`
  display: flex;
  justify-content: center;
  max-width: 45vw;
  margin: 32px auto 64px;
  padding-bottom: 16px;
  border-bottom: 6px solid ${variables.black};
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 24px;
    max-width: 90vw;
  }

  @media (min-width: 769px) and (max-width: 1366px) {
    max-width: 70vw;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 45vw;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 90vw;
  }

  @media (min-width: 769px) and (max-width: 1366px) {
    max-width: 70vw;
  }
`
export const FormField = styled.div`
  display: flex;
  margin-bottom: 24px;
  width: 100%;
`

export const Label = styled.label`
  padding: 8px 0;
  text-transform: uppercase;
  font-weight: bold;
  width: 150px;
  margin-right: 100px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 16px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
export const SecondInput = styled(Input)`
  margin-left: 16px;

  @media (max-width: 768px) {
    margin-left: 8px;
  }
`
export const InputMask = styled(ReactInputMask)`
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 auto;
`

export const Button = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  background-color: ${variables.blue};
  width: 160px;
  height: 48px;
  transition: 0.5s all ease;
  color: ${variables.white};
  margin: 0 auto;
  margin-top: 48px;

  &:hover {
    background-color: ${variables.lightBlue};
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 32px;
    font-size: 14px;
  }
`

export const CancelButton = styled(Button)`
  background-color: ${variables.lightRed};
  margin-left: 32px;

  &:hover {
    background-color: ${variables.red};
  }
`

export const ErrorMessage = styled.div`
  color: ${variables.lightRed};
  width: 45vw;
  margin: 32px auto 0;
`
