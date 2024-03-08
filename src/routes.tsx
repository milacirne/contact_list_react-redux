import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import AddContact from './pages/AddContact'
import EditContact from './pages/EditContact'
import Error from './pages/Home/Error'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<AddContact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
