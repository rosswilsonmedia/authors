import {useState, useEffect} from 'react';

import axios from 'axios';

import AuthorList from '../components/AuthorList';
import Header from '../components/Header';

const Authors = () => {
    const [authorList, setAuthorList] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthorList(res.data)
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                setAuthorList(authorList.filter(author => author._id != authorId));
            })
    }
    return (
        <section>
            <Header linkText='Add an Author' linkLocation='/new'/>
            {
                loaded?
                <AuthorList
                    authors={authorList}
                    deleteFunction={deleteAuthor}
                />:
                ''
            }
        </section>
    );
}

export default Authors;
