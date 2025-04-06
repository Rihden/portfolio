"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss how we can work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <Card className="h-full border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">ned@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Connect with me</h4>
                  <div className="flex space-x-3">
                    {["github", "twitter", "linkedin", "dribbble"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="w-5 h-5 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">{social.charAt(0).toUpperCase()}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="border-none bg-gradient-to-br from-card/50 to-card shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" required disabled={isSubmitting || isSubmitted} />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                        disabled={isSubmitting || isSubmitted}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" required disabled={isSubmitting || isSubmitted} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      required
                      disabled={isSubmitting || isSubmitted}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>Message Sent!</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

