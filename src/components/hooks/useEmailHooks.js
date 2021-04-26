import { useState } from "react";
import { isEmail } from "validator";



function useEmailHooks() {
    const [email, setEmail] = useState("");
    const [isEmailError, setIsEmailError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isEmailOnBlur, setIsEmailOnBlur] = useState(false)

    function handleEmailOnChange(e) {
        let emailInputValue = e.target.value;
        setEmail(emailInputValue);
        if (isEmail(emailInputValue)) {
            setIsEmailError(false);
            setErrorMessage("");
        } else {
            setIsEmailError(true);
            setErrorMessage("Please enter a valid email");
        }
    }
    function handleEmailOnBlur() {
        setIsEmailOnBlur(true)
        if (email.length === 0) {
            setIsEmailError(true)
            setErrorMessage("Email cannot be empty")
        } else {
            setIsEmailError(false)
            setErrorMessage("")
        }
    }

    return [email, handleEmailOnChange, isEmailError, errorMessage, isEmailOnBlur, handleEmailOnBlur];
}



export default useEmailHooks;
