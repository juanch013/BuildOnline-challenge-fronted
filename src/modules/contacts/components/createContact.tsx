
import InputField from "@/components/inputField"
import { ChangeEvent, useState } from "react"

const CreateContactForm: React.FC = (contact) => {
    const [email,setEmail] = useState("");
    const [adress,setAdress] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [name,setName] = useState("");

    const handleSubmit = () => {

    }

    return (
        <>
            <div className="flex flex-col w-full bg-black pt-56 px-10 h-full flex-wrap justify-start">
                <div className='flex fex-row justify-between mb-10'>
                    <p className='text-white text-4xl font-bold red-hat-font'>Create New Contact</p>
                </div>
                <form  onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full min-h-fit h-full justify-between items-center bg-contact_bg rounded-3xl w-full w-8/12 pb-14">
                        <div className='flex flex-wrap flex-row items-center w-full'>
                            <div className="flex flex-col w-1/2 h-full justify-start items-left p-8">
                                <p className="text-white text-lg red-hat-font font-medium">Name</p>
                                <InputField 
                                    id={"Name"} 
                                    name={"Name"} 
                                    type={"Name"}
                                    placeholder={"Name"}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    className="mb-6 bg-white"/>
                                <p className="text-white text-lg red-hat-font font-medium">Phone number</p>
                                <InputField 
                                    id={"Phone number"} 
                                    name={"Phone number"} 
                                    type={"Phone number"}
                                    placeholder={"Phone number"}
                                    onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                    className="mb-6 bg-white"/>
                        </div>
                            <div className="flex flex-col w-1/2 h-full justify-start items-left p-8">
                                <p className="text-white text-lg red-hat-font font-medium">Adress</p>
                                <InputField 
                                    id={"Adress"} 
                                    name={"Adress"} 
                                    type={"Adress"}
                                    placeholder={"Adress"}
                                    onChange={(e)=>{setAdress(e.target.value)}}
                                    className="mb-6 bg-white"/>
                                <p className="text-white text-lg red-hat-font font-medium">Email</p>
                                <InputField 
                                    id={"Email"} 
                                    name={"Email"} 
                                    type={"Email"}
                                    placeholder={"Email"}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    className="mb-6 bg-white"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-center items-center">
                            <button type="submit" className="inter-font font-medium mr-6 bg-green_bo rounded-full w-24 h-8">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateContactForm