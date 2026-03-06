
import React, { useState } from 'react';
import BrutalistCard from '../components/BrutalistCard';
import BrutalistButton from '../components/BrutalistButton';
import { Camera, MapPin, Send, Info, Sparkles, X } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import SEO from '../components/SEO';

const ReportProblem = () => {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<{file: File, preview: string}[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      const newImages = newFiles.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setSelectedImages(prev => [...prev, ...newImages]);
      // Reset input value to allow selecting the same file again if needed
      e.target.value = '';
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => {
      const newImages = [...prev];
      URL.revokeObjectURL(newImages[index].preview);
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleCleanUpDraft = async () => {
    if (!description || description.length < 5) return;
    setAiLoading(true);
    try {
      // Using the provided API key or falling back to environment variable
      // Note: In a real production app, never hardcode API keys on the client.
      // This is for the specific requested preview functionality.
      const apiKey = process.env.GEMINI_API_KEY || "AIzaSyCyP0-wMdZUJ8qzCXOe0QEwTFoFqwQFV1k";
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Rewrite the following problem report to be more professional, concise, and actionable for an NGO in Bangladesh. Keep the tone urgent but objective. Do not provide options or explanations. Just return the rewritten text. Original text: "${description}"`,
      });
      
      if (response.text) {
        setDescription(response.text.trim());
        setAiSuggestion("Draft refined for clarity and impact.");
        setTimeout(() => setAiSuggestion(null), 3000);
      }
    } catch (err) {
      console.error("AI Error:", err);
      setAiSuggestion("Could not connect to AI service. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <BrutalistCard className="bg-green-100 p-12">
          <div className="mb-6 flex justify-center">
            <div className="bg-black text-white p-6 rounded-full">
              <Send size={64} />
            </div>
          </div>
          <h2 className="text-4xl font-black uppercase mb-4">Report Received</h2>
          <p className="text-xl font-bold mb-8 italic">"Eyes and ears on the ground are the first step to a solution."</p>
          <p className="mb-10 opacity-70">A field coordinator in your district will verify this intelligence within 48 hours.</p>
          <BrutalistButton variant="primary" onClick={() => setSuccess(false)}>Send Another Report</BrutalistButton>
        </BrutalistCard>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <SEO title="Report a Crisis | Eunoia Society" description="Submit a report about a local problem to help us build a solution." />
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-black uppercase mb-2">Report a Problem</h1>
        <p className="text-xl font-bold opacity-70">Identify a local problem. Help us build the solution.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <BrutalistCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="block text-xl font-black uppercase">Category</label>
              <select className="w-full p-4 border-2 border-black font-bold focus:bg-slate-50 outline-none">
                <option>Traffic</option>
                <option>Health</option>
                <option>Education</option>
                <option>Environment</option>
                <option>Safety</option>
                <option>Livelihood</option>
                <option>Housing</option>
                <option>Governance</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-xl font-black uppercase">Location (District/Thana)</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="e.g., Kurigram Sadar"
                  className="w-full p-4 pl-12 border-2 border-black font-bold focus:bg-slate-50 outline-none"
                  required
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" />
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-8">
            <label className="block text-xl font-black uppercase">Describe the Situation</label>
            <div className="relative">
              <textarea 
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is happening? Who is affected? Is there an immediate danger?"
                className="w-full p-4 border-2 border-black font-bold focus:bg-slate-50 outline-none"
                required
              ></textarea>
            </div>
            <div className="flex justify-end mt-2">
              <BrutalistButton 
                type="button"
                variant="outline" 
                size="sm" 
                onClick={handleCleanUpDraft}
                disabled={aiLoading || description.length < 5}
                className="!bg-white !text-black !text-[10px] !py-1 !px-3 flex items-center gap-2 hover:!bg-black hover:!text-white transition-colors"
              >
                {aiLoading ? 'Refining...' : 'Clean Up My Draft'}
              </BrutalistButton>
            </div>
          </div>

          {aiSuggestion && (
            <div className="mb-8 p-4 bg-blue-50 border-2 border-black border-dashed flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
              <Info className="shrink-0 text-[#0338bb]" />
              <div>
                <p className="font-black text-sm uppercase text-[#0338bb] mb-1">AI Assistant</p>
                <p className="font-bold text-sm italic">{aiSuggestion}</p>
              </div>
            </div>
          )}

          <div className="space-y-2 mb-8">
            <label className="block text-xl font-black uppercase">Photos / Evidence</label>
            <div 
              className="border-4 border-black border-dashed p-8 text-center flex flex-col items-center hover:bg-slate-50 transition-colors cursor-pointer group relative"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <Camera size={48} className="mb-4 opacity-50 group-hover:opacity-100" />
              <p className="font-black">TAP TO UPLOAD OR DRAG FILES</p>
              <p className="text-sm opacity-60 mt-2 font-bold">IMAGES ONLY (JPG, PNG)</p>
              <input 
                id="file-upload" 
                type="file" 
                className="hidden" 
                multiple 
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            {/* Image Previews */}
            {selectedImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {selectedImages.map((img, index) => (
                  <div key={index} className="relative aspect-square border-2 border-black group bg-slate-100">
                    <img
                      src={img.preview}
                      alt={`Evidence ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition-all"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <BrutalistButton variant="accent" size="lg" fullWidth type="submit" disabled={loading}>
            {loading ? 'SUBMITTING...' : 'SUBMIT REPORT'}
          </BrutalistButton>
        </BrutalistCard>
      </form>
    </div>
  );
};

export default ReportProblem;
