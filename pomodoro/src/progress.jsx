import { useContext, useEffect } from "react";
import { Content } from "./state";

function Progress () {

    const {progress , setprogress , time , inittime} = useContext(Content);

    useEffect( () => {
        setprogress(time / (inittime / 100));
    },[setprogress , time])

    return (
        <div>
            <div className="Outercircle " style={{background: `conic-gradient(gold ${progress}% , transparent ${progress}%)`}}>
                <div className="innercircle" ></div>
            </div>
        </div>
    )
}

export default Progress

