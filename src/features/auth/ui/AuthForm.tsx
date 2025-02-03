import { useEffect } from "react";

import { Input } from "@shared/components/ui/input";
import { Label } from "@shared/components/ui/label";
import { ErrorMessage } from "@shared/components/ui/error-message";

import { useAuthForm } from "../model/useAuthForm";
import { RegisterFormValues } from "../model/validation";

interface Props {
    isLoginMode: boolean;
    className?: string;
    onSubmit: (data: any) => void;
}


export const AuthForm = (props: Props) => {
    const { isLoginMode, className, onSubmit } = props;

    const { register, handleSubmit, reset: resetForm, formState: { errors } } = useAuthForm(isLoginMode);

    useEffect(() => {
        resetForm();
    }, [isLoginMode, resetForm])

    return (
        <form onSubmit={handleSubmit(onSubmit)} id="authForm" className={className}>
            <div className="mb-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="Введите email:"
                    {...register("email")}
                />
                <ErrorMessage message={errors.email?.message} />
            </div>
            <div>
                <Label htmlFor="password">Пароль</Label>
                <Input
                    id="password"
                    placeholder="Введите пароль"
                    type='password'
                    {...register("password")}
                />
                <ErrorMessage message={errors.password?.message} />
            </div>
            {!isLoginMode && (
                <div
                    className="mt-2"
                >
                    <Label htmlFor="confirm-password">Повторите пароль</Label>
                    <Input
                        id="confirm-password"
                        placeholder="Повторите пароль"
                        type='password'
                        {...register("confirmPassword")}
                    />
                    <ErrorMessage
                        message={(errors as Partial<Record<keyof RegisterFormValues, { message?: string }>>).confirmPassword?.message}
                    />
                </div>
            )}
        </form>
    )
}