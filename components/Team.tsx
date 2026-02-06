
import React from 'react';

const Team: React.FC = () => {
  const members = [
    {
      name: 'Frédéric Lambrechts',
      role: 'MedTech operator',
      image: 'https://drive.google.com/thumbnail?id=1idm7-2OUcdk84x7XWtO796czCGuqOgeE&sz=w1000',
      experience: [
        'CEO Osimis',
        'Consultant @ Accenture',
        'lewagon.com alumni'
      ]
    },
    {
      name: 'Nadia Privalikhina',
      role: 'Senior full stack developer',
      image: 'https://drive.google.com/thumbnail?id=1hdhWFgUzzLqUtwagUmXxfBqg3UwhK9Xc&sz=w1000',
      experience: [
        'AI automations expert',
        'Senior Logic Architect',
        'Data Infrastructure'
      ]
    },
    {
      name: 'Sergey Morozov',
      role: 'MD & MedTech operator',
      image: 'https://drive.google.com/thumbnail?id=1nJ0OjfSypabAGAdibOAnLsEeB06FCLnb&sz=w1000',
      experience: [
        'CIO Osimis',
        'CEO teleradiology center Moscow',
        'Harvard MBA'
      ]
    }
  ];

  return (
    <div className="h-full w-full bg-[#050A18] text-white flex flex-col justify-between p-12 pt-32 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 text-[35vw] font-black text-white/[0.01] leading-none pointer-events-none select-none tracking-tighter z-0">
        PEOPLE
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col h-full max-h-[calc(100vh-80px)]">
        
        <div className="mb-8 shrink-0">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-1 bg-[#FF4D2A]"></div>
            <span className="text-[#FF4D2A] font-black uppercase tracking-[0.5em] text-[12px] block">FOUNDING TEAM</span>
          </div>
          <h2 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.8] mb-4">
            Operators<br />who build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 flex-1 min-h-0 overflow-hidden mb-12">
          {members.map((member, i) => (
            <div key={i} className="group flex flex-col min-h-0 h-full">
              {/* Massive image container filling available island space */}
              <div className="flex-[3] relative overflow-hidden rounded-[3rem] lg:rounded-[5rem] border-2 border-white/5 bg-white/5 mb-8 shadow-3xl p-1 pb-0 transition-all group-hover:border-[#FF4D2A]/40">
                <div className="w-full h-full overflow-hidden rounded-[2.8rem] lg:rounded-[4.8rem] rounded-b-none flex items-end">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-bottom scale-[1.5] grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-[1.7] transition-all duration-[2000ms] block"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${i === 0 ? '1507003211169-0a1dd7228f2d' : i === 1 ? '1573496359142-b8d87734a5a2' : '1519085360753-af0119f7cbe7'}?auto=format&fit=crop&q=80&w=800`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A18]/95 via-[#050A18]/20 to-transparent opacity-80 pointer-events-none"></div>
              </div>
              
              <div className="shrink-0 pb-4 px-4">
                <h4 className="text-3xl lg:text-4xl font-black tracking-tight mb-1 group-hover:text-[#FF4D2A] transition-colors">{member.name}</h4>
                <div className="text-[#FF4D2A] text-[11px] font-black uppercase tracking-[0.4em] mb-4">{member.role}</div>
                <div className="space-y-2">
                  {member.experience.map((exp, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-white/30 text-[13px] font-bold border-l-2 border-white/10 pl-5 leading-tight uppercase tracking-widest">
                      {exp}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
