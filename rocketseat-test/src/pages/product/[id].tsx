import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter()
  return (
    <>
      <h1>Produto de ID: {router.query.id}</h1>
    </>
  );
}
