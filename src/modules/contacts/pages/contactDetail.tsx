import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/router';
import { useContactContext } from '../context/contactsContext';
import Contact from '../models/contact';
import ContactDetailCard from '../components/contactDetail';

const ContactDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { contacts } = useContactContext();

    const [contact, setContact] = useState<Contact>();


    useEffect(() => {
        if (id) {
            const contactFound = contacts.find((contact) => contact.id === id);        

            if (contactFound === undefined) {
                router.push('/contactList');
                return;
            }

            setContact(contactFound);
        }
    }, [id, contacts,router]);

    if (!contact) return <p>Cargando detalles del contacto...</p>;

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full">
            <Navbar />
            <ContactDetailCard {...contact}/>
        </div>
    );
};

export default ContactDetail;