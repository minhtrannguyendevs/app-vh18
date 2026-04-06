import { Alert } from "react-bootstrap";

function Hello (props) {  
    const {who,age,question}= props;
    return (
        <>
        <h2>Hello, {who?`${who}`:`Ban`}! {age? `Age ${age}`: ''}</h2>
        <Alert variant='success'>{question}</Alert>
        </>
    );
    }

export default Hello;