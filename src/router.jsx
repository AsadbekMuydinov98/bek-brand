import { Route, Routes } from "react-router-dom"
import PublicLayout from "./layouts/publicLayouts"
import ProtectedLayout from "./layouts/protectedLayout"
import Profile from "./pages/UserInfo"
import HomePage from "./pages/Home"
import Contact from "./pages/Contact"
import ProductDetailPage from "./pages/ProductDetail"
import About from "./pages/About"
import Basket from "./pages/Basket"
import FavouritesPage from "./pages/Favourites"
import ProductPage from "./pages/Products"
import Statistics from "./pages/Dashboard/Statistics"
import Users from "./pages/Dashboard/Users"
// import Products from "./redux/slice/products"
import Dashboard from "./pages/Dashboard"
import Categories from "./pages/Dashboard/Category"
import Colors from "./pages/Dashboard/Colors"
import ProductsList from "./pages/Dashboard/Products"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Brands from "./pages/Dashboard/Brand"

const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/products' element={<ProductPage />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product/:id' element={<ProductDetailPage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/basket' element={<Basket />}/>
          <Route path='/favourites' element={<FavouritesPage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Signup />}/>
        </Route>

            {/* Protected Routes */}
        <Route path="/user" element={<ProtectedLayout />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route element={<Dashboard />}>
            <Route index element={<Statistics />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="categories" element={<Categories />} />
            <Route path="colors" element={<Colors />} />
            <Route path="users" element={<Users />} />
            <Route path="brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default MyRouter
