import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../redux/store'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { Contact } from '../../models/types'

const Home = () => {
  const { contacts } = useSelector((state: RootReducer) => state.contacts)

  return (
    <Container>
      <Link to="/new-contact">
        <Button />
      </Link>
      <ul>
        {contacts.map((contact: Contact) => (
          <li key={contact.id}>
            <Card contact={contact} />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Home
