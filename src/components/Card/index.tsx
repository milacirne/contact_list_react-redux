import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Contact } from '../../models/types'
import { removeContact } from '../../redux/contact/slice'
import * as S from './styles'

type CardProps = {
  contact: Contact
}

const Card = ({ contact }: CardProps) => {
  const dispatch = useDispatch()
  const { id, name, email, telephone } = contact

  return (
    <S.CardContainer>
      <S.Card>
        <S.CardHead>
          <S.CardHeadField>
            <S.CardHeadIcons className="fa-solid fa-user" />
            Full Name
          </S.CardHeadField>
          <S.CardHeadField>
            <S.CardHeadIcons className="fa-solid fa-phone" />
            Telephone
          </S.CardHeadField>
          <S.CardHeadField>
            <S.CardHeadIcons className="fa-solid fa-envelope" />
            E-mail
          </S.CardHeadField>
          <S.CardButtonField>
            <Link to={`/edit-contact/${id}`}>
              <S.CardButton className="fa-solid fa-user-pen"></S.CardButton>
            </Link>
          </S.CardButtonField>
        </S.CardHead>
        <tbody>
          <S.CardBody>
            <S.CardBodyField>{name}</S.CardBodyField>
            <S.CardBodyField>{telephone}</S.CardBodyField>
            <S.CardBodyField>{email}</S.CardBodyField>
            <S.CardButtonField>
              <S.CardButtonRemove
                className="fa-solid fa-trash"
                onClick={() => dispatch(removeContact(id))}
              ></S.CardButtonRemove>
            </S.CardButtonField>
          </S.CardBody>
        </tbody>
      </S.Card>
    </S.CardContainer>
  )
}

export default Card
