import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(100% - 64px);
  width: 100%;
  margin: 8px 32px;

  @media (max-width: 768px) {
    max-width: 90vw;
    width: 100%;
    margin: 8px 24px;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-right: 80px;
  transition: 0.4s all ease;

  &:hover {
    color: ${variables.blue};
  }

  @media (max-width: 768px) {
    margin-right: 32px;
  }
`

export const Icon = styled.i`
  font-size: 32px;
  margin-right: 8px;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const IconName = styled.h2`
  font-size: 24px;
  color: inherit;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
