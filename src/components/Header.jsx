import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#works" className="nav-link active">Works</a>
                <a href="#about" className="nav-link">About</a>
            </nav>
        </header>
    );
}
