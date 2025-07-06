import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";
import { sendContactInquiryEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Send email notification to both recipients
      console.log("About to send email for inquiry:", inquiry.id);
      try {
        const emailSent = await sendContactInquiryEmail({ inquiry });
        console.log("Email send result:", emailSent);
        
        if (!emailSent) {
          console.warn("Email notification failed for inquiry:", inquiry.id);
          // Continue with success response even if email fails
          // This ensures the form submission is recorded even if email delivery has issues
        }
      } catch (emailError) {
        console.error("Email service error:", emailError);
        // Continue with success response even if email fails
      }
      
      console.log("New contact inquiry received and processed:", inquiry.id);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry. Gemma Fowler will contact you shortly.",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please check your form and try again.",
          errors: error.errors
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "There was an error submitting your inquiry. Please try again."
        });
      }
    }
  });

  // Get contact inquiries (for admin purposes)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching contact inquiries"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
