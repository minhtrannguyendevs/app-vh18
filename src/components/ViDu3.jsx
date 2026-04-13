import {useState,useRef} from "react";
import { Button } from "react-bootstrap"; 

function Vidu3() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);
    const Abc={
        count:0
    }

    function handleChange() {
        setCount(count + 1);
        countRef.current++;
        Abc.count++;
    }

    return (
        <div>
            <h2>
                useState: {count} <br />
                useRef:{countRef.current} <br/>
                Object:{Abc.count} 
            </h2>
            <Button variant="primary" onClick={handleChange}>Tang gia tri</Button>
        </div>
    );
}

export default Vidu3;