import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>Hello from about</h1>
      <p>if u want to see our teams just click it</p>

      <Link to="/about/teams">Click for see teams</Link>
      <Outlet></Outlet>
    </>
  );
}
