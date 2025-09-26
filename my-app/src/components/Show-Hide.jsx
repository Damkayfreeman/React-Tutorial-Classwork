import {useState} from "react";

function ShowHideText () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleMessage = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleMessage}> {isVisible ? "Hide" : "show"}</button>
            {isVisible && <p> Welcome to Imagined Idea React Class!</p>}
        </div>
    );
}

export default ShowHideText;