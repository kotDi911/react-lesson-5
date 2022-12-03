import React from "react";

const Input = ({placeholder, name, value, error, errorText, type, label, onChange}) => {
    return (
        <div className="input__container">
            <label className="input__label" htmlFor={name}>{label}</label>
            <input
                onKeyPress={type}
                className="input__input"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error !== "" && <span className="input__err">{errorText}</span>}
        </div>
    )
}
export default Input