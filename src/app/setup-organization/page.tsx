"use client"
import SetupOrganizationForm from "@/components/SetupOrganizationForm"
import WebpageScrapeStatus from "@/components/WebpageScrapeStatus"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaGlobe, FaTwitter, FaLink, FaTv, FaPalette, FaInstagram, FaFacebook, FaEnvelope, FaBell, FaPhone } from "react-icons/fa";

export default function SetupOrganization() {
  const [activeTab, setActiveTab] = useState("details");

  const SidebarContent = () => (
    <div className="flex flex-col h-full pr-4 pl-4 pb-4 text-white">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <img src="/logos/full-beyondchats.png" alt="Icon" className="mr-2 w-100 h-20" />
      </h2>
      <div className="flex-1">
        <section className="mb-6">
          <h3 className="font-semibold mb-2">Chat with us</h3>
          <p className="text-sm mb-2">Speak to our friendly team via live chat.</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaBell className="mr-2" /> Start a live chat
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> Shoot us an email
            </li>
            <li className="flex items-center">
              <FaTwitter className="mr-2" /> Message us on Twitter
            </li>
          </ul>
        </section>
        <section className="mb-6">
          <h3 className="font-semibold mb-2">Call us</h3>
          <p className="text-sm mb-2">Call our team Mon-Fri from 8am to 5pm.</p>
          <p className="flex items-center">
            <FaPhone className="mr-2" /> +1 (555) 000-0000
          </p>
        </section>
        <section className="mb-6">
          <h3 className="font-semibold mb-2">Visit us</h3>
          <p className="text-sm mb-2">Chat to us in person at our Melbourne HQ.</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📍</span> 100 Smith Street, Collingwood VIC 3066
            </li>
          </ul>
        </section>
      </div>
      <div className="flex justify-around mt-4">
        <FaFacebook size={20} />
        <FaTwitter size={20} />
        <FaInstagram size={20} />
        <FaEnvelope size={20} />
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#001433] text-white p-4 md:p-8 flex">
      <div className="max-w-full mx-auto flex flex-col md:flex-row md:gap-20 flex-1"> 
        {/* Mobile hamburger menu */}
        <div className="md:hidden mb-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 bg-white/10 rounded-lg">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] bg-[#001433] border-r border-white/10">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop left-side panel */}
        <div className="hidden md:flex w-1/4 bg-white/5 rounded-l-lg rounded-r-lg p-4 flex-col border border-white/10">
          <SidebarContent />
        </div>

        {/* Main content */}
        <div className="w-full md:w-2/3 flex flex-col">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex-1">
            <TabsList className="grid w-full grid-cols-2 bg-white/10 rounded-t-lg">
              <TabsTrigger value="details" className="text-white data-[state=active]:bg-gray-200 text-sm md:text-base">
                Organization Details
              </TabsTrigger>
              <TabsTrigger value="scraping" className="text-white data-[state=active]:bg-gray-200 text-sm md:text-base">
                Training your chatbot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <SetupOrganizationForm onSubmitSuccess={() => setActiveTab("scraping")}/>
            </TabsContent>
            <TabsContent value="scraping">
              <WebpageScrapeStatus />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}