import React, { useEffect, useState } from 'react';
import MaxWidthWrapper from '../../MaxWidthWrapper';
import eye from '../images/eye.png';
import cal from '../images/cal.png';
import { Transition } from '@headlessui/react';
import useAuth from "../../../hooks/useAuth";
import axios from 'axios';

function BlogCards() {
    const [visibleCards, setVisibleCards] = useState(6);
    const [showButton, setShowButton] = useState(true);
    const [isLoading, setIsLoading] = useState(true); // State for loading status
    const { blogs, setBlogs } = useAuth();

    useEffect(() => {
        const url = 'https://sharifstone-backend.vercel.app/api/blog/';
        axios.get(url)
            .then((res) => {
                console.log(res.data.data);
                setBlogs(res.data.data);
                setIsLoading(false); // Set loading to false when data is received
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false); // Set loading to false in case of error
            });
    }, []);

    const LoadMoreProducts = () => {
        setVisibleCards(blogs.length);
        setShowButton(false);
    };

    const ShowLessProducts = () => {
        setVisibleCards(6);
        setShowButton(true);
    };

    return (
        <MaxWidthWrapper>
            {isLoading ? ( // Check if data is loading
                <div className="flex justify-center items-center h-screen">
                    <p className="text-xl font-bold">Loading...</p>
                </div>
            ) : (
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 justify-center items-stretch'>
                    {blogs.map((item, i) => (
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
                            <div className='w-full   flex flex-grow '>
                                <img src={`https://drive.google.com/thumbnail?id=${item.imageRef}&sz=w1000`} alt="blog-images" className='w-full rounded-3xl' />
                            </div>
                            <div className=' h-full  flex flex-col justify-between sm:gap-4 gap-3  items-baseline justify-items-stretch'>
                                <div className=' flex flex-col gap-3 '>
                                    <div className='flex gap-3 items-center'>
                                        <span className='flex gap-2 items-center justify-center  ' >
                                            <img src={cal} alt="" className='w-5 h-5' />
                                            <p className='text-sm text-[#8C89A2]'>
                                                {item.date.split('T')[0]}
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
                                            {item.title}
                                        </h6>
                                    </div>
                                </div>
                                {
                                    visibleCards > 6 && (
                                        <>
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
                                        </>
                                    )
                                }
                            </div>
                        </Transition>
                    ))}
                </div>
            )}
            {blogs.length > 6 && (
                showButton ? (
                    <div className='w-full flex justify-center items-center sm:mt-16 mt-10'>
                        <button
                            className='bg-[#EE2A2E] rounded-3xl py-2 px-6 text-white font-albert font-bold text-sm duration-300'
                            onClick={LoadMoreProducts}
                        >
                            Load More
                        </button>
                    </div>
                ) : (
                    <div className='w-full flex justify-center items-center mt-10'>
                        <button
                            className='bg-[#EE2A2E] rounded-3xl py-2 px-6 text-white font-albert font-bold text-sm duration-300'
                            onClick={ShowLessProducts}
                        >
                            Show Less
                        </button>
                    </div>
                )
            )}
        </MaxWidthWrapper >
    );
}

export default BlogCards;
