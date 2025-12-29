import { motion } from 'motion/react';
import { useAgenda } from '../../hooks/useAgenda';
import { Clock, MapPin, Coffee, Mic, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AgendaPage() {
  const { items, loading, error } = useAgenda();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#EB0028] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
        Error loading agenda: {error}
      </div>
    );
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'talk': return <Mic className="w-5 h-5" />;
      case 'break': return <Coffee className="w-5 h-5" />;
      case 'workshop': return <Users className="w-5 h-5" />;
      case 'performance': return <Star className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#EB0028] rounded-full blur-[250px] opacity-10"></div>
        <div className="absolute bottom-40 left-0 w-[600px] h-[600px] bg-[#EB0028] rounded-full blur-[250px] opacity-5"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#EB0028]/10 border border-[#EB0028]/20 rounded-full text-[#EB0028] mb-6 font-medium text-xs tracking-widest uppercase">
            Event Schedule
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            The <span className="text-[#EB0028]">Agenda</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A day packed with inspiring talks, engaging workshops, and networking opportunities.
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className={`group relative border ${
                item.type === 'break' ? 'border-white/5 bg-white/5' : 'border-white/10 bg-[#111111] hover:border-[#EB0028]/50'
              } rounded-3xl p-8 transition-all duration-300`}
            >
               {/* Connector Line (concept) - can be complex to implement perfectly in list, skipping for clean card look */}
               
               <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                 {/* Time */}
                 <div className="flex-shrink-0 min-w-[120px]">
                   <div className="text-2xl font-bold text-white mb-1 group-hover:text-[#EB0028] transition-colors">
                     {item.start_time}
                   </div>
                   <div className="text-white/40 text-sm font-medium">
                     {item.end_time}
                   </div>
                 </div>

                 {/* Content */}
                 <div className="flex-grow space-y-3">
                   <div className="flex items-center gap-3 mb-2">
                     <span className={`p-2 rounded-full ${
                       item.type === 'break' ? 'bg-white/10 text-white/60' : 'bg-[#EB0028]/10 text-[#EB0028]'
                     }`}>
                       {getIcon(item.type)}
                     </span>
                     <span className="text-white/40 text-xs uppercase tracking-wider font-semibold">
                       {item.type}
                     </span>
                   </div>

                   <h3 className="text-xl md:text-2xl font-bold text-white">
                     {item.title}
                   </h3>

                   {item.description && (
                     <p className="text-white/60 leading-relaxed text-sm md:text-base">
                       {item.description}
                     </p>
                   )}
                   
                   {item.speaker_id && (
                     <div className="pt-2">
                       <Link 
                         to={`/speakers/${item.speaker_id}`}
                         className="inline-flex items-center gap-2 text-sm text-[#EB0028] hover:underline"
                       >
                         View Speaker
                       </Link>
                     </div>
                   )}

                   {item.location && (
                     <div className="flex items-center gap-2 text-white/40 text-sm mt-4">
                       <MapPin className="w-4 h-4" />
                       {item.location}
                     </div>
                   )}
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
