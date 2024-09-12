import React from 'react';
import notes from '../models/note';
import {useRouter} from  'next/router'

interface ContactCardProps {
  contact: {
    id: string;
    name: string;
    email: string;
    note:notes[]
  };
  imagePath: string;
  arrowImagePath: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, imagePath, arrowImagePath }) => {
    const router = useRouter();

    const handleArrowClick = () => {
        router.push({
          pathname: '/contactDetail',
          query: { id: contact.id },
        });
      };

  return (
    <div 
      key={contact.id} 
      className="flex flex-row bg-contact_bg p-4 contact-rounded justify-between items-center"
    >
      <div className="flex flex-row items-center w-full">
        <img 
          src={imagePath} 
          alt={`${contact.name}'s avatar`} 
          className="w-16 h-16 rounded-full object-cover mr-4" 
        />
        <div className="ml-3">
          <p className="text-xl font-medium text-white red-hat-font">{contact.name}</p>
          <p className="text-xs text-white">{contact.note[0].note}</p>
        </div>
      </div>
      <img 
        className="h-5" 
        src={arrowImagePath} 
        alt="Arrow icon"
        onClick={handleArrowClick}
      />
    </div>
  );
};

export default ContactCard;
