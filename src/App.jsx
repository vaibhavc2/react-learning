import { Fragment } from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import PageNotFound from './components/PageNotFound'
import Product from './components/Product'


function App() {

  return (
    <Router>

      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />

      </Routes>

    </Router>
    // <Fragment>
    //   {/* <LargeHeading name="VC" text="abc" price={123} />
    //   <MH />
    //   <SM /> */}
    //   <Header />
    // </Fragment>
  )
}

export default App
