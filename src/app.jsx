import { Home } from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element = {<Home/>}/>
      <Route path="*" element={<NotFound></NotFound>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}
