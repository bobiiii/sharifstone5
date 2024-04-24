import React from 'react'
import Button from '../Screens/resuable/Button';
import { Link } from 'react-router-dom/dist';

function PageNotFound() {
    return (
        <div className='flex flex-col gap-3 justify-center items-center text-center pt-28 h-screen'>
            <h1 className='text-xl font-semibold text-black'>
                Page Not Found
            </h1>
            <Link to={'/'}>
                <Button>
                    Return to Home
                </Button>
            </Link>
        </div>
    )
}

export default PageNotFound;
