import React from 'react';

function PasswordCreator(props) {

    const [password, setPassword] = React.useState('');

    const passwordgenerator = () =>{
        const len = 12
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let newPassword = "";
        for (let i = 0; i < len; i++) {
        newPassword += charset.charAt(Math.floor(Math.random() * charset.length));}
        setPassword(newPassword);}

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() =>alert("password copied to clipboard"));

    }
        return (
        <div>
            <button onClick={passwordgenerator}>pass word generator</button>
            <h1>{password}</h1>
            <button onClick={copyToClipboard}>copy</button>
        </div>
    );
}

export default PasswordCreator;