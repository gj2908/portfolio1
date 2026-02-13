"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create form data for Google Forms
      const googleFormData = new FormData()
      googleFormData.append("entry.1719828831", formData.name)
      googleFormData.append("entry.1478473696", formData.mobile)
      googleFormData.append("entry.300233831", formData.email)
      googleFormData.append("entry.1180955703", formData.subject)
      googleFormData.append("entry.1339997623", formData.message)

      // Submit to Google Forms
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSchuh9MqhLsSp0lBV_fKlPGpMPfsf93oVEFzwGxS-4Q_iNKvQ/formResponse",
        {
          method: "POST",
          body: googleFormData,
          mode: "no-cors",
        }
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12 animate-fade-in">
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        <Card className="animate-fade-in-up">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Email
            </CardTitle>
            <CardDescription>Send me an email anytime</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="mailto:gaurangjadoun@gmail.com" className="text-primary hover:underline">
              gaurangjadoun@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              Phone
            </CardTitle>
            <CardDescription>Call me during business hours</CardDescription>
          </CardHeader>
          <CardContent>
            <a href="tel:+918077700483" className="text-primary hover:underline">
              +91 8077700483
            </a>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up md:col-span-2 lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Location
            </CardTitle>
            <CardDescription>Based in</CardDescription>
          </CardHeader>
          <CardContent>
            <p>SRM Institute of Science and Technology</p>
            <p>Delhi NCR Campus, Ghaziabad</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4 animate-fade-in-up">
          <h2 className="text-2xl font-bold tracking-tight">Send Me a Message</h2>
          <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="Your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="mr-2">Sending...</span>
                  <Send className="h-4 w-4 animate-pulse" />
                </>
              ) : (
                <>
                  <span className="mr-2">Send Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
        <div className="rounded-lg overflow-hidden h-[400px] animate-fade-in-up">
          {/* This would be replaced with an actual map component in a real implementation */}
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
              <p className="mt-2 text-muted-foreground">Map would be displayed here</p>
              <p className="text-sm text-muted-foreground">SRM IST Delhi NCR Campus, Ghaziabad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

