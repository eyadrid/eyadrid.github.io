import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const formEndpoint = "https://formsubmit.co/ajax/eya.dridi@supcom.tn";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.target);
    formData.append("_subject", "New Portfolio Contact Message");
    formData.append("_captcha", "false");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitMessage("Message sent!");
      e.target.reset();
    } catch {
      setSubmitMessage("Could not send the message. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Titre principal de la page (Toujours centré) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary"> Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary/20 mx-auto rounded-full relative">
            <div className="absolute inset-0 bg-primary w-1/2 rounded-full" />
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* --- COLONNE GAUCHE : Contact Info (Tout à gauche) --- */}
          <div className="space-y-8 flex flex-col items-start text-left">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:eya.dridi@supcom.tn" className="text-muted-foreground hover:text-primary transition-colors">
                    eya.dridi@supcom.tn
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+21658477491" className="text-muted-foreground hover:text-primary transition-colors">
                    +(216) 58 477 491
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Bizerte, Tunisia</span>
                </div>
              </div>
            </div>

            {/* Réseaux Sociaux (Gauche) */}
          </div>

          {/* --- COLONNE DROITE : Formulaire --- */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border/50">
            {/* Titre "Send a Message" au milieu */}
            <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Labels et Inputs alignés à GAUCHE */}
              <div className="flex flex-col items-start">
                <label htmlFor="name" className="text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Votre nom..."
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="email" className="text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div className="flex flex-col items-start">
                <label htmlFor="message" className="text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Bonjour, j'aimerais parler de..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-md bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {submitMessage && (
                <p className="text-sm text-primary bg-primary/10 border border-primary/20 rounded-md px-3 py-2">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};