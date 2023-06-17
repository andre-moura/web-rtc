import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link } from 'react-router-dom';


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
            <h2>Welcome to Peer Link</h2>
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
                <div>
                    <Link to="/">Forgort your password?</Link>
                </div>
                <Button type="submit">Login</Button>
                <div>
                    <Link to="/">Don't have an account?</Link>
                </div>
            </form>
        </>
    );
};

export default Login;