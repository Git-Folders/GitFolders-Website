import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="from-primary flex flex-1 items-center justify-center bg-gradient-to-b to-white px-4">
        <div className="w-full max-w-md p-6 text-center">
          <h1 className="text-text-primary mb-4 text-6xl font-bold">404</h1>
          <h2 className="text-text-primary mb-2 text-2xl font-semibold">
            Page Not Found
          </h2>
          <p className="text-text-secondary mb-6">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="bg-accent hover:bg-accent-hover inline-block rounded-lg p-3 text-white transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
