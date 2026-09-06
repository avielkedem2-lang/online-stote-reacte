import { Link } from "react-router";

export default function Header() {
  return (
    <div>
        <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"favorites"}>
        <button>favorites</button>
      </Link>
    </div>
  )
}
