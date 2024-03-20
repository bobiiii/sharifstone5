import React, { useState } from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import blog1 from '../images/blog1.png';
import blog2 from '../images/blog2.png';
import blog3 from '../images/blog3.png';
import blog4 from '../images/blog4.png';
import blog5 from '../images/blog5.png';
import blog6 from '../images/blog6.png';
import eye from '../images/eye.png';
import cal from '../images/cal.png';
import { Transition } from '@headlessui/react';

function BlogCards() {
    const [visibleCards, setVisibleCards] = useState(6);
    const [showButton, setShowButton] = useState(true);

    const cards = [
        {
            image: blog1,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'HR Consulting 101: What You Need to Know',
        },
        {
            image: blog2,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'Revolutionizing HR Strategy: The Role of Consulting',
        },
        {
            image: blog3,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'HR Consulting 101: What You Need to Know',
        },
        {
            image: blog4,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'Revolutionizing HR Strategy: The Role of Consulting',
        },
        {
            image: blog5,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'HR Consulting 101: What You Need to Know',
        },
        {
            image: blog6,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'Revolutionizing HR Strategy: The Role of Consulting',
        },
        {
            image: blog4,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'Revolutionizing HR Strategy: The Role of Consulting',
        },
        {
            image: blog5,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'HR Consulting 101: What You Need to Know',
        },
        {
            image: blog6,
            date: 'Feb 7, 2023',
            views: '3,015 Views',
            heading: 'Revolutionizing HR Strategy: The Role of Consulting',
        },
    ];

    const LoadMoreProducts = () => {
        setVisibleCards(cards.length);
        setShowButton(false);
    };
    const ShowLessProducts = () => {
        setVisibleCards(6);
        setShowButton(true);
    };

    return (
        <MaxWidthWrapper>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 justify-center items-stretch'>
                {cards.map((item, i) => (
                    <Transition
                        as='div'
                        key={i}
                        show={i < visibleCards}
                        enter='transition-opacity duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        className='w-full flex flex-col gap-3'
                    >
                        <div className='w-full   flesx flex-grow '>
                            <img src={item.image} alt="blog-images" className='w-full' />
                        </div>
                        <div className=' h-full  flex flex-col justify-between sm:gap-4 gap-3  items-baseline justify-items-stretch'>
                            <div className=' flex flex-col gap-3 '>
                                <div className='flex gap-3 items-center'>
                                    <span className='flex gap-2 items-center justify-center  ' >
                                        <img src={cal} alt="" className='w-5 h-5' />
                                        <p className='text-sm text-[#8C89A2]'>
                                            {item.date}
                                        </p>
                                    </span>
                                    <span className='flex gap-2 items-center justify-center  ' >
                                        <img src={eye} alt="" className='w-5 h-4' />
                                        <p className='text-sm text-[#8C89A2]'>
                                            {item.views}
                                        </p>
                                    </span>
                                </div>
                                <div className='w-full'>
                                    <h6 className=' lg:text-2xl   text-lg font-bold font-albert'>
                                        {item.heading}
                                    </h6>
                                </div>
                            </div>
                            <div className='sm:hidden w-full'>
                                <button className='border-[2px] w-full rounded-3xl border-[#EE2A2E] py-2 sm:px-6 px-6 text-[#EE2A2E] font-albert font-bold sm:text-base text-sm '>
                                    Read More
                                </button>
                            </div>
                            <div className=' sm:flex hidden '>
                                <button className='border-[2px]  rounded-3xl border-[#EE2A2E] py-2 sm:px-6 px-6 text-[#EE2A2E] font-albert font-bold sm:text-base text-sm '>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </Transition>
                ))}
            </div>
            {
                showButton ? (
                    <div className='w-full flex justify-center items-center sm:mt-16 mt-10'>
                        <button
                            className='bg-[#EE2A2E] rounded-3xl py-2 px-6 text-white font-albert font-bold text-sm duration-300'
                            onClick={LoadMoreProducts}
                        >
                            Load More
                        </button>
                    </div>
                ) : (<div className='w-full flex justify-center items-center mt-10'>
                    <button
                        className='bg-[#EE2A2E] rounded-3xl py-2 px-6 text-white font-albert font-bold text-sm duration-300'
                        onClick={ShowLessProducts}
                    >
                        Show Less
                    </button>
                </div>)
            }
        </MaxWidthWrapper >
    );
}

export default BlogCards;
