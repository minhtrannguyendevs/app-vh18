import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

function Vidu2() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    function handleIncreaseCountA() {
        setCountA(countA + 1);
    }

    function handleIncreaseCountB() {
        setCountB(countB + 1);
    }

    useEffect(() => {
        console.log('Khong Doi So');
    });

    useEffect(() => {
        console.log('Array Rong');
    });

    useEffect(() => {
        console.log('Count A ');
    }, [countA]);
    useEffect(() => {
        console.log('2 Doi Count A va Count B');
    }, [countA, countB]);

    return (
        <div>
            <h3>Count A: {countA}</h3>
            <h3>Count B: {countB}</h3>

            <Button variant="primary" style={{ marginRight: 30 }}
                onClick={handleIncreaseCountA}>Increase Count A
            </Button>
            <Button variant="primary"
                onClick={handleIncreaseCountB}>Increase Count B
            </Button>
        </div>
    );
}

export default Vidu2;