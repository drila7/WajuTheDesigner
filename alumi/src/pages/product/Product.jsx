import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Aluminum Sliding Window",
    description: "Energy-efficient sliding window with double glazing and thermal break",
    image: "/src/assets/p1.jpg"
  },
  {
    id: 2,
    name: "Casement Window",
    description: "High-performance casement window with multi-point locking system",
    image: "/src/assets/p2.jpg"
  },
  {
    id: 3,
    name: "Curtain Wall System",
    description: "Modern curtain wall solution for commercial buildings",
    image: "/src/assets/p3.jpg"
  },
  {
    id: 4,
    name: "Aluminum Door",
    description: "Heavy-duty aluminum entrance door with security features",
    image: "/src/assets/p4.jpg"
  },
  {
    id: 5,
    name: "Aluminum Railing",
    description: "Custom aluminum railing systems for balconies and stairs",
    image: "/src/assets/ala1.jpg"
  },
  {
    id: 6,
    name: "Structural Glazing",
    description: "Innovative structural glazing solutions for modern facades",
    image: "/src/assets/ala2.jpg"
  },
  {
    id: 7,
    name: "Aluminum Partition",
    description: "Versatile aluminum partition systems for office spaces",
    image: "/src/assets/ala3.jpg"
  },
  {
    id: 8,
    name: "Skylight System",
    description: "Custom aluminum skylight systems with weather protection",
    image: "/src/assets/ala4.jpg"
  },
  {
    id: 9,
    name: "Window Profile",
    description: "Premium aluminum window profiles for various applications",
    image: "/src/assets/p1.jpg"
  },
  {
    id: 10,
    name: "Door Profile",
    description: "Durable aluminum door profiles with thermal insulation",
    image: "/src/assets/p2.jpg"
  },
  {
    id: 11,
    name: "Facade System",
    description: "Advanced aluminum facade systems for modern architecture",
    image: "/src/assets/p3.jpg"
  },
  {
    id: 12,
    name: "Aluminum Louver",
    description: "Adjustable aluminum louver systems for sun control",
    image: "/src/assets/p4.jpg"
  }
];

export default function Product() {
  return (
    <div className="container mx-auto py-16 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-green-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
          >
            <Card className="overflow-hidden h-full hover:scale-105 transition-transform duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {product.description}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
