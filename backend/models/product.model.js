import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
	{
	  make: {
		type: String,
		required: true, // e.g., Toyota, Ford, BMW
	  },
	  model: {
		type: String,
		required: true, // e.g., Camry, Mustang, X5
	  },
	  year: {
		type: Number,
		required: true, // e.g., 2020
	  },
	  price: {
		type: Number,
		required: true, // Price of the car
	  },
	  mileage: {
		type: Number,
		required: true, // e.g., 50000 miles
	  },
	  image: {
		type: String,
		required: true, // URL or path to the car's image
	  },
	  color: {
		type: String, // Optional field for car color
	  },
	  description: {
		type: String, // Optional field for car description
	  },
	  fuelType: {
		type: String, // e.g., Petrol, Diesel, Electric
	  },
	  transmission: {
		type: String, // e.g., Automatic, Manual
	  },
	  condition: {
		type: String, // e.g., New, Used, Certified Pre-owned
	  },
	  location: {
		type: String, // Optional field for the car's location (e.g., city, state)
	  },
	  sellerContact: {
		type: String, // Optional field for the seller's contact info
	  },
	},
	{
	  timestamps: true, // createdAt, updatedAt
	}
  );
  
  const Car = mongoose.model('Car', carSchema);
  

export default Car;
