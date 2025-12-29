import { motion } from 'motion/react';
import { usePartners } from '../../hooks/usePartners';

export function PartnersPage() {
  const { partners, loading, error } = usePartners();

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
            Our Supporters
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Partners & <span className="text-[#EB0028]">Sponsors</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {partners.map((partner, index) => (
             <motion.a
               key={partner.id}
               href={partner.website_url}
               target="_blank"
               rel="noopener noreferrer"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               className="group flex justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
             >
                {partner.logo_url ? (
                  <img src={partner.logo_url} alt={partner.name} className="max-h-20 max-w-full object-contain" />
                ) : (
                  <span className="text-white font-bold text-xl">{partner.name}</span>
                )}
             </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
