import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header, NavigationMenu } from '../components/Public';
import { AboutPage, ContactPage, HomePage, LoginPage, NewsPage, NotFoundPage, ProductDetailPage, ProductsPage, RegisterPage, SearchPage, UserInfoPage } from '../pages/Public';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const UserRouter = () => {
    const { categories } = useSelector((state: RootState) => state.category);
    return (
        <BrowserRouter>
            <Header />
            <NavigationMenu categories={categories} />
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