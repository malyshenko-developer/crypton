import { useLoginMutation, useRegisterMutation } from "@features/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const [ login, { isLoading: isLoginLoading } ] = useLoginMutation();
    const [ register, { isLoading: isRegisterLoading } ] = useRegisterMutation();

    useEffect(() => {
        setErrorMessage(null);
    }, [isLoginMode, setErrorMessage])

    const isLoading = isLoginLoading || isRegisterLoading;

    const handleFormSubmit = async (data: { email: string, password: string }) => {
        try {
            const response = isLoginMode
                ? await login(data).unwrap()
                : await register(data).unwrap()

            localStorage.setItem('token', response.token)
            navigate('/');
        } catch(err) {
            console.error('Ошибка: ', err);

            setErrorMessage(isLoginMode ? 'Ошибка входа' : 'Ошибка регистрации');
        }
    };

    return { isLoginMode, setIsLoginMode, errorMessage, isLoading, handleFormSubmit }
}