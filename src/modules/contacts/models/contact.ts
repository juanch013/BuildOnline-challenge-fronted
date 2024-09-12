import notes from "./note";


export default interface Contact {
    id: string;
    name: string;
    email: string;
    phoneNumber: string,
    note:notes[]
}