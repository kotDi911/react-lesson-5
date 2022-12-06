import React, {Component} from "react";
import Form from "../components/form/Form";
import CardFront from "../components/cardSettings/CardFront";
import {Navigate} from "react-router-dom";

class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            numberVisible: false,
            number: "",
            cvv: "",
            user: "",
            card: "mastercard",
            stats: [],
            date: new Date().toLocaleDateString("en-US"),
            onSubmit: this.onSubmit.bind(this),
            onChange: this.changeValue.bind(this),
            error: true,
            errorText: {
                number: true,
                cvv: true,
                user: true,
            }
        }
        this.number = "";
        this.submit = false;
    }

    idUpdate(){
        if(this.state.id !== this.props.id){
            this.setState({id: this.props.id})
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       this.idUpdate();
    }

    errCheck() {
        let cvvErr;
        let userErr;
        let numberErr;
        const reg = /^\w{3,}(?: \w+){0,2}$/

        const {user, number, cvv} = this.state

        if (number.length === 13 || number.length === 16) {
            numberErr = "";
        } else {
            numberErr = "Номер должен быть из 13-ти или 16-ти цифр";
        }

        if (reg.test(user)) {
            userErr = "";
        } else {
            userErr = "С твоими данными что то не так";
        }

        if (cvv.length === 3) {
            cvvErr = "";
        } else {
            cvvErr = "Номер должен быть из 3-х цифр";
        }

        if (numberErr === "" && userErr === "" && cvvErr === "") {
            this.setState({
                error: false,
                errorText: {
                    number: numberErr,
                    cvv: cvvErr,
                    user: userErr,
                }
            })
            return false;
        } else {
            this.setState({
                error: true,
                errorText: {
                    number: numberErr,
                    cvv: cvvErr,
                    user: userErr,
                }
            });
            return true;
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const {addCard} = this.props
        if (!this.errCheck()) {
            addCard(this.state)
            this.submit = true;
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
        if (e.target.name === "number") {
            this.number = e.target.value.match(new RegExp('.{1,4}', 'g')).join(" ")
        }
    };

    render() {
        const {card, user} = this.state
        return (
            <>
                <div className="card">
                    <CardFront number={this.number} card={card} user={user}/>
                </div>
                <Form {...this.state}/>
                {this.submit && <Navigate to="/"/>}
            </>
        )
    }
}

export default CreateCard