
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import PreLoader from "@/components/PreLoader";
import OrganicTexture from "@/components/OrganicTexture";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Showcase = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <div className="min-h-screen text-[#3A4750] font-lato overflow-hidden">
      <Navbar />
      
      {/* Header Banner */}
      <div className="relative garden-section-dark text-white py-32 mt-16 overflow-hidden">
        <OrganicTexture variant="glow" intensity="medium" />
        <OrganicTexture variant="roots" position="bl" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-merriweather text-4xl md:text-5xl mb-6 glow-accent-1">The Blossoms of My Garden</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore tangible examples of how I apply my principles and skills to create meaningful contributions 
            to ethical AI development.
          </p>
        </div>
      </div>
      
      {/* Introduction */}
      <Section 
        id="showcase-intro" 
        title="My Work in Action" 
        className="relative garden-section-light"
      >
        <OrganicTexture variant="branches" intensity="subtle" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xl mb-6">
            Just as a garden reveals the care and vision of its tender, these projects demonstrate 
            my approach to cultivating trustworthy AI systems and ethical frameworks.
          </p>
          <p className="text-lg">
            Each "blossom" represents a unique application of my philosophy of Radical Empathetic Interdependence, 
            showcasing both tangible outcomes and the process of growth that created them.
          </p>
        </div>
      </Section>
      
      {/* Website Building Project */}
      <Section 
        id="website-project" 
        title="Cultivating Digital Spaces" 
        className="relative bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-leaves opacity-5"></div>
        <OrganicTexture variant="soil" intensity="subtle" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Card className="mb-12 organic-shadow garden-border overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-merriweather">AI-Assisted Portfolio Development</CardTitle>
              <CardDescription className="text-lg">Demonstrating practical tool leveraging and ethical AI application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="aspect-video bg-[#3A4750]/10 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                    <OrganicTexture variant="glow" intensity="subtle" />
                    [TODO: Add screenshot of portfolio website]
                  </div>
                  <div className="aspect-video bg-[#3A4750]/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                    <OrganicTexture variant="glow" intensity="subtle" />
                    [TODO: Add screenshot of development process]
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="font-merriweather text-xl mb-4">The Challenge</h3>
                  <p className="mb-4">
                    Creating a professional portfolio website without traditional coding expertise, 
                    while ensuring the result authentically represented my unique approach and philosophy.
                  </p>
                  
                  <h3 className="font-merriweather text-xl mb-4">The Approach</h3>
                  <p className="mb-4">
                    Rather than viewing my lack of traditional coding as a limitation, I leveraged 
                    AI tools as collaborative partners. By clearly articulating design principles, 
                    content structure, and philosophical foundations, I was able to guide the AI to 
                    produce meaningful results.
                  </p>
                  
                  <h3 className="font-merriweather text-xl mb-4">Key Outcomes</h3>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Successfully created a responsive, professional portfolio website</li>
                    <li>Maintained creative control while utilizing AI assistance</li>
                    <li>Demonstrated practical application of human-AI collaboration</li>
                    <li>Applied REI principles to the development process itself</li>
                  </ul>
                  
                  <p>
                    This project exemplifies how AI can enhance human capability without replacing 
                    human vision, creativity, and ethical guidance—a model for the type of AI 
                    systems I aim to help verify and develop.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      {/* Ethical Framework Project */}
      <Section 
        id="ethical-framework" 
        title="Designing Ethical Frameworks" 
        className="relative garden-section-light overflow-hidden"
      >
        <OrganicTexture variant="branches" position="tr" />
        <OrganicTexture variant="glow" position="bl" intensity="medium" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Card className="mb-12 organic-shadow garden-border overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-merriweather">The L.I.F.E. Learning Model</CardTitle>
              <CardDescription className="text-lg">From philosophical principles to practical ethical framework</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="font-merriweather text-xl mb-4">The Framework</h3>
                  <p className="mb-6">
                    The L.I.F.E. (Listening, Integration, Feedback, Emergence) Learning Model is an ethical 
                    framework I've developed that translates Radical Empathetic Interdependence into practical 
                    guidelines for AI development and verification.
                  </p>
                  
                  <div className="bg-[#F0F0F0] p-6 rounded-lg mb-6 garden-border">
                    <h4 className="font-merriweather text-lg font-semibold mb-3 text-[#F6C90E] bg-[#3A4750] p-2 inline-block rounded glow-accent-1">L — Listening</h4>
                    <p className="mb-2">
                      Deeply attending to diverse perspectives, especially from those most vulnerable 
                      to AI impacts. This forms the soil of ethical AI development.
                    </p>
                    
                    <h4 className="font-merriweather text-lg font-semibold mb-3 mt-4 text-[#F6C90E] bg-[#3A4750] p-2 inline-block rounded glow-accent-1">I — Integration</h4>
                    <p className="mb-2">
                      Synthesizing multiple viewpoints and needs into systems that honor complexity 
                      rather than reducing it. Like roots drawing from diverse soil nutrients.
                    </p>
                    
                    <h4 className="font-merriweather text-lg font-semibold mb-3 mt-4 text-[#F6C90E] bg-[#3A4750] p-2 inline-block rounded glow-accent-1">F — Feedback</h4>
                    <p className="mb-2">
                      Creating continuous cycles of evaluation and improvement, with particular attention 
                      to unintended consequences. The water and sunlight that guide growth.
                    </p>
                    
                    <h4 className="font-merriweather text-lg font-semibold mb-3 mt-4 text-[#F6C90E] bg-[#3A4750] p-2 inline-block rounded glow-accent-1">E — Emergence</h4>
                    <p>
                      Recognizing that the true impact of AI systems emerges from their interaction with 
                      complex social and ecological systems. The blossoming that benefits the whole garden.
                    </p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <div className="aspect-square bg-[#3A4750] rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                    <OrganicTexture variant="glow" intensity="strong" />
                    {/* Visual representation of the LIFE model */}
                    <div className="relative w-4/5 h-4/5 z-10">
                      <div className="absolute inset-0 border-4 border-dashed border-[#F6C90E] rounded-full animate-spin-slow"></div>
                      
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F6C90E] text-[#3A4750] w-16 h-16 rounded-full flex items-center justify-center font-bold animate-pulse-slow">L</div>
                      
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-[#F6C90E] text-[#3A4750] w-16 h-16 rounded-full flex items-center justify-center font-bold animate-pulse-slow" style={{ animationDelay: '1s' }}>I</div>
                      
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#F6C90E] text-[#3A4750] w-16 h-16 rounded-full flex items-center justify-center font-bold animate-pulse-slow" style={{ animationDelay: '2s' }}>F</div>
                      
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F6C90E] text-[#3A4750] w-16 h-16 rounded-full flex items-center justify-center font-bold animate-pulse-slow" style={{ animationDelay: '3s' }}>E</div>
                      
                      <div className="absolute inset-8 bg-[#FF4E50] rounded-full flex items-center justify-center">
                        <span className="text-white font-merriweather text-xl">REI</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-merriweather text-xl mb-4">Application to AI Verification</h3>
                  <p className="mb-4">
                    This framework provides a structured approach for evaluating AI systems beyond 
                    technical metrics, asking essential questions:
                  </p>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Whose voices were listened to in development?</li>
                    <li>How are diverse needs integrated into the system?</li>
                    <li>What feedback mechanisms ensure continuous improvement?</li>
                    <li>What emergent properties might arise from deployment?</li>
                  </ul>
                  
                  <p>
                    By applying this framework, I aim to help develop verification practices that 
                    ensure AI systems contribute to our shared flourishing rather than reinforcing 
                    harmful patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      {/* Future Projects Section */}
      <Section 
        id="future-projects" 
        title="Seeds for Future Growth" 
        className="relative bg-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern-soil opacity-5"></div>
        <OrganicTexture variant="roots" intensity="subtle" position="tr" />
        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xl text-center mb-10">
            These areas represent seeds I'm currently nurturing, which will grow into future projects 
            and contributions to the field of AI ethics and verification.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="organic-shadow border-t-4 border-t-[#F6C90E] relative overflow-hidden">
              <OrganicTexture variant="glow" intensity="subtle" />
              <CardHeader>
                <CardTitle>Community AI Literacy Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Developing educational resources to help non-technical communities understand, 
                  evaluate, and provide meaningful input on AI systems that affect them. Based on 
                  the principle that those impacted by AI should have a voice in its development.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-[#3A4750]/60">Status: In conceptual development</p>
              </CardFooter>
            </Card>
            
            <Card className="organic-shadow border-t-4 border-t-[#F6C90E] relative overflow-hidden">
              <OrganicTexture variant="glow" intensity="subtle" />
              <CardHeader>
                <CardTitle>Indigenous Wisdom & AI Ethics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Exploring how indigenous perspectives on intergenerational responsibility and 
                  relationships with non-human entities can inform more holistic approaches to 
                  AI ethics and verification practices.
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-[#3A4750]/60">Status: Research phase</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Section>
      
      {/* Resume Section */}
      <Section 
        id="resume" 
        title="My Professional Background" 
        className="relative garden-section-light overflow-hidden"
      >
        <OrganicTexture variant="branches" intensity="subtle" position="br" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xl mb-8">
            For a formal overview of my experience, skills, and education, please review my resume.
          </p>
          
          <div className="bg-[#F0F0F0] p-8 rounded-lg mb-8 garden-border relative overflow-hidden">
            <OrganicTexture variant="soil" intensity="subtle" />
            <p className="text-center mb-6 relative z-10">[TODO: Embed or link resume]</p>
            
            <Button className="bg-[#3A4750] text-white hover:bg-[#3A4750]/90 relative z-10 glow-accent-2">
              Download Resume (PDF)
            </Button>
          </div>
          
          <Link to="/">
            <Button variant="outline" className="border-[#3A4750] text-[#3A4750]">
              Return to Main Page
            </Button>
          </Link>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Showcase;
