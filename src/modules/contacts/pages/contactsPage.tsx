import React from 'react';
import ContactList from '../components/contactsList';
import Navbar from '@/components/navbar';

const ContactsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
        <Navbar/>
        <ContactList />
    </div>
  );
};

export default ContactsPage;