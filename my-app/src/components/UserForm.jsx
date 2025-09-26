import { useState } from "react";


function UserForm() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordRegex =
      /^(?=.*[A-Z])(?=(?:.*[^A-Za-z0-9]){3,})(?=(?:.*\d){2,})(?!.*\s).{8,}$/;

    if (!password.trim()) {
      setMessage("Sorry! , Password is required!");
      setIsValid(false);
    } else if (!passwordRegex.test(password.trim())) {
      setMessage(
        "Password must have at least 1 uppercase, 3 special characters, 2 numbers, 8 characters total, and no spaces."
      );
      setIsValid(false);
    } else {
      setMessage(" Strong Password!");
      setIsValid(true);
    }
  };

  const DisplayMessage = () => {
    if (message) {
      return (
        <p className={isValid ? "text-success" : "text-danger"}> {message} </p>
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DisplayMessage />

      <label> Password: </label>
      <input
        type="text"
        value={password}
        className="form-control"
        onChange={(e) => {
          setPassword(e.target.value);
          setIsValid(false);
        }}
      />

      <br />

      <button type="submit" className="btn btn-success">
        {" "}
        Submit{" "}
      </button>
    </form>
  );
}

export default UserForm;
