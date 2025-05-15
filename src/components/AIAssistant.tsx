
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const AIAssistant = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative max-w-md mx-auto md:ml-auto md:mr-0">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-4 bg-primary text-white flex items-center gap-3">
                  <MessageSquare className="h-5 w-5" />
                  <h3 className="font-medium">QuestApply AI Assistant</h3>
                </div>
                
                <div className="p-6 max-h-[400px] overflow-y-auto space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">Hi, I need help finding universities for computer science programs.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2 shrink-0">
                      AI
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">Hello! I'd be happy to help you find computer science programs. Could you tell me a bit about your interests within computer science? Are you more interested in artificial intelligence, software engineering, cybersecurity, or another area?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">I'm interested in artificial intelligence and machine learning.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2 shrink-0">
                      AI
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">Great choice! Based on your interest in AI and machine learning, I'd recommend looking into programs at MIT, Stanford, Carnegie Mellon, UC Berkeley, and University of Toronto. Would you like me to analyze your profile to provide more personalized recommendations?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">Yes, that would be helpful!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-2 shrink-0">
                      AI
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm typing-effect text-gray-800">Let me analyze your profile and find the perfect match for your talents and goals...</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Ask anything about admissions..." 
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button className="bg-primary hover:bg-primary-dark">
                      Send
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Personal AI Admission Guide
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Have questions about universities, programs, or application requirements? Our AI assistant is available 24/7 to provide instant, accurate answers and personalized guidance.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Get instant answers to admissions questions",
                "Receive personalized university recommendations",
                "Understand application requirements",
                "Access tips for successful applications"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3 font-bold text-sm">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Chat with AI Assistant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
