import React from 'react';
import { CheckCircle, XCircle, Shield, BarChart2, Lock, Clock, DollarSign, Activity } from 'lucide-react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const features = [
  { icon: <BarChart2 className="w-5 h-5 inline mr-2" />, label: 'Real-time Monitoring' },
  { icon: <Lock className="w-5 h-5 inline mr-2" />, label: 'End-to-End Encryption' },
  { icon: <Clock className="w-5 h-5 inline mr-2" />, label: '24/7 Support' },
  { icon: <DollarSign className="w-5 h-5 inline mr-2" />, label: 'Transparent Pricing' },
  { icon: <Activity className="w-5 h-5 inline mr-2" />, label: 'Threat Intelligence' },
];

const testimonials = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Alex Johnson',
    company: 'Acme Corp',
    quote: "CyberGuard caught threats we didn't even know existed. Their team is always on top of things!"
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Maria Chen',
    company: 'FinTech Solutions',
    quote: "The real-time monitoring and support are unmatched. We sleep better at night with CyberGuard."
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
    name: 'David Kim',
    company: 'HealthSecure',
    quote: "Transparent pricing and true expertise. CyberGuard is our trusted partner."
  },
];

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', alt: 'Apple' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', alt: 'Netflix' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Spotify_logo_without_text.svg', alt: 'Spotify' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Amazon_logo.svg', alt: 'Amazon' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-900 text-neutral-200 py-16 px-4 md:px-8">
      {/* Feature Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto mb-16 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose <span className="text-cyan-400">CyberGuard</span>?</h2>
        <table className="w-full text-left rounded-2xl overflow-hidden">
          <thead>
            <tr className="bg-neutral-800">
              <th className="py-4 px-6 text-lg font-semibold">Feature</th>
              <th className="py-4 px-6 text-lg font-semibold text-cyan-400">CyberGuard <span className="align-middle"><CheckCircle className="inline w-5 h-5 text-cyan-400 ml-1" /></span></th>
              <th className="py-4 px-6 text-lg font-semibold text-red-400">Other Providers <span className="align-middle"><XCircle className="inline w-5 h-5 text-red-400 ml-1" /></span></th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={feature.label} className={idx % 2 === 0 ? 'bg-neutral-800/70' : 'bg-neutral-900'}>
                <td className="py-4 px-6 flex items-center gap-2">{feature.icon}{feature.label}</td>
                <td className="py-4 px-6 text-center"><CheckCircleIcon className="w-6 h-6 text-cyan-400 mx-auto" aria-label="Included" /></td>
                <td className="py-4 px-6 text-center"><XCircleIcon className="w-6 h-6 text-red-400 mx-auto" aria-label="Not included" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Testimonials Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-3xl mx-auto mb-16"
      >
        <h3 className="text-2xl font-semibold mb-8 text-center">What Our Clients Say</h3>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-8"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}
                className="bg-neutral-800/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center gap-4 min-h-[320px]"
                tabIndex={0}
                aria-label={`Testimonial from ${t.name}, ${t.company}`}
              >
                <img src={t.avatar} alt={`Avatar of ${t.name}`} className="w-16 h-16 rounded-full border-2 border-cyan-400 mb-2" />
                <blockquote className="italic text-lg text-center">"{t.quote}"</blockquote>
                <div className="mt-4 text-center">
                  <span className="font-semibold text-cyan-300">{t.name}</span><br />
                  <span className="text-neutral-400 text-sm">{t.company}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Trusted By Logos */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-5xl mx-auto"
      >
        <h4 className="text-xl font-semibold mb-6 text-center">🛡️ Trusted by leading companies</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center mb-4">
          {logos.map((logo, i) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 bg-neutral-800/70 rounded-xl p-4 shadow-md"
              tabIndex={0}
              aria-label={`Logo: ${logo.alt}`}
            >
              <img src={logo.src} alt={logo.alt} className="h-10 w-auto object-contain" />
            </div>
          ))}
        </div>
        <p className="text-center text-neutral-400 mt-2">1000+ organizations secured</p>
      </motion.div>
    </section>
  );
} 