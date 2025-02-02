"use client"
import SetupOrganizationForm from "@/components/SetupOrganizationForm"
import WebpageScrapeStatus from "@/components/WebpageScrapeStatus"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function SetupOrganization() {
  const [activeTab, getActiveTab] = useState("details");

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <img src="/logos/full-beyondchats.png" alt="Icon" className="mr-2 w-100 h-10" />
      </h2>
      <p className="flex-1">This is the left-side panel content.</p>
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
          <Tabs value={activeTab} onValueChange={getActiveTab} className="w-full flex-1">
            <TabsList className="grid w-full grid-cols-2 bg-white/10 rounded-t-lg">
              <TabsTrigger value="details" className="text-white data-[state=active]:bg-gray-200 text-sm md:text-base">
                Organization Details
              </TabsTrigger>
              <TabsTrigger value="scraping" className="text-white data-[state=active]:bg-gray-200 text-sm md:text-base">
                Training your chatbot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <SetupOrganizationForm onSubmitSuccess={() => getActiveTab("scraping")}/>
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