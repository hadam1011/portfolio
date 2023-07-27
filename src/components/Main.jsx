import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { AiOutlineGithub } from 'react-icons/ai';

const Main = () => {
  return (
    <div id='main'>
        <img
          className="w-full h-screen object-cover"
          src="https://vapa.vn/wp-content/uploads/2022/12/anh-nen-dep-cho-pc-001.jpg"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
          <div className="w-full h-full m-auto max-w-[700px] flex flex-col justify-center items-center lg:items-start">
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi I'm Đàm Hà</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            I'm a
            <TypeAnimation
              sequence={[
              'Front end developer',
              2000, 
              'Coder',
              2000,
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px'}}
              repeat={Infinity}
            /> 
          </h2>
          <div className='w-full max-w-[150px] pt-4 flex justify-between items-center'>
            <a href='https://twitter.com/home'>
              <FaTwitter className='cursor-pointer' size={20} />
            </a>
            <a href='https://www.facebook.com/ha.dam.9638'>
              <FaFacebook className='cursor-pointer' size={20} /> 
            </a>
            <a href='https://www.instagram.com/xfeex1011/'>
              <FaInstagram className='cursor-pointer' size={20} />  
            </a>
            <a href='https://github.com/hadam1011'>
              <AiOutlineGithub className='cursor-pointer' size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;