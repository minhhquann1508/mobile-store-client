import AdminRouter from "./AdminRouter"
import UserRouter from "./UserRouter"

const MainRouter = () => {
    const isUser = true;
    return isUser ? <UserRouter /> : <AdminRouter />
}

export default MainRouter