import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@shared/components/ui/card";
import { Button } from "@shared/components/ui/button";
import { AnimatedCard } from "@shared/components/ui/animated-card";
import { Loader2 } from "lucide-react";

import { AuthForm } from "@features/auth";
import { ErrorMessage } from "@shared/components/ui/error-message";
import { useAuth } from "../hooks/useAuth";


export const AuthPage = () => {
    const { errorMessage, handleFormSubmit, isLoading, isLoginMode, setIsLoginMode } = useAuth();

    return (
        <AnimatedCard keyProp={isLoginMode ? 'login' : 'register'}>
            <Card className='min-w-96'>
                <CardHeader>
                    <CardTitle className='text-xl text-center'>
                        {isLoginMode ? 'Вход' : 'Регистрация'}
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <AuthForm
                        isLoginMode={isLoginMode}
                        className="mb-2"
                        onSubmit={handleFormSubmit}
                    />

                    {errorMessage && <ErrorMessage message={errorMessage} />}

                    <Button
                        type='button'
                        variant='outline'
                        onClick={() => setIsLoginMode(!isLoginMode)}
                    >
                        {isLoginMode
                            ? 'Создать аккаунт'
                            : 'Уже есть аккаунт?'
                        }
                    </Button>
                </CardContent>

                <CardFooter>
                    <Button type='submit' form='authForm' className="w-full" disabled={isLoading}>
                        {isLoading && <Loader2 className="animate-spin" />}
                        {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                </CardFooter>
            </Card>
        </AnimatedCard>
    )
}