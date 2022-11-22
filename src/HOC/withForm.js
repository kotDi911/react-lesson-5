import React, {Component} from "react";
import Input from "../components/Input";
import jsonData from "/src/data.json"

export let data = [];

export const withForm = (WrappedComponent) => {
    return class extends Component {
        state = {
            id: 0,
            number: "",
            cvv: "",
            user: "",
            card: "mastercard",
            error: {
                number: false,
                cvv: false,
                user: false,
            }
        }
        inputTools = [
            {
                id: 1,
                type: (e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                    }
                },
                label: "Number",
                placeholder: "0000000000000000",
                name: "number",
                errorText: "Enter correct data"
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
                name: "cvv",
                errorText: "Enter correct data"
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
                name: "user",
                errorText: "Enter correct data"
            }
        ]

        errCheck() {
            let error = false;
            let cvvErr;
            let userErr;
            let numberErr;

            const {user, number, cvv} = this.state

            if (number.length === 16) {
                numberErr = "";
                error = false;
            } else {
                numberErr = "Номер должен быть из 16-ти цифр";
                error = true;
            }

            if (user.length > 5) {
                userErr = "";
                error = false;
            } else {
                userErr = "С твоими данными что то не так ;(";
                error = true;
            }

            if (cvv.length === 3) {
                cvvErr = "";
                error = false;
            } else {
                cvvErr = "Номер должен быть из 3-х цифр";
                error = true;
            }

            this.setState({
                error: {
                    number: numberErr,
                    cvv: cvvErr,
                    user: userErr,
                }
            });
            return error
        }

        onSubmit(e) {
            e.preventDefault();
            //const {user, number, cvv, card} = this.state
            if (!this.errCheck()) {
                data = [...data, this.state]

            }
        };

        changeCheck(e, value) {
            if (e === "card") {
                return value;
            }
            if (e === "user") {
                return value.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            }
            return value;
        }

        changeValue(e) {

            this.setState({
                [e.target.name]: this.changeCheck(e.target.name, e.target.value)
            })
        };

        render() {
            return (
                <div>
                    <WrappedComponent {...this.state}/>
                    <form onSubmit={this.onSubmit.bind(this)} className="form">
                        {this.inputTools.map((item) =>
                            <Input key={item.id} {...item}
                                   error={this.state.error[item.name]}
                                   value={this.state[item.name]}
                                   onChange={this.changeValue.bind(this)}
                            />
                        )}
                        <div className="input__container">
                            <label className="input__label" htmlFor="card">VISA or MASTERCARD</label>
                            <select className="input__input" name="card" value={this.state.card}
                                    onChange={this.changeValue.bind(this)}>
                                <option value="mastercard">MASTERCARD</option>
                                <option value="visa">VISA</option>
                            </select>
                        </div>
                        <button className="submitBtn" type='submit'>Submit</button>
                    </form>
                </div>
            )
        }
    }
}