import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    dateOfVisit: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    age: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
);

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);