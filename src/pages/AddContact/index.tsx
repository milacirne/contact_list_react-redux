import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addContact } from '../../redux/contact/slice'
import Container from '../../components/Container'
import * as S from '../EditContact/styles'
import { RootReducer } from '../../redux/store'

///////////// REGEX FUNCTION
export const isValidName = (value: string) => {
  const regex = /^[a-zA-Z\u00C0-\u00FF\s]*$/
  return regex.test(value)
}

const AddContact = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fullName, setFullName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const getNextId = () => {
    const lastId =
      contacts.length > 0 ? parseInt(contacts[contacts.length - 1].id) : 0
    return String(lastId + 1)
  }

  const id = getNextId()

  ///////////// NAME FUNCTION
  const handleInputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === 'firstName') {
      if (isValidName(value)) {
        setFirstName(value)
        const newFullName = `${value} ${lastName}`
        setFullName(newFullName)
      }
    } else if (name === 'lastName') {
      if (isValidName(value)) {
        setLastName(value)
        const newFullName = `${firstName} ${value}`
        setFullName(newFullName)
      }
    }
  }

  ///////////// BUTTON FUNCTION
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!firstName || !lastName || !email || !telephone) {
      setError('Please fill in all fields on the form')
      return
    }
    dispatch(
      addContact({
        id: id,
        name: fullName,
        telephone,
        email
      })
    )
    navigate('/')
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Container>
      <S.FormTitle>Add New Contact</S.FormTitle>
      <S.FormContainer>
        <S.FormField>
          <S.Label htmlFor="fullName">Full name:</S.Label>
          <S.InputContainer>
            <S.Input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleInputName}
              placeholder="First name"
              required
            />
            <S.SecondInput
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleInputName}
              placeholder="Last name"
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Type your e-mail..."
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
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
              placeholder="Type your telephone number..."
              required
            />
          </S.InputContainer>
        </S.FormField>
        <S.Button onClick={handleSubmit}>Submit</S.Button>
      </S.FormContainer>
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </Container>
  )
}

export default AddContact
