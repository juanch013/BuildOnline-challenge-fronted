import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Contact {
    id: string;
    name: string;
    email: string;
    phoneNumber: string,
}

interface ContactContextType {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const useContactContext = (): ContactContextType => {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error('useContactContext debe ser usado dentro de un ContactProvider');
  }
  return context;
};

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <ContactContext.Provider value={{ contacts, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};