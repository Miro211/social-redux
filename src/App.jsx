import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { UsersPage } from './Pages/Users/UsersPage'
import './App.css'
import Layout from './Components/Layout/Layout'

function App() {

  return (
    <div> 
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
