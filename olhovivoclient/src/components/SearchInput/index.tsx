/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-indent */

import React, { InputHTMLAttributes, FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import './styles.css';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    placeholder: string;
    searchSubmit: () => void;
    buttonText?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
    label,
    name,
    placeholder,
    searchSubmit,
    buttonText,
    ...inputProps
}) => {
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        searchSubmit();
    }

    return (
        <div className="search-group">
            <fieldset>
                <label htmlFor={name}>{label}</label>

                <input
                    type="text"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    {...inputProps}
                />
            </fieldset>

            <button type="submit" onClick={handleSubmit}>
                {buttonText || (
                    <>
                        <FiSearch />
                        Buscar
                    </>
                )}
            </button>
        </div>
    );
};

export default SearchInput;
