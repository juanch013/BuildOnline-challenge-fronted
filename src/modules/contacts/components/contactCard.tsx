// /src/components/ContactCard.tsx
import React from 'react';

interface ContactCardProps {
  contact: {
    id: string;
    name: string;
    email: string;
  };
  imagePath: string;
  arrowImagePath: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, imagePath, arrowImagePath }) => {
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
          <p className="text-xs text-white">{contact.email}</p>
        </div>
      </div>
      <img 
        className="h-5" 
        src={arrowImagePath} 
        alt="Arrow icon" 
      />
    </div>
  );
};

export default ContactCard;
