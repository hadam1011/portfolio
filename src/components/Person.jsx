import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

const Person = () => {
  return (
    <div id='person' className='max-w-[1040px] md:pl-20 m-auto p-4 py-16'>
        <h1 className='text-4xl mb-8 font-bold text-center text-[#001b5e]'>Person</h1>
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
            <img
                src='https://scontent.xx.fbcdn.net/v/t1.15752-9/362683693_940632827002244_8748222126597719218_n.jpg?stp=dst-jpg_s403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=N5ZyC87_XcoAX8Md_lp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSPQajikx2zo7T0ri0_f6Uxgr34EzQGt5v1b-JPDiNnFQ&oe=64E46DCA'
                className='max-h-[300px] max-w-[250px]'
            />
            <div className='w-full flex flex-col'>
                {/* Contact */}
                <div className='w-full flex gap-4 pb-2'>
                    <h1 className='whitespace-nowrap text-1xl font-bold text-gray-600'>Contact</h1>
                    <span className='w-full h-0.5 mt-3 bg-[#001b5e]' />
                </div>
                <div>
                    <div className='flex gap-4'>
                        <AiOutlinePhone
                            size={17}
                            style={{marginTop: '0.3rem'}} 
                        />      
                        <span>0819133189</span>
                    </div>
                    <div className='flex gap-4'>
                        <AiOutlineMail
                        size={17}
                        style={{marginTop: '0.3rem'}} 
                        />      
                        <span>hadam8910@gmail.com</span>
                    </div>
                    <div className='flex gap-4'>
                        <FaFacebook
                        size={17}
                        style={{marginTop: '0.3rem'}} 
                        />      
                        <a href='https://www.facebook.com/ha.dam.9638'>https://www.facebook.com/ha.dam.9638</a>
                    </div>
                    <div className='flex gap-4'>
                        <AiOutlineGithub
                        size={17}
                        style={{marginTop: '0.3rem'}} 
                        />      
                        <a href='https://github.com/hadam1011'>https://github.com/hadam1011</a>
                    </div>
                </div>
                {/* Education */}
                <div className='w-full flex gap-4 pt-6 pb-2'>
                    <h1 className='whitespace-nowrap text-1xl font-bold text-gray-600'>Education</h1>
                    <span className='w-full h-0.5 mt-3 bg-[#001b5e]' />
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div className='font-bold text-gray-600'>
                        Posts and Telecommunications Institute of Technology (PTIT) 
                    </div>
                    <span>08/2020 - now</span>
                    <div>Major: Software engineering</div>
                </div>
            </div>
        </div>
        {/* Skills */}
        <div className='w-full flex gap-4 pt-6 pb-2'>
            <h1 className='whitespace-nowrap text-1xl font-bold text-gray-600'>Skills</h1>
            <span className='w-full h-0.5 mt-3 bg-[#001b5e]' />
        </div>
        <div>
            <div className='font-bold text-gray-600 mb-2'>English (TOEIC)</div>
            <div className='flex justify-between flex-wrap'>
                <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/361971570_263578496372103_5508331819709074151_n.jpg?stp=dst-jpg_p403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=iPzf1jKcBl0AX-9O3LR&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ69mtE5xaULaMrx_fsh4lKwtOGNiaLr-ix-6HLTRJ5Jw&oe=64E47B99'
                className='max-w-[50%] max-h-[200px]    '
                />
                <span>11/09/2022 - 11/09/2024</span>
            </div>
        </div>
        <div>
            <div className='font-bold text-gray-600 mt-4 mb-2'>Front-end</div>
            <ul className='list-disc list-inside'>
                <li>HTML/CSS, TailwindCss, Ant Design, Javascript</li>
                <li>ReactJs</li>
            </ul>  
        </div>
        <div>
            <div className='font-bold text-gray-600 mt-4 mb-2'>Back-end</div>
            <ul className='list-disc list-inside'>
                <li>Java</li>
                <li>Spring boot</li>
            </ul>  
        </div>
    </div>
  )
}

export default Person;