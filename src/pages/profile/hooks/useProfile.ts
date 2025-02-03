import { useGetProfileQuery } from "@features/profile";
import { useNavigate } from "react-router-dom";

export const useProfile = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const { data: profile, error, isLoading } = useGetProfileQuery(undefined, {
        skip: !token,
    });

    if (!token || error) {
        navigate('/auth')
    }

    const handleLogout = () => {
        localStorage.removeItem('token');

        navigate('/auth');
    }

    return { profile, isLoading, handleLogout }
}