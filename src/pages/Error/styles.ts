import styled from 'styled-components'

export const Message = styled.h1`
  display: flex;
  justify-content: center;
  padding-top: 64px;
  max-width: 45vw;
  margin: 0 auto;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 18px;
    max-width: 90vw;
  }

  @media (min-width: 769px) and (max-width: 1366px) {
    max-width: 70vw;
  }
`
