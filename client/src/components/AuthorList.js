import {Link} from '@reach/router';

const AuthorList = (props) =>{
    const {authors, deleteFunction} = props

    const deleteHandler = (e, authorId) => {
        e.preventDefault();
        deleteFunction(authorId);
    }
    return (
        <table>
            <tr>
                <th>Author</th>
                <th>Actions Available</th>
            </tr>
            {
                authors.map((author, index) => {
                    return (
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <Link key={index} to={`edit/${author._id}`}>Edit</Link>
                                <button
                                    onClick={(e) => {deleteHandler(e, author._id)}}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                })
            }
        </table>
    )
}

export default AuthorList;