import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components/Public';
import { AboutPage, ContactPage, HomePage, LoginPage, NewsPage, NotFoundPage, ProductDetailPage, ProductsPage, RegisterPage, SearchPage, UserInfoPage } from '../pages/Public';
const UserRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/user-info" element={<UserInfoPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default UserRouter