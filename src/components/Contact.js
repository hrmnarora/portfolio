import React from "react";
import data from "../data.json";

const Contact = () => {
  const { email, phone, address } = data.contact;

  return (
    <section className="bg-black dark:bg-white text-white dark:text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="grid gap-4">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
