import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

interface RegisterForm {
    email: string,
    username: string;
    password: string;
}

const Register: React.FC = () => {
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        email: '',
        username: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setRegisterForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform login logic using register Form.username and register Form.password
    };

    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    label="E-mail"
                    type="email"
                    id="email"
                    name="email"
                    value={registerForm.email}
                    onChange={handleInputChange}
                />
                <Input
                    label="Username"
                    type="text"
                    id="username"
                    name="username"
                    value={registerForm.username}
                    onChange={handleInputChange}
                />
                <Input
                    label="Password"
                    type="password"
                    id="password"
                    name="password"
                    value={registerForm.password}
                    onChange={handleInputChange}
                />
                <Button type="submit">Register</Button>
            </form>
        </>
    );
};

export default Register;