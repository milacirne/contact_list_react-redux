import { Link } from 'react-router-dom'
import * as S from './styles'

const Header = () => {
  return (
    <S.Container>
      <S.Title>Contacts</S.Title>
      <Link to="/">
        <S.IconContainer>
          <S.Icon className="fas fa-house" />
          <S.IconName>Home</S.IconName>
        </S.IconContainer>
      </Link>
    </S.Container>
  )
}

export default Header
