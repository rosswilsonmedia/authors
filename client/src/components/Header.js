import {Link} from '@reach/router';

const Header = (props) => {
    const {linkText, linkLocation} = props;
    return (
        <header>
            <h1>Favorite Authors</h1>
            <Link to={linkLocation}>{linkText}</Link>
        </header>
    )
}

export default Header;