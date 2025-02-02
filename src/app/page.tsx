import Image from "next/image"
import LoginForm from "@/components/LoginForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#001433] relative">
      <div className="absolute top-3 left-10">
        <Image 
          src="/logos/full-beyondchats.png" 
          alt="Logo" 
          width={200} 
          height={100} 
          className="w-auto h-20" 
        />
      </div>
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}