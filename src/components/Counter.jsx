
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function Counter() {
    const [dem, setdem] = useState(0);
    const handleTang = () => {
        setdem(dem + 1);
    }
    function handleGiam() {
        if (dem > 0) {
            setdem(dem - 1);
        }
    }
    return (
        <>
            <h3 className='mt-3'>Counter: {dem}</h3>
            <Button onClick={handleTang} style={{ width: '200px' }} classname='mt-3' variant='primary'>Tăng</Button>
            <Button onClick={handleGiam} style={{ width: '200px' }} className='ms-2' variant='primary'>Giảm</Button>
        </>
    );
}

export default Counter;