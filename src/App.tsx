import './App.css'
import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const NewArrivalsPage = lazy(() => import('./pages/NewArrivalsPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const SignInPage = lazy(() => import('./pages/SignInPage'))
const SignUpPage = lazy(() => import('./pages/SignUpPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'))

function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/new-arrivals" element={<NewArrivalsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
