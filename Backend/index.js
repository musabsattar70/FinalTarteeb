const app = require("./app");
const commonConfig = require("./Config/appsettings.json");

// Define the port
const PORT = proces.env.PORT || 7075;

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.error(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
