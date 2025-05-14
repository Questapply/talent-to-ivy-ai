
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your University Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of students who discovered their talents and got accepted to their dream universities with QuestApply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
