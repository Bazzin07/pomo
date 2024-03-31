import { useContext } from "react";
import { Content } from "./state";

function Components () {
    const {component , setcomponent} = useContext(Content);
    const handleclick = (index) => {
        setcomponent(index);
    };

    return (
        <div className="tags">
            <div className="Title">Pomodoro Timer</div>
            <div className="components">
                {["Focus" , "Short Break" , "Long Break"].map((tag,i) => 
                    <div className="Tag"
                        onClick = {() => handleclick(i)}
                        component = {component === i}
                        key = {i}
                 >
                    {tag}
                </div>    
                    
                )}
            </div>
        </div>
    )
}

export default Components