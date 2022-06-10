import { useParams } from "react-router-dom";

export default function Detail() {
  const urlParams = useParams();
  return (
    <>
      <h1>Blog Detail</h1>
      <p>Halo ini adalah artikel blog ke {urlParams.artikelId}</p>
    </>
  );
}
