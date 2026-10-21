   import './index.css'
import './App.css'
import Nav from './components.nav/Nav'
import Tools from './components.tools/Tools'
import Hero from './components.hero/Hero'
import Footer from './component.footer/Footer'
import Steps from './components.steps/Steps'
import Product from './component.product/Product'
 const fetchProduct = async () => {
  const res = await fetch("/assignment-6/public/data.json");
  return res.json () 
};
const productPromise = fetchProduct();
function App() {
 

 }
  return (
    <div> 
     <Nav></Nav>
     <Hero></Hero>
     <Tools></Tools>
     <Steps></Steps>
     <Footer></Footer>
    </div>
  )


export default App
