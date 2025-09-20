 const Button = ({text, color, disabled}) => {
    const styles = {
        bacckgroundColor: disabled ? "lightgray" : color,
        color: "white",
        padding: "10px 10px",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        
    };

    return (
        <button style={styles} disabled={disabled}>{text}</button>
    );
 };

 export default Button;