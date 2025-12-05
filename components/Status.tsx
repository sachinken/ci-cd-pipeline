export default function Status({ status }: { status: "loading" | "success" }) {
  if (status === "loading") return <p>Loading...</p>;
  return <p>Data Loaded</p>;
}
