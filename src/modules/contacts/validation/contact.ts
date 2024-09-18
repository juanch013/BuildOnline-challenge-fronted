import * as Yup from 'yup'

const contactValidation = Yup.object({
    Email: Yup.string()
        .email('This email in not valid')
        .required('Email cant be empty'),
    Name: Yup.string()
        .min(1, 'The name must have 1 character at least')
        .required('The name cant be empty'),
    Adress: Yup.string()
        .min(1, 'The address must have 4 characater at least')
        .required('The address cant be empty'),
    PhoneNumber: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/,"Phone number is not valid")
        .min(1, 'Phone Number must have 9 numbers at least')
        .required('The address cant be empty'),
  });