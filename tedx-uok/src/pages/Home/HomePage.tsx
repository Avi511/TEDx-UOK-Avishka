import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <div ref={ref} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#EB0028] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EB0028] rounded-full blur-[200px] opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="mb-8"
          >
            <span
              className="inline-block px-4 py-2 bg-[#EB0028]/10 border border-[#EB0028]/20 rounded-full text-[#EB0028]"
              style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              Ideas Worth Spreading
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(48px, 8vw, 96px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '24px'
            }}
          >
            Discover Ideas That
            <br />
            <span className="text-[#EB0028]">Shape the Future</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto mb-12"
            style={{ fontWeight: 300, fontSize: '18px', lineHeight: 1.6 }}
          >
            Join us for an inspiring event featuring visionary speakers and innovators who are reshaping the world through powerful ideas.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/speakers')}
              className="px-8 py-4 bg-[#EB0028] text-white rounded-lg font-semibold hover:bg-[#d4001f] transition-colors flex items-center gap-2"
            >
              Explore Speakers
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/registration')}
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Register Now
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
            <div>
              <div className="text-4xl font-bold text-[#EB0028] mb-2">50+</div>
              <p className="text-white/60 text-sm">Expert Speakers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EB0028] mb-2">1000+</div>
              <p className="text-white/60 text-sm">Attendees Expected</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EB0028] mb-2">1 Day</div>
              <p className="text-white/60 text-sm">Packed with Ideas</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
