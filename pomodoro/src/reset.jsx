import { useContext } from "react";
import { Content } from "./state";

function Reset () {

    const {settime, inittime} = useContext(Content)

    const resettime = () => {
        settime(inittime);
        
    };
    return (
        <div className="reset">
            <button onClick={resettime}>RESET</button>
        </div>
    )
}

export default Reset