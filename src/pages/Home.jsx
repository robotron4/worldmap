import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Home() {
  return (
    <div>
      <PageNav />
      <h1>worldmap</h1>
      <Link to="/pricing">pricing</Link>
    </div>
  );
}
