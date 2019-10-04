import React, { useState } from "react";
import "./Form.css";

const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = props => {
    const [emailValid, setEmailValid] = useState(null);
    const [email, setEmail] = useState("");

    const inputChange = ({ target }) => {
        const { value } = target;
        setEmail(value);
        if (value) {
            setEmailValid(emailRegexp.test(value));
        } else {
            setEmailValid(null);
        }
    };

    return (
        <form className="resend-form plan__resend-form">
            <p className="text resend-form__text">
                Enter email if you wish to resend the meal plan link
            </p>
            <input
                type="email"
                className={`resend-form__field ${
                    emailValid === false
                        ? "invalid"
                        : emailValid === true
                        ? "valid"
                        : ""
                }`}
                placeholder="Email"
                value={email}
                onChange={inputChange}
            />
            <input
                type="submit"
                className="btn resend-form__btn"
                value="Resend"
            />
        </form>
    );
};

export default Form;
