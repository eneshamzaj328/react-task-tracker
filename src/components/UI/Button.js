const Button = ({ children, color, text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className="btn animated">
            {text || children}
        </button>
    );
};

export default Button;