import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CoverComponent from '../../../components/coverComponent';
import hero from "../images/blogHero.png";
import axios from 'axios';
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Heading from '../../resuable/Heading';
function BlogDetails() {

    const [isLoading, setIsLoading] = useState(true);
    const [blogDetails, setBlogDetails] = useState({});
    const { blogName } = useParams();
    let nameWithSpaces = blogName.replace(/-/g, " ");
    useEffect(() => {
        const url = `https://sharifstone-backend.vercel.app/api/blog/`;
        axios.get(url)
            .then((res) => {
                const filteredBlog = res.data.data.find(blog => blog.title === nameWithSpaces);
                setBlogDetails(filteredBlog);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
    }, []);
    return (
        <div>
            <CoverComponent
                imageDesktop={hero}
                imageMobile={hero}
                label={["BLOGS"]}
            />
            <MaxWidthWrapper className={'max-w-screen-xl'}>
                {isLoading ? (
                    <div className="flex justify-center items-center h-screen">
                        <p className="text-xl font-bold">Loading...</p>
                    </div>
                ) : (
                    <div className='flex flex-col md:gap-y-10 gap-y-8' >
                        <div
                            className='   bg-cover bg-center  bg-no-repeat h-[40vh] items-center flex justify-center px-4'
                            style={{ backgroundImage: `url(${`https://drive.google.com/thumbnail?id=${blogDetails.bannerImage}&sz=w1000`})` }}

                        >
                            <div className='py-20 text-white text-center items-center flex justify-center  '>
                                <Heading className='text-white'>
                                    {blogDetails.title}
                                </Heading>
                            </div>

                        </div>

                        <div className='flex flex-col gap-4'>
                            <Heading>
                                {blogDetails.headingOne}
                            </Heading>
                            <p className="xs:text-lg text-sm font-normal font-albert ">
                                {blogDetails.paragraphOne}
                            </p>
                        </div>
                        <div className='w-full'>
                            <img src={`https://drive.google.com/thumbnail?id=${blogDetails.imageOne}&sz=w1000`} alt={blogDetails.title} className='md:h-full h-[30vh] w-full' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Heading>
                                {blogDetails.headingTwo}
                            </Heading>
                            <p className="xs:text-lg text-sm font-normal font-albert ">
                                {blogDetails.paragraphTwo}
                            </p>
                        </div>
                        <div>
                            <img src={`https://drive.google.com/thumbnail?id=${blogDetails.imageTwo}&sz=w1000`} alt={blogDetails.title} className='md:h-full h-[30vh] w-full' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Heading>
                                {blogDetails.headingThree}
                            </Heading>
                            <p className="xs:text-lg text-sm font-normal font-albert ">
                                {blogDetails.paragraphThree}
                            </p>
                        </div>
                    </div>
                )}
            </MaxWidthWrapper>

        </div>
    )
}

export default BlogDetails
