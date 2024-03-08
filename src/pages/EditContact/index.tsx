import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { RootReducer } from '../../redux/store'
import { editContact } from '../../redux/contact/slice'
import * as S from './styles'
import Container from '../../components/Container'
import { isValidName } from '../AddContact'

const EditContact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { contacts } = useSelector((state: RootReducer) => state.contacts)
  const contact = contacts.filter((contact) => contact.id === (id ?? 0))
  const { name, telephone, email } = contact[0]

  const [firstName, lastName] = name.split(' ')
  const [editedFirstName, setEditedFirstName] = useState(firstName)
  const [editedLastName, setEditedLastName] = useState(lastName)
  const [editedFullName, setEditedFullName] = useState(name)
  const [editedTelephone, setEditedTelephone] = useState(telephone)
  const [editedEmail, setEditedEmail] = useState(email)
  const [error, setError] = useState('')

  ///////////// NAME FUNCTION
  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === 'firstName') {
      if (isValidName(value)) {
        setEditedFirstName(value)
        const newFullName = `${value} ${editedLastName}`
        setEditedFullName(newFullName)
      }
    } else if (name === 'lastName') {
      if (isValidName(value)) {
        setEditedLastName(value)
        const newFullName = `${editedFirstName} ${value}`
        setEditedFullName(newFullName)
      }
    }
  }

  ///////////// BUTTON FUNCTION
  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault()

    if (
      !editedFirstName ||
      !editedLastName ||
      !editedEmail ||
      !editedTelephone
    ) {
      setError('Please fill in all fields on the form')
      return
    }

    const safeId = id || ''

    dispatch(
      editContact({
        id: safeId,
        name: editedFullName,
        telephone: editedTelephone,
        email: editedEmail
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <S.FormTitle>Edit Contact</S.FormTitle>
      <S.FormContainer>
        <S.FormField>
          <S.Label htmlFor="fullName">Full name:</S.Label>
          <S.InputContainer>
            <S.Input
              type="text"
              id="firstName"
              name="firstName"
              value={editedFirstName}
              onChange={handleInputName}
              required
            />
            <S.SecondInput
              type="text"
              id="lastName"
              name="lastName"
              value={editedLastName}
              onChange={handleInputName}
              required
            />
          </S.InputContainer>
        </S.FormField>
        <S.FormField>
          <S.InputContainer>
            <S.Label htmlFor="email">E-mail:</S.Label>
            <S.Input
              type="email"
              id="email"
              name="email"
              value={editedEmail}
              onChange={(event) => setEditedEmail(event.target.value)}
              required
            />
          </S.InputContainer>
        </S.FormField>
        <S.FormField>
          <S.InputContainer>
            <S.Label htmlFor="telephone">Telephone:</S.Label>
            <S.InputMask
              mask="(99) 99999-9999"
              type="string"
              id="telephone"
              name="telephone"
              value={editedTelephone}
              onChange={(event) => setEditedTelephone(event.target.value)}
              required
            />
          </S.InputContainer>
        </S.FormField>
        <S.ButtonContainer>
          <S.Button onClick={handleEdit}>Save</S.Button>
          <S.CancelButton onClick={() => navigate('/')}>Cancel</S.CancelButton>
        </S.ButtonContainer>
      </S.FormContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </Container>
  )
}

export default EditContact
