import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import goodstuffmus from "./images/goodstuffmus.jpeg";

export function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    // In a real implementation, this would send to backend/email service
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="mb-20">
          <h1 className="text-5xl text-[#3D3326] mb-8 text-center">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl mb-6">
                <img
                  src={goodstuffmus}
                  alt="Goodstuffmus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl text-[#3D3326] mb-4">My Journey</h2>
                <p className="text-lg text-[#5C4E3A] leading-relaxed mb-4">
                  Music has been my passion for as long as I can remember. From
                  my early days learning piano to discovering the power of my
                  voice, every moment has been a step in a journey of artistic
                  expression and growth.
                </p>
                <p className="text-lg text-[#5C4E3A] leading-relaxed mb-4">
                  I specialize in both piano performance and vocal artistry,
                  bringing a unique blend of technical skill and emotional
                  depth to every performance. Whether performing classical
                  pieces or contemporary favorites, I strive to create
                  memorable experiences that resonate with audiences.
                </p>
                <p className="text-lg text-[#5C4E3A] leading-relaxed">
                  Over the years, I've had the privilege of performing at
                  various venues, from intimate gatherings to large concert
                  halls. Each performance is an opportunity to share my love
                  for music and connect with people through the universal
                  language of melody and harmony.
                </p>
              </div>

              <div className="bg-[#E8DCC4] p-6 rounded-lg">
                <h3 className="text-2xl text-[#3D3326] mb-4">Services</h3>
                <ul className="space-y-2 text-[#5C4E3A]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Wedding ceremonies and receptions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Private events and parties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Corporate events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Concert performances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Studio recordings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#E8DCC4] rounded-lg p-8 md:p-12">
          <h2 className="text-4xl text-[#3D3326] mb-8 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl text-[#3D3326] mb-6">
                Let's Work Together
              </h3>
              <p className="text-lg text-[#5C4E3A] mb-8">
                Interested in booking me for your event? Have questions about
                my services? I'd love to hear from you. Fill out the form and
                I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4C5A0] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#5C4E3A]" />
                  </div>
                  <span className="text-[#5C4E3A]">rasmus@rasmuss.ee</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4C5A0] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#5C4E3A]" />
                  </div>
                  <span className="text-[#5C4E3A]">(+372) 5307 2317</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4C5A0] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#5C4E3A]" />
                  </div>
                  <span className="text-[#5C4E3A]">Available for travel</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#3D3326]">
                  Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 bg-[#F5F1E8] border-[#D4C5A0] focus:border-[#8B7355] focus:ring-[#8B7355]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#3D3326]">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 bg-[#F5F1E8] border-[#D4C5A0] focus:border-[#8B7355] focus:ring-[#8B7355]"
                  placeholder="guido@kangur.ee"
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-[#3D3326]">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 bg-[#F5F1E8] border-[#D4C5A0] focus:border-[#8B7355] focus:ring-[#8B7355]"
                  placeholder="(+372) 5256 7432"
                />
              </div>
              <div>
                <Label htmlFor="eventType" className="text-[#3D3326]">
                  Event Type
                </Label>
                <Input
                  id="eventType"
                  name="eventType"
                  type="text"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="mt-1 bg-[#F5F1E8] border-[#D4C5A0] focus:border-[#8B7355] focus:ring-[#8B7355]"
                  placeholder="e.g., Wedding, Concert, Private Event"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-[#3D3326]">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 bg-[#F5F1E8] border-[#D4C5A0] focus:border-[#8B7355] focus:ring-[#8B7355]"
                  placeholder="Tell me about your event, date, location, and any specific requirements..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#8B7355] hover:bg-[#7A6348] text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
