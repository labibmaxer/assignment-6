   import './index.css'
import './App.css'
import Nav from './components.nav/Nav'
import Tools from './components.tools/Product'
import Hero from './components.hero/Hero'
import Footer from './component.footer/Footer'
import Steps from './components.steps/Steps'
import Product from './components.tools/Product'
import { Suspense } from 'react'
 const fetchProduct = async () => {
  const res = await fetch("/assignment-6/public/data.json");
  return res.json () 
};
const productpromise = fetchProduct();
function App() {
 

 
  return (
    <div> 
     <Nav></Nav>
     <Hero></Hero>
     <Suspense fallback={<span className='loading loading-dots loading-xl'></span>}>
      <Product productpromise={productpromise}></Product>
     </Suspense>
     <Steps></Steps>
     <Footer></Footer>
    </div>
  )
}

export default App;
