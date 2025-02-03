interface Props {
    message?: string;
    className?: string;
}

export const ErrorMessage = (props: Props) => {
    const {
        message,
        className
    } = props;

    if (!message) return null;

    return <p className={`text-red-400 ${className}`}>{message}</p>
}