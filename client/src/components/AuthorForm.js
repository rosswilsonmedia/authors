import e from "cors";
import { useState } from "react";

const AuthorForm = (props) => {
    const {initName, onSubmitFunction} = props;
    const [name, setName] = useState(initName);

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitFunction(e);
    }

    return (
        <form
            onSubmit={submitHandler}
        >
            <label
                htmlFor='name'
            >
                Name:
            </label>
            <input
                type='text'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                name='name'
                id='name'
            />
            <input
                type='submit'
                value='Submit'
            />
        </form>
    )
}

export default AuthorForm;