
function Box(props) {
    const { mau = 'blue', rong = '100px', cao = '100px' } = props;
    return (
        <div classname='mt-3' style={{
            backgroundColor: mau,
            width: rong,
            height: cao
        }}>

        </div>
    );
}

export default Box;