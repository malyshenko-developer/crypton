import { InferType, object, ref, string } from "yup";


export const loginSchema = object({
    email: string().email('Неверный формат Email').required('Заполните Email'),
    password: string().min(6, 'Минимум 6 символов').required('Заполните пароль'),
});

export const registerSchema = object({
    email: string().email('Неверный формат Email').required('Заполните Email'),
    password: string().min(6, 'Минимум 6 символов').required('Заполните пароль'),
    confirmPassword: string()
        .oneOf([ref('password')], 'Пароли не совпадают')
        .required('Повторите пароль'),
});

export type LoginFormValues = InferType<typeof loginSchema>;
export type RegisterFormValues = InferType<typeof registerSchema>;