import Navbar from "@/components/navbar";
import CreateContactForm from "../components/createContact";

const ContactsPage = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-fit h-screen w-full">
          <Navbar/>
          <CreateContactForm />
      </div>
    );
  };
  
  export default ContactsPage;