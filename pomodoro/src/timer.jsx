import Progress from "./progress";
import { useContext} from "react";
import { useEffect } from "react";
import { Content } from "./state";
function Timer () {
    const {time , settime} = useContext(Content)
    const {activate,setactivate} = useContext(Content);

    useEffect(() => {
        let interval;
        if (activate) {
        if (time > 0) {
            interval = setInterval(() => {
                settime((time) => time - 1);
            }, 1000);
        }
            return () => clearInterval(interval);
        }
        }, [time , activate]);

    
    const gettime = (time) => {
        const min = Math.floor(time/60);
        const sec = time % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
    }    

    const start = () => {
        setactivate(true);
    };
    
    const pause = () => {
        setactivate(false);
    };

    return (
        <div className="o1">
            <div className="circle">
                <Progress />
                <div className="countdown">{gettime(time)}
                {!activate ? (<button onClick={start}>Start</button>) : (<button onClick={pause}>Pause</button>)}</div>
            </div>
        </div>
    )
}    
export default Timer