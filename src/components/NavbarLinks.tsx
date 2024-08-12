import { Link, useLocation } from 'react-router-dom';

type OnClickCallback = () => void;

interface Props {
    onClick?: OnClickCallback;
}

function NavbarLinks({ onClick }: Props) {
    const { pathname } = useLocation();

    return (
        <>
            <Link to="/" className={pathname === "/" ? "active" : ""} onClick={onClick}>About Me</Link>
            <Link to="projects/" className={pathname === "/projects/" ? "active" : ""} onClick={onClick}>Projects</Link>
        </>
    )
}

export default NavbarLinks;