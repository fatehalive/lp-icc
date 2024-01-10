import Link from "next/link";

export default function notFound() {
    return (
      <div>
        <h1>This page could not be found</h1>
        <Link href={"/"}>Back to the home page</Link>
      </div>
    )
  }
  