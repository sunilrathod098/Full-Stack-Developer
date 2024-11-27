import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    quilification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: Number,
        required: true
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ]
},
    { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);