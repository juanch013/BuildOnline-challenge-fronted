import React from 'react';
import Contact from '../models/contact';

const ContactDetailCard: React.FC<Contact> = (contact) => {
    // const imagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}${contact.name}.${contact.imageFormat}`

    const imagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}${contact.name}.jpg`
    const editIcon = `${process.env.NEXT_PUBLIC_IMAGES_PATH}edit-icon.png`
    const uploadIcon = `${process.env.NEXT_PUBLIC_IMAGES_PATH}upload-icon.png`

    return (
      <div 
        key={contact.id}
        className="flex flex-col bg-black pt-44 w-full h-screen justify-center items-center"
      >
        <div className='flex flex-col items-center bg-contact_bg rounded-3xl mx-twenty-percent w-8/12 pb-12 mb-16'>
          <div className='flex flex-row items-center h-fit justify-end w-full pt-4'>
            <img className="w-6 m-2 mt-2" src={editIcon}/>
            <img className="w-6 m-2 mt-2 mr-6" src={uploadIcon}/>
          </div>
          <img 
              className="mb-10 h-36 w-36 rounded-full object-cover ring-4 ring-offset-4 ring-green_bo ring-offset-contact_bg" 
              src={imagePath}
          />
          <p className='text-white font-bold text-3xl mb-8 red-hat-font'>{contact.name}</p>
          <p className='text-white text-lg font-semibold mb-2 red-hat-font'>Adress</p>
          <p className='text-input_text_grey font-normal mb-2 public-sans-font'>expample2132</p>
          <p className='text-white text-lg font-semibold mb-2 red-hat-font mt-4'>Phone</p>
          <p className='text-input_text_grey mb-2 public-sans-font'>{contact.phoneNumber}</p>
          <p className='text-white text-lg font-semibold mb-2 red-hat-font mt-4'>Email</p>
          <p className='text-input_text_grey mb-2 public-sans-font'>{contact.email}</p>
        </div>
    </div>
  );
};

export default ContactDetailCard;
