import mongoose from "mongoose";

const courseShema = new mongoose.Schema (
  {

  }
)

// on crée un model Course à partir du shema courseShema
const Course = mongoose.model("courses", courseShema);
export default Course;
