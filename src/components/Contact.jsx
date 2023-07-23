import React from 'react';

const Contact = () => {
  return (
    <div
        id='contact'
        className='max-w-[1040px] m-auto md:pl-20 py-16 p-4'
    >   
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
            Contact      
        </h1>
        <form
            action='https://getform.io/f/688c01a9-265a-4bea-ac89-180516fc9ca3'
            method='POST'
            encType='multipart/form-data'
        >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='text-sm py-2'>Name</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        onInvalid={(e) => e.target.setCustomValidity('Enter name here')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        type='text'
                        name='name'
                        required
                    />     
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm py-2'>Phone</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        onInvalid={(e) => e.target.setCustomValidity('Enter phone number here')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        type='text'
                        name='phone'
                        required
                    />     
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm py-2'>Email</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        onInvalid={(e) => e.target.setCustomValidity('Enter email here')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        type='email'
                        name='email'
                        required
                    />     
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm py-2'>Title</label>
                    <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        onInvalid={(e) => e.target.setCustomValidity('Enter title here')}
                        onInput={(e) => e.target.setCustomValidity('')}
                        type='text'
                        name='title'
                        required
                    />     
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='text-sm py-2'>Message</label>
                <textarea
                    className='border-2 rounded-lg border-gray-300 flex p-3'
                    onInvalid={(e) => e.target.setCustomValidity('Enter message here')}
                    onInput={(e) => e.target.setCustomValidity('')}
                    rows='10'
                    name='message'
                    required
                >
                </textarea>    
            </div>
            <button className='bg-[#001b5e] text-gray-200 w-full p-3 mt-3 rounded-lg'>
                Send Message
            </button>
        </form>  
    </div>
  )
}

export default Contact;