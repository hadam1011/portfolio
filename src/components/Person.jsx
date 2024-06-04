import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

const Person = () => {
  return (
    <div id='person' className='max-w-[1040px] md:pl-20 m-auto p-4 py-16'>
        <h1 className='text-4xl mb-8 font-bold text-center text-[#001b5e]'>Person</h1>
        <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
            <img
                src='https://res.cloudinary.com/dmllqeqdn/image/upload/v1700903772/5703dcbc998b5cd5059a.jpg'
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
                <img src='https://res.cloudinary.com/dmllqeqdn/image/upload/v1717485053/B20DCCN211.jpg'
                className='max-w-[50%] max-h-[200px]    '
                />
                <span>11/09/2022 - 11/09/2024</span>
            </div>
        </div>
        <div>
            <div className='font-bold text-gray-600 mt-4 mb-2'>Front-end</div>
            <ul className='list-disc list-inside'>
                <li>HTML/CSS, TailwindCss, Ant Design, Javascript, MUI</li>
                <li>ReactJs, Redux</li>
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
