function Welcome() {
  return (
    <div>
      <h1>Hello ini di export default</h1>
    </div>
  );
}

export function Welcome2(props) {
  return <h1>Hello {props.children}</h1>;
}

export default Welcome;
// kalau mau bikin komponen harus di export default terlebih dahulu
