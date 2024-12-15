import React, { useState, useRef } from 'react';
import { Mail, Phone, User, Newspaper, MessageCircle, Upload, MapPin } from 'lucide-react';

export const Advertisement = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    newsType: '',
    message: '',
    image: null
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevState => ({
        ...prevState,
        image: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create FormData to send files
    const formSubmissionData = new FormData();
    formSubmissionData.append('name', formData.name);
    formSubmissionData.append('email', formData.email);
    formSubmissionData.append('phone', formData.phone);
    formSubmissionData.append('newsType', formData.newsType);
    formSubmissionData.append('message', formData.message);
    if (formData.image) {
      formSubmissionData.append('image', formData.image);
    }

    // Simulated email submission (you'd replace this with actual email service)
    console.log('Form Submitted', Object.fromEntries(formSubmissionData));
    alert('आपका संदेश प्राप्त हो गया है!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center p-6 w-[100%]">
      <div className="bg-white shadow-2xl rounded-2xl w-[80%] p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-2">समाचार चैनल संपर्क</h1>
          <p className="text-gray-500">हमसे जुड़ने के लिए अपना संदेश भेजें</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="text-gray-400" />
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="आपका नाम"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ईमेल पता"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="फ़ोन नंबर"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* News Type Dropdown */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Newspaper className="text-gray-400" />
            </div>
            <select
              name="newsType"
              value={formData.newsType}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
            >
              <option value="">समाचार का प्रकार चुनें</option>
              <option value="local">स्थानीय समाचार</option>
              <option value="national">राष्ट्रीय समाचार</option>
              <option value="international">अंतरराष्ट्रीय समाचार</option>
              <option value="sports">खेल समाचार</option>
              <option value="other">अन्य</option>
            </select>
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
              <MessageCircle className="text-gray-400" />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="आपका संदेश"
              required
              rows="4"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Upload className="text-gray-400" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              name="image"
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            <div 
              onClick={() => fileInputRef.current.click()}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer flex items-center"
            >
              <span className="text-gray-600">
                {formData.image ? formData.image.name : "छवि अपलोड करें"}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            संदेश भेजें
          </button>
        </form>

        {/* Contact and Map Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 border-t pt-4">
          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">संपर्क जानकारी</h2>
            <div className="space-y-2 text-gray-600">
              <p>📞 हेल्पलाइन: +91-9336265008 , +91 9889820114</p>
              <p>✉️ ईमेल: bedhadakkhabar@gmail.com</p>
              <p>📍 पता: Dubey Marg Near Telephone Exchange Colony, Gorakhpur 273001</p>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3563.2173133120364!2d83.36651287543341!3d26.737440476752113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ0JzE0LjgiTiA4M8KwMjInMDguNyJF!5e0!3m2!1sen!2sin!4v1734264806773!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default <Advertisenment;