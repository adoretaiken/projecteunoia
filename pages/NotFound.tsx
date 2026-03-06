import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrutalistButton from '../components/BrutalistButton';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center p-8 md:p-16 text-center bg-slate-50">
      
      <h1 className="text-6xl md:text-8xl font-black uppercase mb-2 tracking-tighter">
        System <span className="text-[#0338bb]">Failure</span>
      </h1>
      
      <div className="max-w-xl mx-auto mb-12 border-l-4 border-black pl-6 text-left">
        <p className="text-2xl font-bold mb-2">ERROR: RESOURCE_NOT_FOUND</p>
        <p className="text-lg opacity-70 font-medium">
          The requested trajectory does not exist in our current operational map. This could be a broken link or a page that has been decommissioned.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <Link to="/">
          <BrutalistButton variant="primary" size="lg">
            Return Home
          </BrutalistButton>
        </Link>
        <BrutalistButton variant="outline" size="lg" onClick={() => navigate(-1)}>
          Go Back
        </BrutalistButton>
      </div>
    </div>
  );
};

export default NotFound;
