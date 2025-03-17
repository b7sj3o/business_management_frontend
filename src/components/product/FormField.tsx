import React from 'react';

interface FormFieldProps {
    label: string;
    name: string;
    placeholder: string;
    defaultValue?: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({label, name, placeholder, defaultValue, onChange}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input type='text' name={name} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange}/>
        </div>
    );
};

export default FormField;
