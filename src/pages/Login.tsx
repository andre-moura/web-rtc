import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface LoginForm {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [loginForm, setLoginForm] = useState<LoginForm>({
        username: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform login logic using loginForm.username and loginForm.password
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Username"
                    type="text"
                    id="username"
                    name="username"
                    value={loginForm.username}
                    onChange={handleInputChange}
                />
                <Input
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleInputChange}
                />
                <Button type="submit">Login</Button>
            </form>
        </>
    );
};

export default Login;