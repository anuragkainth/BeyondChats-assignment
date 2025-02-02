import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

// Dummy data for demonstration
const dummyDataChunks = [
  { id: 1, content: "This is the first data chunk from the webpage." },
  { id: 2, content: "Here is another important piece of information." },
  { id: 3, content: "This data chunk contains details about the company products." },
]

interface DataChunksModalProps {
  webpageId: number
  onClose: () => void
}

export default function DataChunksModal({ webpageId, onClose }: DataChunksModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-[#001433] text-white border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Data Chunks for Webpage {webpageId}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-4">
          {dummyDataChunks.map((chunk, index) => (
            <motion.div
              key={chunk.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-white/10 rounded-lg flex items-start"
            >
              <FileText className="mr-3 mt-1 flex-shrink-0 text-white" />
              <p>{chunk.content}</p>
            </motion.div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}