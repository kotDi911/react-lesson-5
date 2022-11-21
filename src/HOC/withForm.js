import React, {Component} from "react";

const Input = ({placeholder, name, value, error, onChange}) => {
    return (
        <div className="input__container">
            <label className="input__label" htmlFor={name}>Number</label>
            <input
                className="input__input"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            {/*{error === "" && <span>{error}</span>}*/}
        </div>
    )
}

export const withForm = (WrappedComponent) => {
    return class extends Component {
        state = {
            id: 0,
            number: "",
            cvv: "",
            user: "",
            card: "mastercard",
            error: ""
        }
        inputTools = [
            {
                id: 1,
                placeholder: '0000000000000000',
                name: 'number',
                value: this.state.number,
                error: "Enter correct data"
            },
            {
                id: 2,
                placeholder: '123',
                name: 'cvv',
                value: this.state.cvv,
                error: "Enter correct data"
            },
            {
                id: 3,
                placeholder: 'John Snow',
                name: 'user',
                value: this.state.user,
                error: "Enter correct data"
            }
        ]

        componentDidUpdate(prevProps, prevState, snapshot) {
            console.log(prevState)
        }


        onSubmit(e) {
            e.preventDefault();
            // const reg = /[A-z]{3}/;
            // const regNumber = /^\d{16}/;
            // let name = this.state.name;
            // let number = this.state.number;
            //
            // if(regNumber.test(number) && number.length === 16){
            //     console.log(number)
            // }else {
            //     this.setState({error : 'С твоими данными что то не так ;('});
            // }
            // if (reg.test(name) && regNumber.test(number)) {
            //     this.setState({
            //         number: "",
            //         cvv: "",
            //         user: "",
            //         card: "",
            //         error: ""
            //     });
            //     alert(` Добро пожаловать - ${name} ${number}`)
            // } else {
            //     this.setState({error: 'С твоими данными что то не так ;('});
            // }
            console.log(this.state)
        };

        changeValue = (event) => {
            console.log(event.target.name)
            this.setState({
                [event.target.name]: event.target.value,
            })
        };

        render() {
            return (
                <div>
                    <WrappedComponent {...this.state}/>
                    <form onSubmit={this.onSubmit.bind(this)} className='form'>
                        {this.inputTools.map((item) => <Input key={item.id} {...item} onChange={e=> this.setState({
                            [e.target.name]: e.target.value,
                        })}/>)}
                        <div className="input__container">
                            <label className="input__label" htmlFor="number">Number</label>
                            <input
                                className="input__input"
                                placeholder="0000000000000000"
                                name="number"
                                value={this.state.number}
                                onChange={this.changeValue}
                            />
                            {/*{error === "" && <span>{error}</span>}*/}
                        </div>
                        <div className="input__container">
                            <label className="input__label" htmlFor="card">VISA or MASTERCARD</label>
                            <select className="input__input" name="card" value={this.state.card} onChange={this.changeValue.bind(this)}>
                                <option value="mastercard">MASTERCARD</option>
                                <option value="visa">VISA</option>
                            </select>
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            )
        }
    }
}