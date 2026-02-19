
import React, { useState } from 'react';
import BrutalistCard from '../components/BrutalistCard';
import BrutalistButton from '../components/BrutalistButton';
import { Camera, MapPin, Send, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ReportProblem = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [description, setDescription] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  const handleAiAnalyze = async () => {
    if (!description || description.length < 10) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Given this community problem description in Bangladesh: "${description}", suggest the most appropriate category (e.g., Water, Health, Infrastructure, Crisis) and a 1-sentence potential first step for an NGO. Keep it concise.`,
      });
      setAiSuggestion(response.text);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
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
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-black uppercase mb-2">Report a Problem</h1>
        <p className="text-xl font-bold opacity-70">Identify a local bottleneck. Help us build the solution.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <BrutalistCard>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="block text-xl font-black uppercase">Category</label>
              <select className="w-full p-4 border-2 border-black font-bold focus:bg-slate-50 outline-none">
                <option>Water & Sanitation</option>
                <option>Road Infrastructure</option>
                <option>Emergency Health</option>
                <option>Education Access</option>
                <option>Local Governance Issue</option>
                <option>Other</option>
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
            <textarea 
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What is happening? Who is affected? Is there an immediate danger?"
              className="w-full p-4 border-2 border-black font-bold focus:bg-slate-50 outline-none"
              required
            ></textarea>
            <BrutalistButton 
              type="button"
              variant="outline" 
              size="sm" 
              onClick={handleAiAnalyze}
              disabled={loading || description.length < 10}
            >
              {loading ? 'Analyzing...' : 'AI Triage Assistance'}
            </BrutalistButton>
          </div>

          {aiSuggestion && (
            <div className="mb-8 p-4 bg-blue-50 border-2 border-black border-dashed flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2">
              <Info className="shrink-0 text-[#0338bb]" />
              <div>
                <p className="font-black text-sm uppercase text-[#0338bb] mb-1">AI Classification Suggestion</p>
                <p className="font-bold text-sm italic">{aiSuggestion}</p>
              </div>
            </div>
          )}

          <div className="space-y-2 mb-8">
            <label className="block text-xl font-black uppercase">Photos / Evidence</label>
            <div className="border-4 border-black border-dashed p-8 text-center flex flex-col items-center hover:bg-slate-50 transition-colors cursor-pointer group">
              <Camera size={48} className="mb-4 opacity-50 group-hover:opacity-100" />
              <p className="font-black">TAP TO UPLOAD OR DRAG FILES</p>
              <input type="file" className="hidden" />
            </div>
          </div>

          <BrutalistButton variant="accent" size="lg" fullWidth type="submit" disabled={loading}>
            {loading ? 'TRANSMITTING...' : 'TRANSMIT INTELLIGENCE'}
          </BrutalistButton>
        </BrutalistCard>
      </form>
    </div>
  );
};

export default ReportProblem;
