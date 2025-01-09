import { Button, Flex, Tooltip } from "antd"
import { SearchBox } from "../Public";
import { icons } from '../../utils/icons';

const Header = () => {
    const listItem = [
        { label: 'Danh sách cửa hàng', href: '/store', icon: icons.store },
        { label: 'Giới thiệu', href: '/about', icon: icons.about },
        { label: 'Liên hệ', href: '/contact', icon: icons.contact },
        { label: 'Tin công nghệ', href: '/news', icon: icons.news }
    ]
    return (
        <header className="py-5">
            <div className="container mx-auto flex justify-between items-center">
                <a href="">Logo</a>
                <div className="hidden lg:block">
                    <SearchBox />
                </div>
                <ul className="flex gap-3 items-center">
                    {listItem.map((item, index) => (
                        <li key={index}>
                            <Button
                                style={{
                                    padding: '24px 20px',
                                }}
                                type="text"
                                icon={<item.icon />}
                            >
                                <span className="hidden xl:block">{item.label}</span>
                            </Button>
                        </li>
                    ))}
                </ul>
                <Flex wrap gap="small">
                    <Tooltip title="Đăng nhập tài khoản">
                        <Button size="large" type="default" shape="circle" icon={<icons.user />} />
                    </Tooltip>
                    <Button size="large" type="default" shape="circle" icon={<icons.cart />} />
                </Flex>
            </div>
        </header>
    )
}

export default Header