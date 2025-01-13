import mongoose from "mongoose";
import Car from "./models/product.model.js";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yka7906:rYSyOblH1bLlHJNB@app-db-cluster.55qel.mongodb.net/CarDB?retryWrites=true&w=majority&appName=app-db-cluster", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

// Add Cars to Database
const addCars = async () => {
  const cars = [
    {
      "make": "Toyota",
      "model": "Camry",
      "year": 2015,
      "price": 15000,
      "mileage": 50000,
      "image": "https://dbz-images.dubizzle.com/images/2024/11/14/7ae0f658c9b7405eba2830440a769c5e-.jpeg?impolicy=dpv",
      "color": "Red",
      "description": "The 2015 Toyota Camry is a reliable sedan offering 178 BHP and 231 Nm of torque from its 2.5L 4-cylinder engine. It delivers excellent fuel efficiency, with a mileage of 14 km/l. Known for its smooth drive and durability, the Camry comes with an automatic transmission, making it an ideal choice for everyday use.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "Used",
      "location": "Dubai",
      "sellerContact": "123-456-7890"
    },
    {
      "make": "Honda",
      "model": "Civic",
      "year": 2018,
      "price": 18000,
      "mileage": 30000,
      "image": "https://www.theglobeandmail.com/resizer/v2/UPODXS3ZFRBTDNULQMZTBU6PE4?auth=0d222b5784c66fd616c139f942a0b984b2ef46521a3cfa919712d4db6c0f8897&width=1200&quality=80",
      "color": "Blue",
      "description": "The 2018 Honda Civic features a 2.0L 4-cylinder engine producing 158 BHP and 187 Nm of torque. Its manual transmission allows for a more engaging driving experience. With a fuel efficiency of 16 km/l, it’s perfect for city commutes while maintaining excellent overall performance and handling.",
      "fuelType": "Petrol",
      "transmission": "Manual",
      "condition": "Used",
      "location": "Abu Dhabi",
      "sellerContact": "234-567-8901"
    },
    {
      "make": "Ford",
      "model": "Mustang",
      "year": 2020,
      "price": 35000,
      "mileage": 15000,
      "image": "https://static.overfuel.com/photos/437/164665/876152301.webp",
      "color": "Black",
      "description": "The 2020 Ford Mustang boasts a 5.0L V8 engine delivering a powerful 450 BHP and 529 Nm of torque. This iconic muscle car accelerates from 0 to 100 km/h in just 4.3 seconds, and its aggressive stance is matched by the thrilling driving experience. It offers a mileage of approximately 10 km/l, perfect for performance enthusiasts.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "New",
      "location": "Dubai",
      "sellerContact": "345-678-9012"
    },
    {
      "make": "BMW",
      "model": "X5",
      "year": 2019,
      "price": 50000,
      "mileage": 25000,
      "image": "https://images.carswitch.com/605540bmw/1814860709935814.jpg",
      "color": "White",
      "description": "The 2019 BMW X5 comes with a 3.0L 6-cylinder engine, producing 335 BHP and 450 Nm of torque. Equipped with an 8-speed automatic transmission, this luxury SUV offers a smooth, refined drive, while delivering a fuel efficiency of around 12 km/l. It's the perfect combination of power, comfort, and versatility.",
      "fuelType": "Diesel",
      "transmission": "Automatic",
      "condition": "Certified Pre-owned",
      "location": "Dubai",
      "sellerContact": "456-789-0123"
    },
    {
      "make": "Nissan",
      "model": "Altima",
      "year": 2017,
      "price": 20000,
      "mileage": 40000,
      "image": "http://example.com/nissan-altima.jpghttps://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2025NIC040022_01_1280_KAD.jpg",
      "color": "Gray",
      "description": "The 2017 Nissan Altima features a 2.5L 4-cylinder engine producing 182 BHP and 244 Nm of torque. Known for its smooth ride, it provides an excellent fuel economy of 15 km/l. This sedan is ideal for long drives, offering a balance of power and efficiency with a spacious interior.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "Used",
      "location": "Sharjah",
      "sellerContact": "567-890-1234"
    },
    {
      "make": "Audi",
      "model": "R8",
      "year": 2021,
      "price": 600000,
      "mileage": 5000,
      "image": "https://www.forzaclienti.com/blobs/stock/14/images/0a34d34d-ae79-419b-80b5-40ecbfe40940.jpg?width=2000&height=1333",
      "color": "Silver",
      "description": "The 2021 Audi R8 comes with a 5.2L V10 engine that generates 562 BHP and 540 Nm of torque. This luxury sports car offers an exhilarating experience, accelerating from 0 to 100 km/h in 3.4 seconds. With a fuel efficiency of 8 km/l, it's designed for those who demand the best in speed and style.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "New",
      "location": "Dubai",
      "sellerContact": "678-901-2345"
    },
    {
      "make": "Porsche",
      "model": "911",
      "year": 2020,
      "price": 550000,
      "mileage": 12000,
      "image": "https://images.finder.porsche.com/652f0b36-7187-42c1-a292-ca9298ef289f/960",
      "color": "Red",
      "description": "The 2020 Porsche 911 features a 3.0L twin-turbocharged 6-cylinder engine producing 443 BHP and 530 Nm of torque. With an acceleration of 0 to 100 km/h in 3.6 seconds, it provides the ultimate performance with luxury. The fuel efficiency is around 9 km/l, making it an iconic choice for enthusiasts.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "New",
      "location": "Dubai",
      "sellerContact": "789-012-3456"
    },
    {
      "make": "Chevrolet",
      "model": "Tahoe",
      "year": 2022,
      "price": 240000,
      "mileage": 10000,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKj8T4KF8rwPYzzd0Az9pwHnYFjDYPOQHEg&s",
      "color": "Black",
      "description": "The 2022 Chevrolet Tahoe is a full-size SUV with a 5.3L V8 engine producing 355 BHP and 519 Nm of torque. It combines powerful performance with comfort, offering a spacious interior, excellent towing capacity, and a fuel efficiency of 13 km/l.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "New",
      "location": "Abu Dhabi",
      "sellerContact": "890-123-4567"
    },
    {
      "make": "Mercedes-Benz",
      "model": "G-Class",
      "year": 2021,
      "price": 650000,
      "mileage": 8000,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFvE-tvovMzJ-4CX-3nwTubmvKQom7SdqNPw&s",
      "color": "White",
      "description": "The 2021 Mercedes-Benz G-Class features a 4.0L V8 engine producing 416 BHP and 610 Nm of torque. Known for its iconic design and rugged off-road capabilities, it offers a comfortable and luxurious ride with a fuel efficiency of around 10 km/l.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "New",
      "location": "Dubai",
      "sellerContact": "901-234-5678"
    },
    {
      "make": "Land Rover",
      "model": "Range Rover",
      "year": 2020,
      "price": 450000,
      "mileage": 15000,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYDBJWLR1ZxNSXYcr2Pa0Fg3sjUDkLQoXmQ&s",
      "color": "Green",
      "description": "The 2020 Range Rover comes with a 3.0L 6-cylinder engine generating 380 BHP and 600 Nm of torque. With luxurious interiors and top-tier off-road capabilities, it provides an elegant driving experience and delivers a fuel efficiency of 11 km/l.",
      "fuelType": "Diesel",
      "transmission": "Automatic",
      "condition": "Certified Pre-owned",
      "location": "Dubai",
      "sellerContact": "012-345-6789"
    },
    {
      "make": "Lamborghini",
      "model": "Huracán",
      "year": 2019,
      "price": 900000,
      "mileage": 10000,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhquFrVEfQX5CFJ9gL7dt13wxiP9AHl2gYg&s",
      "color": "Yellow",
      "description": "The 2019 Lamborghini Huracán features a 5.2L V10 engine producing 610 BHP and 560 Nm of torque. With its aggressive styling and superb acceleration (0-100 km/h in 3.2 seconds), it offers a thrilling experience with a fuel efficiency of around 7 km/l.",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "condition": "New",
      "location": "Dubai",
      "sellerContact": "234-567-8901"
    }
  ]
  

  try {
    const insertedCars = await Car.insertMany(cars);
    console.log("Cars added successfully:", insertedCars);
    process.exit(0);
  } catch (error) {
    console.error("Failed to add cars:", error.message);
    process.exit(1);
  }
};

// Run the script
(async () => {
  await connectDB();
  await addCars();
})();
