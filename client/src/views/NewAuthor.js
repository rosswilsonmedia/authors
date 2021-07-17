import { useState } from 'react';

import axios from 'axios';

import { navigate } from '@reach/router';

import AuthorForm from '../components/AuthorForm';
import Header from '../components/Header';

const NewAuthor = () => {
    const [error, setError] = useState(false);

    const addAuthor = (e) => {
        axios.post('http://localhost:8000/api/authors/', {
            name: e.target.name.value
        })
            .then(res=>{
                navigate('/');
            })
            .catch(err=>{
                setError(err.response.data.error.errors.name.message)
            })
    }

    return (
        <section>
            <Header linkText='Home' linkLocation='/'/>
            <AuthorForm initName='' onSubmitFunction={addAuthor}/>
            {
                error?
                <p style={{color: 'red'}}>{error}</p>:
                ''
            }
        </section>
    );
}

export default NewAuthor;
