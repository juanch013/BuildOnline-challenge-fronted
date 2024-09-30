import React from 'react';

function myOnChange (
    event: React.ChangeEvent<HTMLInputElement>,
    customFunc: (event: React.ChangeEvent<HTMLInputElement>) => void,
    formik: any 
  ){
    formik.handleChange(event);
    customFunc(event);
};

export default myOnChange;