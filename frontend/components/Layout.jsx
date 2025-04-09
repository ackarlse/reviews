import { Link } from "react-router-dom";

export default function Layout({children}){
    return (
        <>
        <header>
            <ul>
                <li>
                    <Link to="products/">Produktside</Link>
                </li>
                <li>
                    <Link to="user/">Brukerside</Link>
                </li>
            </ul>
        </header>
        <main>
            {children}
        </main>
        </>
    )
}