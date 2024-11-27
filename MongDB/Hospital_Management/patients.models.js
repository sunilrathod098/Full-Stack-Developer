import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        diagonsedWith: {
            type: String,
            required: true
        },
        bloodGroup: {
            type: String,
            required: true
        },
        address: {
            type: String,
            enum: ['M', 'F', 'O'],
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        admittedIn: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    },
    { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);