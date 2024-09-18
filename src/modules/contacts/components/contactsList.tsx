import React, { useEffect, useState } from 'react';
import { useContactContext } from '../context/contactsContext';
import { useFetchContacts } from '../hooks/useFetchContacts';
import ContactCard from './contactCard';
import dotenv from 'dotenv'
import InputField from '@/components/inputField';
dotenv.config()
import { useRouter } from 'next/router';

const ContactList: React.FC = () => {
    useFetchContacts();
    const { contacts } = useContactContext();
    const [contactSearch, setContactSearch] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(contacts);
    const router = useRouter()

    useEffect(() => {
        if (contactSearch === '') {
          setFilteredContacts(contacts);
        } else {
          setFilteredContacts(
            contacts.filter((contact) =>
              contact.name.toLowerCase().startsWith(contactSearch.toLowerCase())
            )
          );
        }
      }, [contactSearch, contacts]);

      const handleNewContactClick = () => {
        router.push({
          pathname: '/createContact',
        });
      }

    const arrowImagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}arrow-icon.png`
    return (
        <div className="flex flex-col w-full bg-black pt-56 px-10 h-full">
            <div className='flex fex-row justify-between mb-10'>
                <p className='text-white text-4xl font-bold red-hat-font'>Contacts</p>
                <button onClick={handleNewContactClick} className='inter-font font-medium mr-6 bg-green_bo rounded-full w-44 h-14'>Add New</button>
            </div>

            <InputField
            id="searchContact"
            name='searchContact'
            placeholder='Search contacts...'
            type='searchContact'
            onChange={(e)=>setContactSearch(e.target.value)}
            className='mb-10 h-12'
            />

            {filteredContacts.length === 0 ? (
                <></>
            ) : (
                <div className="grid grid-cols-2 gap-4">
                {filteredContacts.map((contact) => {
                    const imagePath = `${process.env.NEXT_PUBLIC_IMAGES_PATH}${contact.name}.jpg`
                    return <ContactCard 
                    key={contact.id} 
                    contact={contact} 
                    imagePath={imagePath} 
                    arrowImagePath={arrowImagePath} 
                    />
                })}
                </div>
            )}
        </div>
    );
};

export default ContactList;
