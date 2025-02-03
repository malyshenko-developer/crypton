import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormValues, loginSchema, RegisterFormValues, registerSchema } from "./validation";

export const useAuthForm = (isLoginMode: boolean) => {
    return useForm<RegisterFormValues | LoginFormValues>({
        resolver: yupResolver(isLoginMode ? loginSchema : registerSchema),
        defaultValues: isLoginMode
            ? { email: "", password: "" }
            : { email: "", password: "", confirmPassword: "" },
        mode: "onBlur",
    });
};