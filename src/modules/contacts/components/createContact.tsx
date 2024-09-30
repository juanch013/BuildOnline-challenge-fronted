
import InputField from "@/components/inputField"
import { ErrorMessage, Formik } from "formik";
import { ChangeEvent, useState } from "react"
import contactValidation from "../validation/contact";
import myOnChange from "../helpers/myOnChange"

const CreateContactForm: React.FC = (contact) => {
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = () => {
        console.log("handle submit")
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    return (
        <>
            <div className="flex flex-col w-full bg-black pt-56 px-10 h-full flex-wrap justify-start">
                <div className='flex fex-row justify-between mb-10'>
                    <p className='text-white text-4xl font-bold red-hat-font'>Create New Contact</p>
                </div>
                <Formik
                    initialValues={{ Name: '', PhoneNumber: '', Email: '', Adress: '' }}
                    validationSchema={contactValidation}
                    onSubmit={handleSubmit}
                >
                    {(formik) => (
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full min-h-fit h-full justify-between items-center bg-contact_bg rounded-3xl w-full w-8/12 pb-14">
                                <div className='flex flex-wrap flex-row items-center w-full'>
                                    <div className="flex flex-col w-1/2 h-full justify-start items-left p-8">
                                        <div>
                                            <p className="text-white text-lg red-hat-font font-medium">Name</p>
                                            <InputField
                                                id={"Name"}
                                                name={"Name"}
                                                type={"Name"}
                                                placeholder={"Name"}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Name}
                                                onChange={(e) => { myOnChange(e, handleOnChange, formik) }}
                                                className="mb-6 bg-white" />
                                            <ErrorMessage name="Name" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-white text-lg red-hat-font font-medium">Phone number</p>
                                            <InputField
                                                id={"PhoneNumber"}
                                                name={"PhoneNumber"}
                                                type={"PhoneNumber"}
                                                placeholder={"Phone number"}
                                                onChange={(e) => { myOnChange(e, handleOnChange, formik) }}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.PhoneNumber}
                                                className="mb-6 bg-white" />
                                            <ErrorMessage name="PhoneNumber" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-1/2 h-full justify-start items-left p-8">
                                        <div>
                                            <p className="text-white text-lg red-hat-font font-medium">Adress</p>
                                            <InputField
                                                id={"Adress"}
                                                name={"Adress"}
                                                type={"Adress"}
                                                placeholder={"Adress"}
                                                onChange={(e) => { myOnChange(e, handleOnChange, formik) }}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Adress}
                                                className="mb-6 bg-white" />
                                            <ErrorMessage name="Adress" component="div" className="text-red-500 text-sm" />
                                        </div>
                                        <div>
                                            <p className="text-white text-lg red-hat-font font-medium">Email</p>
                                            <InputField
                                                id={"Email"}
                                                name={"Email"}
                                                type={"Email"}
                                                placeholder={"Email"}
                                                onChange={(e) => { myOnChange(e, handleOnChange, formik) }}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.Email}
                                                className="mb-6 bg-white" />
                                            <ErrorMessage name="Email" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-center items-center">
                                    <button type="submit" className="inter-font font-medium mr-6 bg-green_bo rounded-full w-24 h-8">Save</button>
                                </div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default CreateContactForm