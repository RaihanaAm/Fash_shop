import { About } from "./Pages/About/about"
import { Home } from "./Pages/Home/components/home"
import { Panier } from "./Pages/Panier/panier"
import { Contact } from "./Pages/contact/contact"
import { Favorite } from "./Pages/favorite/favorite"
import { Product } from "./Pages/product/product"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./layout/navbar/navbar"

export const App = () => {

  return (
    <div>
      <Nav />

      <Routes>
        {/* <Route path="*" element={<Error />}/> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/panier" element={<Panier />} />
      </Routes>

    </div>
  )

}