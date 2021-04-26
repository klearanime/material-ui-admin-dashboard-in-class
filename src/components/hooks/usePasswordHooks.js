import { useState } from "react";
import { isStrongPassword } from "validator";



function usePasswordHooks() {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const [passwordOnBlur, setPasswordOnBlur] = useState(false);

    function handlePasswordOnChange(e) {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        setPassword(inputValue);
        if (isStrongPassword(inputValue)) {
            setPasswordError(false);
            setErrorPasswordMessage("");
        } else {
            setPasswordError(true);
            setErrorPasswordMessage(
                `${inputName} must be minimum of 8 characters. 1 uppercase 1 lowercase and a special character`
            );
        }
    }

    function handlePasswordOnBlur() {
        setPasswordOnBlur(true)

        if (password.length === 0) {
            setPasswordError(true)
            setErrorPasswordMessage(`field cannot have be empty`)
        } else {
            setPasswordError(false)
            setErrorPasswordMessage("")
        }
    }

    return [
        password,
        handlePasswordOnChange,
        passwordError,
        errorPasswordMessage,
        passwordOnBlur,
        handlePasswordOnBlur,
    ];
}



export default usePasswordHooks;