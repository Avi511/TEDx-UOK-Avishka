import { motion } from 'motion/react';
import { useTeam } from '../../hooks/useTeam';
import { Linkedin } from 'lucide-react';

export function TeamPage() {
  const { members, loading, error } = useTeam();

  if (loading) return null;
  if (error) return <div className="text-white text-center pt-32">Error: {error}</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#EB0028]/10 border border-[#EB0028]/20 rounded-full text-[#EB0028] mb-6 font-medium text-xs tracking-widest uppercase">
            The Organizers
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Meet the <span className="text-[#EB0028]">Team</span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
             <motion.div
               key={member.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               className="group text-center"
             >
               <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#EB0028] transition-colors">
                 {member.photo_url ? (
                   <img 
                     src={member.photo_url} 
                     alt={member.full_name}
                     className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                   />
                 ) : (
                   <div className="w-full h-full bg-[#111] flex items-center justify-center text-white/20">
                     No Photo
                   </div>
                 )}
               </div>
               <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#EB0028] transition-colors">{member.full_name}</h3>
               <p className="text-white/60 text-sm mb-3">{member.role}</p>
               {member.linkedin_url && (
                 <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-block text-white/40 hover:text-[#0077b5] transition-colors">
                   <Linkedin className="w-5 h-5" />
                 </a>
               )}
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
