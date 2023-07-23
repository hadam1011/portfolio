import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] md:pl-20 m-auto p-4 py-16'>
        <h1 className='text-4xl mb-8 font-bold text-center text-[#001b5e]'>Projects</h1>
        <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItem
            img={'https://macmillaneducationbookstore.com/wp-content/uploads/2019/06/online-bookstore.jpg'}
            title={'Online Bookstore'}
            demo={'https://fe-btl-web.vercel.app'}
          />
          <ProjectItem
            img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHp5uN0J9SkJHi2cFJYlp0snvpu9lV4m_XA&usqp=CAU'}
            title={'Portfolio'}
            demo={'/'}
          />
        </div>
    </div>
  )
}

export default Projects;