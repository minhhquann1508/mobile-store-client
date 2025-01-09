import { Input } from "antd"
import { icons } from '../../utils/icons';

const SearchBox = () => {
    return (
        <div>
            <Input
                style={{
                    width: 350,
                    borderRadius: '20px'
                }}
                size="large"
                placeholder="Tên sản phẩm, danh mục, hãng"
                prefix={<icons.search className="mr-2" />}
            />
        </div>
    )
}

export default SearchBox