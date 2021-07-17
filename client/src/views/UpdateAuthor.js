import { useState, useEffect } from 'react';

import axios from 'axios';

import { navigate } from '@reach/router';

import AuthorForm from '../components/AuthorForm';
import Header from '../components/Header';

const UpdateAuthor = (props) => {
    const {id} = props;
    const [author, setAuthor] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    })

    const updateAuthor = (e) => {
        axios.put('http://localhost:8000/api/authors/' + id, {
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
            {
                loaded?
                <AuthorForm
                    initName={author.name}
                    onSubmitFunction={updateAuthor}
                />:
                ''
            }
            {
                error?
                <p style={{color: 'red'}}>{error}</p>:
                ''
            }
        </section>
    );
}

export default UpdateAuthor;
