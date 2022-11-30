import React, {Component} from "react";
import {withCard} from "../../HOC/withCard";
import Form from "../form/Form";
import CardFront from "../cardSettings/CardFront";

class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            numberVisible: false,
            number: "",
            cvv: "",
            user: "",
            card: "mastercard",
            stats: [],
            date: new Date().toLocaleDateString("en-US"),
            onSubmit: this.onSubmit.bind(this),
            onChange: this.changeValue.bind(this),
            error: {
                number: false,
                cvv: false,
                user: false,
            }
        }
        this.number = "";
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
            userErr = "С твоими данными что то не так ;(";
        }

        if (cvv.length === 3) {
            cvvErr = "";
        } else {
            cvvErr = "Номер должен быть из 3-х цифр";
        }

        this.setState({
            error: {
                number: numberErr,
                cvv: cvvErr,
                user: userErr,
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const {addCard} = this.props
        this.errCheck()
        if (this.state.error) {
            addCard(this.state)
            e.target.reset();
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
            [e.target.name]: this.changeCheck(e.target.name, e.target.value),
            id: Date.now()
        })
        if(e.target.name === "number"){
            this.number = e.target.value.match(new RegExp('.{1,4}', 'g')).join(" ")
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {setContent} = this.props
        setContent("/create")
    }

    render() {
        const {card, user} = this.state
        return (
            <>
                <div className="card">
                    <CardFront number={this.number} card={card} user={user}/>
                </div>
                <Form {...this.state}/>
            </>
        )
    }
}

export default withCard(CreateCard)