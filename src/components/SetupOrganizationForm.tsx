"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"

export default function SetupOrganizationForm({ onSubmitSuccess }: { onSubmitSuccess: () => void }) {
  const [websiteUrl, setWebsiteUrl] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
    console.log({ websiteUrl, description })
    onSubmitSuccess()
  }

  const handleUrlChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setWebsiteUrl(url);
    setIsLoading(true)
    // Simulate API call to fetch meta description
    await new Promise((resolve) => setTimeout(resolve, 1000))
    try {
      // Call the API route with the entered URL
      const res = await fetch(`/api/fetch-metadata?url=${encodeURIComponent(url)}`);
      if (!res.ok) {
        throw new Error("Failed to fetch metadata");
      }
      const data = await res.json();
      setDescription(data.description || "");
    } catch (error) {
      console.error(error);
      setDescription("");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full bg-white/5 border-white/10">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Label htmlFor="companyName" className="text-lg font-semibold text-gray-200">
              Company Name
            </Label>
            <Input
              id="companyName"
              placeholder="Enter your company name"
              required
              className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Label htmlFor="websiteUrl" className="text-lg font-semibold text-gray-200">
              Website URL
            </Label>
            <Input
              id="websiteUrl"
              placeholder="https://www.example.com"
              required
              value={websiteUrl}
              onChange={handleUrlChange}
              className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Label htmlFor="description" className="text-lg font-semibold text-gray-200">
              Company Description
            </Label>
            <Textarea
              id="description"
              placeholder="Enter your company description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              type="submit"
              className="w-full bg-gray-200 text-[#001433] hover:bg-white/90 font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Initialize Chatbot Setup
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  )
}