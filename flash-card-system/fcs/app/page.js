import Link from "next/link"

export default function Home() {
  return (
    <div style = {{margin: '20px'}}>
      <h1 >Welcome to</h1>
      <h1>Repetition</h1>
      <Link href="\cards" className="standard-button">
        Go to cards
      </Link>
    </div>
  )
}
