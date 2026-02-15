import DC95Window from '../components/DC95Window'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Send us a message via DC Mail.',
}

export default function Contact() {
  return (
    <DC95Window title="New Message - DC Mail" menuItems={['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Message', 'Help']}>
      <div className="font-['Tahoma',_'Arial',_sans-serif] text-[14px]">
        {/* DC Mail style toolbar */}
        <div
          className="flex items-center gap-1 px-2 py-1 bg-[#c0c0c0]"
          style={{
            borderBottom: '1px solid #808080',
          }}
        >
          <button className="dc95-button text-[14px] flex items-center gap-1">
            <span>📨</span> Send
          </button>
          <button className="dc95-button text-[14px] flex items-center gap-1">
            <span>✂️</span> Cut
          </button>
          <button className="dc95-button text-[14px] flex items-center gap-1">
            <span>📋</span> Paste
          </button>
          <button className="dc95-button text-[14px] flex items-center gap-1">
            <span>↩️</span> Undo
          </button>
          <button className="dc95-button text-[14px] flex items-center gap-1">
            <span>✅</span> Check
          </button>
        </div>

        {/* Email headers */}
        <div className="bg-[#c0c0c0] px-2 py-1" style={{ borderBottom: '1px solid #808080' }}>
          <div className="flex items-center gap-2 py-[2px]">
            <label className="w-[50px] text-right font-bold text-[14px]">To:</label>
            <div
              className="flex-1 bg-white px-2 py-[1px]"
              style={{
                border: '2px solid',
                borderColor: '#808080 #ffffff #ffffff #808080',
              }}
            >
              info@decoupled.io
            </div>
          </div>
          <div className="flex items-center gap-2 py-[2px]">
            <label className="w-[50px] text-right font-bold text-[14px]">Cc:</label>
            <div
              className="flex-1 bg-white px-2 py-[1px]"
              style={{
                border: '2px solid',
                borderColor: '#808080 #ffffff #ffffff #808080',
              }}
            >
              support@decoupled.io
            </div>
          </div>
          <div className="flex items-center gap-2 py-[2px]">
            <label className="w-[50px] text-right font-bold text-[14px]">Subject:</label>
            <div
              className="flex-1 bg-white px-2 py-[1px]"
              style={{
                border: '2px solid',
                borderColor: '#808080 #ffffff #ffffff #808080',
              }}
            >
              Contact Form Submission
            </div>
          </div>
        </div>

        {/* Message body - the actual form */}
        <div className="p-6 bg-white">
          <form className="space-y-4 max-w-lg mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-[20px] font-bold text-[#000080] mb-1">
                Contact Us
              </h2>
              <p className="text-[14px] text-[#808080]">
                Fill out this form and we will get back to you via electronic mail.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[14px] font-bold mb-1">First Name:</label>
                <input
                  type="text"
                  className="w-full px-2 py-[2px] text-[14px] bg-white"
                  style={{
                    border: '2px solid',
                    borderColor: '#808080 #ffffff #ffffff #808080',
                    boxShadow: 'inset 1px 1px 0 #000000',
                  }}
                />
              </div>
              <div>
                <label className="block text-[14px] font-bold mb-1">Last Name:</label>
                <input
                  type="text"
                  className="w-full px-2 py-[2px] text-[14px] bg-white"
                  style={{
                    border: '2px solid',
                    borderColor: '#808080 #ffffff #ffffff #808080',
                    boxShadow: 'inset 1px 1px 0 #000000',
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-[14px] font-bold mb-1">E-mail Address:</label>
              <input
                type="email"
                className="w-full px-2 py-[2px] text-[14px] bg-white"
                style={{
                  border: '2px solid',
                  borderColor: '#808080 #ffffff #ffffff #808080',
                  boxShadow: 'inset 1px 1px 0 #000000',
                }}
              />
            </div>

            <div>
              <label className="block text-[14px] font-bold mb-1">Subject:</label>
              <input
                type="text"
                className="w-full px-2 py-[2px] text-[14px] bg-white"
                style={{
                  border: '2px solid',
                  borderColor: '#808080 #ffffff #ffffff #808080',
                  boxShadow: 'inset 1px 1px 0 #000000',
                }}
              />
            </div>

            <div>
              <label className="block text-[14px] font-bold mb-1">Message:</label>
              <textarea
                rows={8}
                className="w-full px-2 py-[2px] text-[14px] bg-white resize-none"
                style={{
                  border: '2px solid',
                  borderColor: '#808080 #ffffff #ffffff #808080',
                  boxShadow: 'inset 1px 1px 0 #000000',
                }}
                placeholder="Dear Sir or Madam..."
              />
            </div>

            <div className="flex gap-2 justify-center pt-2">
              <button type="submit" className="dc95-button text-[14px] px-6 py-1">
                Send Message
              </button>
              <button type="reset" className="dc95-button text-[14px] px-6 py-1">
                Clear Form
              </button>
            </div>

            {/* Retro contact info */}
            <div
              className="mt-6 p-3 bg-[#c0c0c0] text-[14px]"
              style={{
                border: '2px solid',
                borderColor: '#808080 #ffffff #ffffff #808080',
              }}
            >
              <p className="font-bold text-[#000080] mb-2">Other ways to reach us:</p>
              <p>&#x260E; Phone: +1 (555) 123-4567</p>
              <p>&#x1F4E7; E-mail: info@decoupled.io</p>
              <p>&#x1F3E2; Office: 123 Tech Avenue, San Francisco, CA 94105</p>
              <p className="mt-1 text-[#808080]">Business Hours: Mon-Fri 9:00 AM - 6:00 PM EST</p>
            </div>
          </form>
        </div>
      </div>
    </DC95Window>
  )
}
