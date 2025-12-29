import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';

const registrationSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  organization: z.string().optional(),
  ticket_type: z.enum(['standard', 'student', 'vip']),
  dietary_requirements: z.string().optional(),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export function RegistrationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      ticket_type: 'standard',
    }
  });

  const selectedTicket = watch('ticket_type');

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    try {
      const { error } = await supabase
        .from('registrations')
        .insert([
          {
            full_name: data.full_name,
            email: data.email,
            phone: data.phone,
            organization: data.organization,
            ticket_type: data.ticket_type,
            dietary_requirements: data.dietary_requirements,
            status: 'pending', // Default status
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      reset();
    } catch (err) {
      console.error('Error submitting registration:', err);
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to submit registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-32 pb-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EB0028] rounded-full blur-[300px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EB0028] rounded-full blur-[250px] opacity-5"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#EB0028]/10 border border-[#EB0028]/20 rounded-full text-[#EB0028] mb-6 font-medium text-xs tracking-widest uppercase">
            Join the Experience
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Register for <span className="text-[#EB0028]">TEDxUOK</span>
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Secure your spot for a day of inspiring talks, networking, and ideas worth spreading.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111111] border border-white/5 rounded-[32px] overflow-hidden"
        >
          <div className="p-8 md:p-12">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-white text-3xl font-bold mb-4">Registration Successful!</h2>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                  Thank you for registering. We've sent a confirmation email with further details about the event and payment instructions.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-8 py-3 bg-[#EB0028] text-white rounded-full font-medium hover:bg-[#d00024] transition-colors"
                >
                  Register Another Person
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Details */}
                <div className="space-y-6">
                  <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#EB0028]/10 text-[#EB0028] text-sm flex items-center justify-center border border-[#EB0028]/20">1</span>
                    Personal Details
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60 ml-1">Full Name</label>
                      <input
                        {...register('full_name')}
                        type="text"
                        className={`w-full px-5 py-3 bg-white/5 border ${errors.full_name ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.full_name && <p className="text-red-500 text-xs ml-1">{errors.full_name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                      <input
                        {...register('email')}
                        type="email"
                        className={`w-full px-5 py-3 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60 ml-1">Phone Number</label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className={`w-full px-5 py-3 bg-white/5 border ${errors.phone ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all`}
                        placeholder="+94 7X XXX XXXX"
                      />
                      {errors.phone && <p className="text-red-500 text-xs ml-1">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white/60 ml-1">Organization / University (Optional)</label>
                      <input
                        {...register('organization')}
                        type="text"
                        className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all"
                        placeholder="University of Kelaniya"
                      />
                    </div>
                  </div>
                </div>

                {/* Ticket Selection */}
                <div className="space-y-6">
                  <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#EB0028]/10 text-[#EB0028] text-sm flex items-center justify-center border border-[#EB0028]/20">2</span>
                    Ticket Type
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <label className={`cursor-pointer p-4 rounded-xl border transition-all ${selectedTicket === 'student' ? 'bg-[#EB0028]/10 border-[#EB0028]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                      <input type="radio" value="student" {...register('ticket_type')} className="hidden" />
                      <div className="text-white font-semibold mb-1">Student</div>
                      <div className="text-[#EB0028] text-lg font-bold">LKR 1,500</div>
                      <div className="text-white/40 text-xs mt-2">Valid student ID required</div>
                    </label>

                    <label className={`cursor-pointer p-4 rounded-xl border transition-all ${selectedTicket === 'standard' ? 'bg-[#EB0028]/10 border-[#EB0028]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                      <input type="radio" value="standard" {...register('ticket_type')} className="hidden" />
                      <div className="text-white font-semibold mb-1">Standard</div>
                      <div className="text-[#EB0028] text-lg font-bold">LKR 3,000</div>
                      <div className="text-white/40 text-xs mt-2">General admission</div>
                    </label>

                    <label className={`cursor-pointer p-4 rounded-xl border transition-all ${selectedTicket === 'vip' ? 'bg-[#EB0028]/10 border-[#EB0028]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
                      <input type="radio" value="vip" {...register('ticket_type')} className="hidden" />
                      <div className="text-white font-semibold mb-1">VIP</div>
                      <div className="text-[#EB0028] text-lg font-bold">LKR 5,000</div>
                      <div className="text-white/40 text-xs mt-2">Reserved seating + Swag</div>
                    </label>
                  </div>
                </div>

                {/* Other Info */}
                <div className="space-y-6">
                  <h3 className="text-white text-xl font-semibold flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#EB0028]/10 text-[#EB0028] text-sm flex items-center justify-center border border-[#EB0028]/20">3</span>
                    Additional Information
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/60 ml-1">Dietary Requirements (Optional)</label>
                    <input
                      {...register('dietary_requirements')}
                      type="text"
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:bg-white/10 focus:border-[#EB0028]/50 outline-none transition-all"
                      placeholder="Vegetarian, Halal, etc."
                    />
                  </div>
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#EB0028] hover:bg-[#d4001f] text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-[#EB0028]/25 hover:shadow-[#EB0028]/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Complete Registration
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
