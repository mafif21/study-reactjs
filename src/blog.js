import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <h1>Hello this is blog</h1>

      <ul>
        <li>
          <Link to="/blog/artikel-1">detail artikel 1</Link>
        </li>
        <li>
          <Link to="/blog/artikel-2">detail artikel 2</Link>
        </li>
        <li>
          <Link to="/blog/artikel-3">detail artikel 3</Link>
        </li>
      </ul>
    </>
  );
}
