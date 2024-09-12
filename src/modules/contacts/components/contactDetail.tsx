import React from 'react';
import Contact from '../models/contact';

const ContactDetailCard: React.FC<Contact> = (contact) => {

    // const imagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}${contact.name}.${contact.imageFormat}`

    const imagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}${contact.name}.jpg`

  return (
    <div 
      key={contact.id} 
      className="flex flex-col bg-black p-4 w-full h-screen justify-center items-center"
    >
        <div className='fex flex-col bg-slate-700 p-20 rounded-3xl'>
            <img 
                className=" h-44 w-44 rounded-full object-cover border" 
                src={imagePath} 
                alt="Arrow icon" 
            />
            <h1 className='text-white'>{contact.name}</h1>
            <h3 className='text white'>Phone</h3>
            <p className='text-white'>{contact.phoneNumber}</p>
            <h3>Email</h3>
            <p className='text-white'>{contact.email}</p>


        </div>

       
     
    </div>
  );
};

export default ContactDetailCard;
