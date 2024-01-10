import Links from "./links/Links"

export default function Navbar() {
  return (
    <header>
      <nav className="flex">
        <div>Logo</div>
        <Links/>
        <div><button>Get Your Ticket</button></div>
      </nav>
    </header>
  )
}
