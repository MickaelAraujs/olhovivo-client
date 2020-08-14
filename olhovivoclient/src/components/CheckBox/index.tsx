/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */

import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, label, ...inputProps }) => {
    return (
        <fieldset>
            <input type="checkbox" name={name} id={name} {...inputProps} />

            <label htmlFor={name}>{label}</label>
        </fieldset>
    );
};

export default CheckBox;
