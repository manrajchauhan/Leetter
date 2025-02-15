import mongoose, { Schema, Document } from "mongoose";

export interface ITemplate extends Document {
  title: string;
  category: "Utility" | "Marketing" | "Promotions" | "Notifications" | "Updates" | "Reminders";
  content: string;
  body_params?: string[];
  buttons?: { text: string; type?: string }[];
  createdAt: Date;
  updatedAt: Date;
}

const TemplateLibrarySchema = new Schema<ITemplate>(
  {
    title: { type: String, required: true, trim: true }, // Changed from name → title
    category: {
      type: String,
      required: true,
      enum: ["Utility", "Marketing", "Promotions", "Notifications", "Updates", "Reminders"],
    },
    content: { type: String, required: true },
    body_params: { type: [String], default: [] },
    buttons: [
      {
        text: { type: String, required: true },
        type: { type: String, default: "quick_reply" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.TemplateLibrary ||
  mongoose.model<ITemplate>("TemplateLibrary", TemplateLibrarySchema);
