import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  function loginHandler(e) {
    e.preventDefault();

    const checkLogin = true;
    if (checkLogin) {
      navigate("/dashboard");
    }
  }
  return (
    <form onSubmit={loginHandler}>
      <input type="text" />
      <input type="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
