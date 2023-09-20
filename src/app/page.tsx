import StartForm from '../components/StartForm'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-center p-24">
      <StartForm />
    </main>
  )
}
