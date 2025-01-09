import { useQuery } from "@tanstack/react-query";
import AdminRouter from "./AdminRouter"
import UserRouter from "./UserRouter"
import { getCategories } from "../apis/categories";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/features/categorySlice";

const MainRouter = () => {
    const dispatch = useDispatch();
    const { isFetched, data: categoriesData } = useQuery({ queryKey: ['categories'], queryFn: getCategories });
    if (isFetched) {
        dispatch(setCategory(categoriesData));
    }
    const isUser = true;
    return isUser ? <UserRouter /> : <AdminRouter />
}

export default MainRouter