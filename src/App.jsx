// App.js
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home'
import BookingForm from './component/BookingForm/BookingForm'
import Layout from './Layout/Layout'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<BookingForm />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
