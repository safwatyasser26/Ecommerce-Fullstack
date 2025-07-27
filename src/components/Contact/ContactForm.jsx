"use client"
import { useForm } from 'react-hook-form'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function ContactForm() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log('Submitted:', data)
  }

  return (
    <div className="bg-white max-w-6xl mx-auto rounded-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-md">
      
      {/* Left Contact Info */}
      <div className="space-y-8">
        {/* Call To Us */}
        <div className="flex items-start gap-4">
          <div className="bg-red-100 text-red-500 text-xl p-3 rounded-full">
            <FaPhoneAlt />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">Call To Us</h3>
            <p className="text-sm text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="text-sm text-gray-800 mt-1">Phone: +8801611112222</p>
          </div>
        </div>

        <hr />

        {/* Write To Us */}
        <div className="flex items-start gap-4">
          <div className="bg-red-100 text-red-500 text-xl p-3 rounded-full">
            <FaEnvelope />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">Write To US</h3>
            <p className="text-sm text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-sm text-gray-800 mt-1">Emails: customer@exclusive.com</p>
            <p className="text-sm text-gray-800">support@exclusive.com</p>
          </div>
        </div>
      </div>

      {/* Right Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Your Name *"
            className="p-3 border border-gray-200 rounded bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
            {...register('name', { required: true })}
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="p-3 border border-gray-200 rounded bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
            {...register('email', { required: true })}
          />
          <input
            type="text"
            placeholder="Your Phone *"
            className="p-3 border border-gray-200 rounded bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
            {...register('phone', { required: true })}
          />
        </div>

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-200 rounded bg-gray-100 placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-red-400"
          {...register('message')}
        />

        <div className="text-right">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded text-sm"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
