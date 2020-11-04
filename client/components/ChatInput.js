import React,{useState} from 'react';

//initial state of input in chat
const initialInputValue = {
    input: ''
}

const ChatInput = (props) => {
    //state for input value
    const [values , setValues] = useState (initialInputValue)

    //when user submits the message, send the message to the socket and clear the input field
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSend(values.input)
        setValues(initialInputValue)
    }

    //when user types into the input box
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    //elements for a component
    return ( 
        <form autoComplete='off' className="chat-input" onSubmit={handleSubmit}>
            <input type='text'
            onChange={handleChange}
            name='input'
            value={values.input}
            placeholder="Send a message..."
            id = 'textInput'
            />
        </form>
    );
}
 
export default ChatInput;