import { useState } from "react";
import { AssessmentLibrary } from "@/components/AssessmentLibrary";
import { Dashboard } from "@/components/Dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Library, LayoutDashboard } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("library");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <header className="border-b bg-white/50 backdrop-blur-sm">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-2xl font-bold text-primary">Assessment Platform</h1>
        </div>
      </header>

      <main className="container mx-auto py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-[400px] grid-cols-2 bg-muted">
            <TabsTrigger value="library" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Library className="h-4 w-4" />
              Library
            </TabsTrigger>
            <TabsTrigger value="dashboard" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="library" className="space-y-4">
            <AssessmentLibrary />
          </TabsContent>
          
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;