"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Calendar,
  Users,
  CheckCircle,
  MessageCircle,
  Navigation,
  Car,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    isNewPatient: true,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const officeHours = [
    { day: "Monday", hours: "8:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 6:00 PM" },
    { day: "Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone (Toll-Free)",
      value: "+1 (800) 529-2872",
      altValue: "Direct: +1 (212) 555-0199",
      description: "Mon-Fri 8AM-6PM, Sat 9AM-2PM",
      action: "Call Toll-Free",
      href: "tel:+18005292872",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      value: "info@whiteaura.com",
      altValue: "Alt: appointments@whiteaura.com",
      description: "Quick response within 2-4 hours",
      action: "Send Email",
      href: "mailto:info@whiteaura.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "SMS & Emergency",
      value: "+1 (212) 555-0199",
      altValue: "24/7 Urgent Patient Line",
      description: "Text us for immediate assistance",
      action: "Send SMS",
      href: "sms:+12125550199",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Online Booking",
      value: "Available 24/7",
      altValue: "Instant Confirmation",
      description: "Schedule your preferred appointment",
      action: "Book Now",
      href: "#appointment-form",
    },
  ];

  const faqs = [
    {
      question: "Do you accept my insurance?",
      answer:
        "We work with most major insurance providers. Please call us with your insurance information and we'll verify your coverage.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring a valid ID, insurance cards, list of current medications, and any previous dental X-rays if available.",
    },
    {
      question: "Do you offer emergency dental care?",
      answer:
        "Yes, we offer same-day emergency appointments and have an after-hours emergency line for urgent dental issues.",
    },
    {
      question: "How often should I visit for cleanings?",
      answer:
        "Most patients should visit every 6 months for cleanings and checkups, though some may need more frequent visits based on their oral health.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge className="bg-sky-100 text-sky-700 hover:bg-sky-100">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Schedule Your Visit Today
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to take the next step towards optimal oral health?
              We&apos;re here to help. Schedule an appointment or get in touch
              with any questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. We&apos;re here
              to help!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 group flex flex-col justify-between"
              >
                <CardContent className="p-6 space-y-4 flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {method.title}
                      </h3>
                      <p className="text-sky-600 font-semibold">{method.value}</p>
                      {method.altValue && (
                        <p className="text-xs text-gray-500 font-medium">
                          {method.altValue}
                        </p>
                      )}
                      <p className="text-sm text-gray-600 pt-1">
                        {method.description}
                      </p>
                    </div>
                  </div>
                  <a href={method.href} className="block w-full mt-4">
                    <Button
                      variant="outline"
                      className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
                    >
                      {method.action}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form & Office Info */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Appointment Form */}
            <Card id="appointment-form" className="p-8">
              <CardHeader className="px-0">
                <CardTitle className="text-2xl">
                  Schedule an Appointment
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we&apos;ll contact you to confirm
                  your appointment.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        handleInputChange("service", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cleaning">
                          Routine Cleaning
                        </SelectItem>
                        <SelectItem value="consultation">
                          New Patient Consultation
                        </SelectItem>
                        <SelectItem value="emergency">
                          Emergency Care
                        </SelectItem>
                        <SelectItem value="cosmetic">
                          Cosmetic Dentistry
                        </SelectItem>
                        <SelectItem value="restorative">
                          Restorative Care
                        </SelectItem>
                        <SelectItem value="pediatric">
                          Pediatric Dentistry
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) =>
                          handleInputChange("preferredDate", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) =>
                          handleInputChange("preferredTime", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8am">8:00 AM</SelectItem>
                          <SelectItem value="9am">9:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="11am">11:00 AM</SelectItem>
                          <SelectItem value="1pm">1:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="3pm">3:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                          <SelectItem value="5pm">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Additional Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Tell us about any specific concerns or questions..."
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newPatient"
                      checked={formData.isNewPatient}
                      onChange={(e) =>
                        handleInputChange("isNewPatient", e.target.checked)
                      }
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="newPatient" className="text-sm">
                      I am a new patient
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-lg py-3"
                  >
                    Request Appointment
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We&apos;ll contact you within 24 hours to confirm your
                    appointment.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Location & Hours */}
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-sky-500" />
                    <span>Office Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="space-y-2">
                    <p className="font-semibold text-lg text-gray-900">
                      White Aura Dental & Aesthetics
                    </p>
                    <p className="text-gray-600">
                      120 White Aura Blvd
                      <br />
                      Suite 400
                      <br />
                      New York, NY 10022
                    </p>
                    <div className="pt-2 text-sm space-y-1 text-gray-600">
                      <p>
                        <span className="font-medium text-gray-900">Toll-Free:</span>{" "}
                        <a href="tel:+18005292872" className="text-sky-600 hover:underline">
                          +1 (800) 529-2872
                        </a>
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">Direct Desk:</span>{" "}
                        <a href="tel:+12125550199" className="text-sky-600 hover:underline">
                          +1 (212) 555-0199
                        </a>
                      </p>
                      <p>
                        <span className="font-medium text-gray-900">Email:</span>{" "}
                        <a href="mailto:info@whiteaura.com" className="text-sky-600 hover:underline">
                          info@whiteaura.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                      href="https://maps.google.com/?q=120+Lexington+Ave+New+York+NY+10022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full flex items-center justify-center space-x-2 border-sky-500 text-sky-500 hover:bg-sky-50"
                      >
                        <Navigation className="h-4 w-4" />
                        <span>Get Directions</span>
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      className="flex-1 flex items-center justify-center space-x-2"
                    >
                      <Car className="h-4 w-4" />
                      <span>Valet & Parking</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-sky-500" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-900">
                          {schedule.day}
                        </span>
                        <span
                          className={`text-sm ${
                            schedule.hours === "Closed"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700">
                      <strong>Emergency Care:</strong> Available 24/7 - Call our
                      emergency lines at{" "}
                      <a href="tel:+18005292872" className="underline font-semibold">
                        +1 (800) 529-2872
                      </a>{" "}
                      or{" "}
                      <a href="tel:+12125550199" className="underline font-semibold">
                        +1 (212) 555-0199
                      </a>{" "}
                      for urgent dental issues.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="p-6">
                <CardHeader className="px-0">
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-sky-500" />
                    <span>What to Expect</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Comprehensive Exam
                        </p>
                        <p className="text-sm text-gray-600">
                          Thorough evaluation of your oral health
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Digital X-Rays
                        </p>
                        <p className="text-sm text-gray-600">
                          Advanced imaging for accurate diagnosis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Treatment Plan
                        </p>
                        <p className="text-sm text-gray-600">
                          Personalized recommendations for your needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Insurance Review
                        </p>
                        <p className="text-sm text-gray-600">
                          We&apos;ll verify your coverage and benefits
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a href="#appointment-form">
              <Button className="bg-sky-500 hover:bg-sky-600">
                Contact Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
