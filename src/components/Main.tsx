import HumanBody from "./HumanBody"

export default function Main() {
  return (
    <main className="flex flex-col m-10 justify-center items-center">
      <p className="text-lg text-center">
        Welcome to the Pain Management System. This is the future of pain
        management. We are here to help you.
      </p>
      <HumanBody />
    </main>
  )
}