import mongoose from "mongoose";

const studentCollection= "student";

const studentSchema= new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        require: true,
        unique: true
    }
})

export const studentModel = mongoose.model(studentCollection, studentSchema);