
import React from 'react';
import { Link } from 'react-router-dom';
import BrutalistCard from '../components/BrutalistCard';
import BrutalistButton from '../components/BrutalistButton';
import { User, Users, Briefcase } from 'lucide-react';

const Join = () => {
  const options = [
    {
      title: "Member",
      icon: <User size={48} />,
      desc: "Join as an individual community member to gain voting rights on local pilots and access to intelligence briefings.",
      path: "/apply/member",
      color: "bg-[#0338bb] text-white"
    },
    {
      title: "Volunteer",
      icon: <Users size={48} />,
      desc: "Be our eyes and ears. Volunteers act as community liaisons and operational support during crisis responses.",
      path: "/apply/volunteer",
      color: "bg-[#FF6600] text-black"
    },
    {
      title: "Partner",
      icon: <Briefcase size={48} />,
      desc: "For NGOs, Tech Firms, and Government bodies looking to integrate our implementation engine into their scaling efforts.",
      path: "/apply/partner",
      color: "bg-white text-black"
    }
  ];

  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-4">Join Eunoia</h1>
          <p className="text-xl font-bold opacity-70 max-w-2xl mx-auto">
            Choose how you want to contribute to the operational backbone of Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <BrutalistCard key={i} className={`flex flex-col h-full items-center text-center p-12 ${opt.color}`}>
              <div className="mb-8 border-4 border-current p-4 rounded-full">
                {opt.icon}
              </div>
              <h2 className="text-4xl font-black uppercase mb-6">{opt.title}</h2>
              <p className="text-lg font-bold mb-10 flex-grow">{opt.desc}</p>
              <Link to={opt.path} className="w-full">
                <BrutalistButton variant={opt.title === 'Member' ? 'accent' : (opt.title === 'Partner' ? 'primary' : 'outline')} fullWidth className="!shadow-none hover:translate-x-1 hover:translate-y-1">
                  Start Application
                </BrutalistButton>
              </Link>
            </BrutalistCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join;
