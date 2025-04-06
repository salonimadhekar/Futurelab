import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles, Users, Rocket } from "lucide-react";

export default function FutureLab() {
  const [idea, setIdea] = useState("");
  const [category, setCategory] = useState("");
  const [feasibility, setFeasibility] = useState(null);
  const [submittedIdeas, setSubmittedIdeas] = useState([]);

  const handleSubmit = () => {
    const fakeFeasibility = Math.floor(Math.random() * 51) + 50; // simulate 50–100%
    setFeasibility(fakeFeasibility);
    setSubmittedIdeas([...submittedIdeas, { idea, category, feasibility: fakeFeasibility }]);
    setIdea("");
    setCategory("");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">🔮 FutureLab</h1>
      <Tabs defaultValue="submit">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="submit"><Sparkles className="mr-2" />Submit Idea</TabsTrigger>
          <TabsTrigger value="hub"><Users className="mr-2" />Collab Hub</TabsTrigger>
          <TabsTrigger value="prototype"><Rocket className="mr-2" />Prototype</TabsTrigger>
        </TabsList>

        <TabsContent value="submit">
          <Card>
            <CardContent className="space-y-4 p-6">
              <Textarea
                placeholder="Enter your futuristic idea..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
              />
              <Input
                placeholder="Category (e.g. Tech, Healthcare, Environment)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Button onClick={handleSubmit}>Predict Feasibility</Button>
              {feasibility && (
                <p className="text-green-600 font-medium">
                  Feasibility Score: {feasibility}% likely to succeed in 5 years 🚀
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hub">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold">Submitted Ideas</h2>
              {submittedIdeas.length === 0 ? (
                <p>No ideas submitted yet.</p>
              ) : (
                submittedIdeas.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm"
                  >
                    <p className="font-semibold">💡 {item.idea}</p>
                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                    <p className="text-green-600">Feasibility: {item.feasibility}%</p>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prototype">
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-700">🔧 AI-generated prototypes and simulations coming soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
