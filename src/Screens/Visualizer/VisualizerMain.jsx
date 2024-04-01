import React from 'react'
import main from './images/main.jpg'
import coutertop from './images/coutertop.png'
import Logo from '../../assets/images/logo_footer.png';
import Button from '../resuable/Button';

function VisualizerMain() {
    return (
        <div className='h-screen flex '>
            <div className='w-[25%] h-full p-4 flex flex-col  gap-y-6'>
                <div className=' flex flex-col gap-y-6 '>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='flex gap-x-4'>
                        <Button
                            className={`px-10   
                                 bg-red-600 text-white
                                 `}
                        // clickFunc={() => handleCategorySelect('Kitchen')}
                        >
                            Colors
                        </Button>
                        <Button
                            className={`px-10   
                                 bg-white text-black border border-black
                                 `}
                        // clickFunc={() => handleCategorySelect('Kitchen')}
                        >
                            Ambients
                        </Button>
                    </div>
                    <div className='flex justify-center items-center flex-col '>
                        <h5 className='text-base font-light font-albert '>Countertop</h5>
                        <img src={coutertop} alt="" className='py-2 w-[60%] h-[130px]' />
                        <h5>Parisien Bleu</h5>
                    </div>
                </div>
                <div className='brb'>
                    cards
                </div>
            </div>
            <div className='w-[75%]  h-screen'>
                <img src={main} alt="main-image " className='h-screen w-full ' />
            </div>
        </div>

    )
}

export default VisualizerMain