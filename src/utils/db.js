import mongoose from "mongoose";

const connect = async () => {


  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection established successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);  // Log the exact error message
    throw new Error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connect;
