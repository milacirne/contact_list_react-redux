import styled from 'styled-components'
import variables from '../../styles/variables'

export const Container = styled.main`
  margin: 0 auto;
  max-width: calc(100% - 64px);
  height: calc(100vh - 70px);
  padding: 48px 64px;
  background-color: ${variables.white};
  border-radius: 4px;
  border: 2px solid ${variables.grey};
  overflow-y: scroll;

  @media (max-width: 768px) {
    max-width: 95vw;
    padding: 24px;
  }
`
