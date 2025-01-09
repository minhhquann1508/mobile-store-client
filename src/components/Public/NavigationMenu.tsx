import { CategoryType } from '../../types/Category';
import { Button } from 'antd';
import { icons } from '../../utils/icons';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NavigationMenu = ({ categories }: { categories: CategoryType[] }) => {
    return (
        <nav className='py-3 shadow'>
            <div className="container mx-auto">
                <div className='flex'>
                    <Button
                        className='font-medium text-[15px]'
                        style={{
                            padding: '24px 8px',
                            marginRight: 12
                        }}
                        type="text"
                        icon={<icons.bar />}
                    >
                        Danh mục
                    </Button>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={6}
                        draggable={true}
                    >
                        {categories?.map(category => (
                            <SwiperSlide
                                className='flex justify-center items-center'
                                key={category._id}
                            >
                                <Button
                                    className='flex justify-center gap-3'
                                    style={{
                                        padding: '24px 8px',
                                        width: '100%',
                                    }}
                                    type="text"
                                >
                                    <img width={35} src={category.image ?? 'https://imagor.owtg.one/unsafe/96x96/filters:quality(100)/https://d28jzcg6y4v9j1.cloudfront.net/media/core/categories/2022/3/15/danh-muc-icon-arm-man-hinh-thinkpro.vn.png'} alt="" />
                                    <p className='font-medium text-[15px]'>{category.categoryName}</p>
                                </Button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </nav>
    )
}

export default NavigationMenu