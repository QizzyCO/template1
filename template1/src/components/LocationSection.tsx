import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-mint">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-secondary/60 font-semibold uppercase tracking-[0.2em] text-sm">Lokasi Kami</span>
              <h2 className="text-5xl md:text-6xl font-serif mt-4 text-secondary">
                Kunjungi <span className="italic">Jasty Garden</span>
              </h2>
            </div>
            
            <p className="text-secondary/70 text-lg leading-relaxed">
              Nikmati hidangan lezat di tengah suasana taman yang asri. 
              Lokasi kami sangat mudah dijangkau di kawasan Colomadu, Karanganyar.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-secondary mb-1">Alamat</h4>
                  <p className="text-secondary/60">
                    Jl. Adi Sumarmo No.33, Nanasan, Malangjiwan, <br />
                    Kec. Colomadu, Kabupaten Karanganyar, Jawa Tengah 57175
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-[450px] rounded-[40px] overflow-hidden shadow-2xl shadow-black/40 border-8 border-white/5"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.383699607993!2d110.76105727500246!3d-7.533062492480145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15f792ddcfb7%3A0x7697f5b118d4ce73!2sJasty%20Garden%20-%20Rumah%20Makan%20Taman%20%26%20Venue%20Pernikahan!5e0!3m2!1sid!2sid!4v1777888287597!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
