import mongoose from "mongoose";
import Car from "../models/product.model.js";

// Get all cars
export const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.error("Error in fetching cars:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Create a new car
export const createCar = async (req, res) => {
  const {
    make,
    model,
    year,
    price,
    mileage,
    image,
    color,
    description,
    fuelType,
    transmission,
    condition,
    location,
    sellerContact,
  } = req.body; // User will send this data

  // Validate required fields
  if (!make || !model || !year || !price || !mileage || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields" });
  }

  const newCar = new Car({
    make,
    model,
    year,
    price,
    mileage,
    image,
    color,
    description,
    fuelType,
    transmission,
    condition,
    location,
    sellerContact,
  });

  try {
    await newCar.save();
    res.status(201).json({ success: true, data: newCar });
  } catch (error) {
    console.error("Error in creating car:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Update a car
export const updateCar = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Car ID" });
  }

  try {
    const updatedCar = await Car.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, data: updatedCar });
  } catch (error) {
    console.error("Error in updating car:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// Delete a car
export const deleteCar = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid Car ID" });
  }

  try {
    const deletedCar = await Car.findByIdAndDelete(id);
    if (!deletedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error in deleting car:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
