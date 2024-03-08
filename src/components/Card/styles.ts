import styled from 'styled-components'
import variables from '../../styles/variables'

export const CardContainer = styled.div`
  margin-top: 48px;
  width: 100%;
  height: 128px;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 5px;
    height: 148px;
  }
`

export const Card = styled.table`
  width: 100%;
  height: 100%;
  border-spacing: 0;
  font-size: 24px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    display: flex;
    flex-direction: row;
  }
`

export const CardHead = styled.tr`
  background-color: ${variables.lightGrey};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const CardHeadField = styled.th`
  width: 200px;
  max-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 8px 0;
  }
`

export const CardHeadIcons = styled.i`
  font-size: 24px;
  margin-right: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const CardBody = styled.tr`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 12px;
  }
`

export const CardBodyField = styled.td`
  width: 200px;
  max-width: 200px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 8px 0;
    width: 180px;
    white-space: nowrap;
  }
`

export const CardButtonField = styled.th`
  width: 100px;
  padding: 0 auto;

  @media (max-width: 768px) {
    margin: 0 auto;
    padding-top: 8px;
  }
`

export const CardButton = styled(CardHeadIcons)`
  padding: 8px;
  margin: 0;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${variables.lightGreen};
  color: ${variables.white};
  width: 48px;
  transition: 0.4s ease all;

  &:hover {
    background-color: ${variables.green};
  }

  @media (max-width: 768px) {
    width: 72px;
  }
`
export const CardButtonRemove = styled(CardButton)`
  background-color: ${variables.lightRed};

  &:hover {
    background-color: ${variables.red};
  }
`
