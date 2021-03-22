import React, {Component} from "react";
import {v4 as uuidv4} from "uuid";
import style from "./ContactForm.module.css";

export default class ContactForm extends Component {
    state = {
        name: "",
        number: ""
    };

    onHandleSubmit = (e) => {
        const {name, number} = this.state;
        e.preventDefault();
        this.props.submitContact({
            name: name,
            number: number,
            id: uuidv4()
        });
        this.setState({
            name: "",
            number: ""
        });
    };

    onHandleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {name, number} = this.state;
        return (
            <form onSubmit={this.onHandleSubmit} className={style.form}>
                <div>
                    <label className={style.label}>
                        Name
                        <input
                            className={style.input}
                            placeholder="Enter your name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={this.onHandleChange}
                        />
                    </label>
                </div>
                <div>
                    <label className={style.label}>
                        Number
                        (xxx-xx-xx)
                        <input
                            className={style.input}
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                            placeholder="Enter your phone number in this format"
                            name="number"
                            value={number}
                            onChange={this.onHandleChange}
                        />
                    </label>
                </div>
                <div>
                    <button className={style.button} type="submit">Add contact</button>
                </div>
            </form>
        );
    }
}

