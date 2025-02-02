"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginForm() {
  const [step, setStep] = useState<"credentials" | "verification">("credentials")
  const [email, setEmail] = useState("")
  const router = useRouter();

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("verification")
  }

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle verification logic here
    console.log("Verification submitted")
    // Redirect to setup-organization page
    router.push("/setup-organization");
  }

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login clicked")
    // Redirect to setup-organization page
    router.push("/setup-organization");
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#001433]">Welcome Back</CardTitle>
        <CardDescription className="text-center text-gray-500">
          {step === "credentials" ? "Sign in to your account" : "Verify your email"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === "credentials" ? (
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Password
              </Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerificationSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verification" className="text-white">
                Verification Code
              </Label>
              <Input id="verification" placeholder="Enter verification code" required />
            </div>
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </form>
        )}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or</span>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-4 bg-white text-[#001433] hover:bg-gray-100"
            onClick={handleGoogleLogin}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
              />
            </svg>
            Continue with Google
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}