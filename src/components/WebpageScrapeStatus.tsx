"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import DataChunksModal from "./DataChunksModal"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react"

// Dummy data for demonstration
const dummyWebpages = [
  { id: 1, url: "https://example.com", status: "scraped" },
  { id: 2, url: "https://example.com/about", status: "scraped" },
  { id: 3, url: "https://example.com/products", status: "pending" },
  { id: 4, url: "https://example.com/contact", status: "detected" },
  { id: 5, url: "https://example.com/careers", status: "pending" },
]

export default function WebpageScrapeStatus() {
  const [selectedWebpage, setSelectedWebpage] = useState<number | null>(null)

  const handleWebpageClick = (id: number) => {
    setSelectedWebpage(id)
  }

  const closeModal = () => {
    setSelectedWebpage(null)
  }

  const scrapedCount = dummyWebpages.filter((page) => page.status === "scraped").length
  const progress = (scrapedCount / dummyWebpages.length) * 100

  return (
    <Card className="w-full bg-white/5 border-white/10">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">Scraping your website...</h2>
        <Progress value={progress} className="mb-6 h-2 bg-white/20" />
        <div className="space-y-4">
          {dummyWebpages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-between items-center bg-white/10 p-4 rounded-lg text-gray-200"
            >
              <span className="flex items-center">
                {page.status === "scraped" && <CheckCircle className="mr-2 text-green-400" />}
                {page.status === "pending" && <Clock className="mr-2 text-yellow-400" />}
                {page.status === "detected" && <AlertCircle className="mr-2 text-blue-400" />}
                {page.url}
              </span>
              <Button
                variant={page.status === "scraped" ? "default" : "secondary"}
                onClick={() => handleWebpageClick(page.id)}
                className={`${page.status === "scraped" ? "bg-gray-200 text-[#001433]" : "bg-white/20 text-gray-200"} font-semibold py-2 px-4 rounded transition-all duration-300 transform hover:scale-105`}
              >
                {page.status === "scraped" ? "View Data" : "Pending"}
              </Button>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button className="w-full mt-6 bg-gray-200 text-[#001433] hover:bg-white/90 font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
            Proceed to Next Step
            <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </CardContent>
      {selectedWebpage && <DataChunksModal webpageId={selectedWebpage} onClose={closeModal} />}
    </Card>
  )
}