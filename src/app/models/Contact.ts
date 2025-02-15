import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  source: string;
  attributes: Record<string, any>;
  client_id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    source: { type: String, required: true },
    attributes: { type: Object, default: {} },
    client_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
