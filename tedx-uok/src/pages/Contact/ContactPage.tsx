import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      reset();
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#EB0028] rounded-full blur-[250px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EB0028] rounded-full blur-[200px] opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#EB0028]/10 border border-[#EB0028]/20 rounded-full text-[#EB0028] mb-6 font-medium text-xs tracking-widest uppercase">
            Get in Touch
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Contact <span className="text-[#EB0028]">Us</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Have questions about TEDxUOK? We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-white text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#EB0028]/50 group-hover:bg-[#EB0028]/10 transition-all">
                    <Mail className="w-5 h-5 text-white/80 group-hover:text-[#EB0028] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email Us</h3>
                    <p className="text-white/60 font-light">info@tedxuok.com</p>
                    <p className="text-white/60 font-light">partnerships@tedxuok.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#EB0028]/50 group-hover:bg-[#EB0028]/10 transition-all">
                    <MapPin className="w-5 h-5 text-white/80 group-hover:text-[#EB0028] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Visit Us</h3>
                    <p className="text-white/60 font-light">University of Kelaniya</p>
                    <p className="text-white/60 font-light">Dalugama, Kelaniya 11600</p>
                    <p className="text-white/60 font-light">Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#EB0028]/50 group-hover:bg-[#EB0028]/10 transition-all">
                    <Phone className="w-5 h-5 text-white/80 group-hover:text-[#EB0028] transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Call Us</h3>
                    <p className="text-white/60 font-light">+94 11 290 3903</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full h-64 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.43002035773!2d79.88118049281604!3d6.972323381666632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e3db4d1c5885!2sUniversity%20of%20Kelaniya!5e0!3m2!1sen!2slk!4v1709405404523!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#111111] p-8 md:p-12 rounded-[40px] border border-white/5"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-white text-3xl font-bold mb-8">Send a Message</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/60 ml-1">Name</label>
                  <input
                    {...register('name')}
                    type="text"
                    className={`w-full px-6 py-4 bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/60 ml-1">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-6 py-4 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/60 ml-1">Subject</label>
                <input
                  {...register('subject')}
                  type="text"
                  className={`w-full px-6 py-4 bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all`}
                  placeholder="What is this regarding?"
                />
                {errors.subject && <p className="text-red-500 text-xs ml-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60 ml-1">Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={`w-full px-6 py-4 bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all resize-none`}
                  placeholder="Your message here..."
                />
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center gap-3 text-green-500">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! We'll allow you know.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-500">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#EB0028] hover:bg-[#d4001f] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#EB0028]/25 hover:shadow-[#EB0028]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
