import React from 'react'

export default function ContactUs() {
  return (
    <div>
      <h2 class="text-2xl font-bold text-fuchsia-700 text-center">Contact Us</h2>
<p class="text-center text-gray-600 mt-2">
  We’re here to assist you with any questions about orders, products, or returns.
</p>

<div class="mt-6 space-y-3 text-gray-700">
  <p><strong>Email:</strong> support@shopease.com</p>
  <p><strong>Phone:</strong> +91 98765 43210</p>
  <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
  <p><strong>Working Hours:</strong> Mon–Sat: 10 AM – 7 PM</p>
</div>

<form class="mt-8 space-y-4">
  <input type="text" placeholder="Your Name" class="w-full p-3 border rounded-xl" />
  <input type="email" placeholder="Your Email" class="w-full p-3 border rounded-xl" />
  <textarea placeholder="Your Message" class="w-full p-3 border rounded-xl h-32"></textarea>
  <button class="bg-fuchsia-700 text-white px-6 py-3 rounded-xl w-full">
    Send Message
  </button>
</form>

<div class="mt-6 text-center">
  <p class="font-semibold">Follow us</p>
  <p class="text-gray-600">Instagram | Facebook | Pinterest | X</p>
</div>

    </div>
  )
}
