import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomerService() {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setFeedback('');
      setTimeout(() => setSubmitted(false), 4000);
    };

    const fadeUp = {
      hidden: { opacity: 0, y: 40 },
      visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' },
      }),
    };
  
    return (
      <motion.div
        className="bg-orange-50 text-gray-900 min-h-screen py-12 px-6 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          We Value Your Taste & Time
        </motion.h1>
  
        {/* Promises Section */}
        <motion.section
          className="max-w-4xl mx-auto mb-12 grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-3xl font-semibold mb-6 text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              Our Promises
            </motion.h2>
            <motion.ul
              className="list-disc list-inside space-y-4 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {[
                '⚡ Fast Service Promise – Orders served within 5–7 minutes',
                '🍓 Freshness Guarantee – Only premium ingredients used',
                '🔁 Refund/Replacement Policy in case of dissatisfaction',
              ].map((promise, i) => (
                <motion.li
                  key={promise}
                  className="pl-2 rounded transition-all duration-300 ease-in-out hover:bg-orange-100 hover:text-orange-700 cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {promise}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
  
          {/* Feedback Form */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-2xl font-semibold mb-4 text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              Customer Feedback
            </motion.h2>
            {submitted && (
              <motion.div
                className="mb-4 p-3 bg-green-100 text-green-800 rounded text-center font-semibold"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                Thank you for your feedback!
              </motion.div>
            )}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              <motion.textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={5}
                required
                placeholder="Write your feedback here..."
                className="w-full rounded-lg border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                variants={fadeUp}
                custom={0}
              />
              <motion.button
                type="submit"
                className="bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition"
                variants={fadeUp}
                custom={1}
                whileHover={{ scale: 1.04 }}
              >
                Submit Feedback
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.section>
  
        {/* Support Info */}
        <motion.section
          className="max-w-4xl mx-auto mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h2
            className="text-2xl font-semibold mb-3 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            Need Help?
          </motion.h2>
          <motion.p className="text-lg mb-2" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            📞 Toll-Free Helpline: <strong>1800-BA-SHAKE</strong>
          </motion.p>
          <motion.p className="text-lg mb-6" initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            💬 WhatsApp Support: <strong>+91-9876543210</strong>
          </motion.p>
          <motion.p className="text-sm text-gray-700 max-w-md mx-auto" initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            We’re committed to resolving your issues quickly and ensuring every sip is a delight.
            Refund or replacement available if you are not satisfied with your order.
          </motion.p>
        </motion.section>
      </motion.div>
    );
  }
  