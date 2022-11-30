import React from "react";
import Input from "./Input";

const inputTools = [
    {
        id: 1,
        type: (e) => {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        },
        label: "Number",
        placeholder: "0000000000000000",
        name: "number"
    },
    {
        id: 2,
        type: (e) => {
            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        },
        label: "CVV",
        placeholder: "123",
        name: "cvv"
    },
    {
        id: 3,
        type: (e) => {
            if (!/[A-z\s]/.test(e.key)) {
                e.preventDefault();
            }
        },
        label: "Your fullname",
        placeholder: "John Snow",
        name: "user"
    }
]

const Form = (props) => {
    const {card, error, onSubmit, onChange} = props;

    return (
        <>
            <form onSubmit={onSubmit} className="form">
                {inputTools.map((item) =>
                    <Input key={item.id} {...item}
                           error={error[item.name]}
                           value={props[item.name]}
                           onChange={onChange}
                    />
                )}
                <div className="input__container">
                    <label className="input__label" htmlFor="card">VISA or MASTERCARD</label>
                    <select className="input__input" name="card" value={card}
                            onChange={onChange}>
                        <option value="mastercard">MASTERCARD</option>
                        <option value="visa">VISA</option>
                    </select>
                </div>
                <button className="submitBtn" type='submit'>Submit</button>
            </form>
        </>
    )
}

export default Form