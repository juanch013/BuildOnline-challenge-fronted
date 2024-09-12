import { useEffect } from 'react';
import { useContactContext } from '../context/contactsContext';
import { useRouter } from 'next/router';

export const useFetchContacts = () => {
    const { contacts, setContacts } = useContactContext();
    const router = useRouter()

    useEffect(() => {
        const fetchContacts = async () => {
            if (contacts.length === 0) {
                const token = localStorage.getItem('token');
                try {
                    const response = await fetch('http://localhost:3000/api/contacts', {
                        headers: {
                            "Authorization": String(token),
                            "Content-Type": "application/json",
                        }
                    });

                    if (response.status === 403) {
                        setContacts([])
                        router.push('/login')
                        return;
                    }
                    
                    const data = await response.json();

                    if (response.status !== 200) {
                        setContacts([])
                    } else {
                        setContacts(data.data);
                    }
                } catch (error) {
                    console.error('Error al cargar contactos:', error);
                }
            }
        };
        fetchContacts();
    }, [contacts, setContacts]);
};
