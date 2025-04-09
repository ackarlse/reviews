import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="products/">Produkter</Link>
          </li>
          <li>
            <Link to="users/">Brukere</Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </>
  );
}
