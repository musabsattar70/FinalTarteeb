const express = require("express");
const cors = require("cors");

const fs = require("fs");
const path = require("path");

const ReportsRoutes = require("./Routes/ReportsRoutes");
const MediaRoutes = require("./Routes/MediaRoutes");
const AdminRoutes = require("./Routes/AdminRoutes");
const EducationalBackgroundRoutes = require("./Routes/EducationalBackgroundRoutes");
const TeachingHistoryRoutes = require("./Routes/TeachingHistoryRoutes");
const StaffAppointmentRoutes = require("./Routes/StaffAppointmentRoutes");
const AttendedConferencesRoutes = require("./Routes/AttendedConferencesRoutes");
const ClubPatronageRoutes = require("./Routes/ClubPatronageRoutes");
const CommitteeMembershipRoutes = require("./Routes/CommitteeMembershipRoutes");
const CommunityServiceRoutes = require("./Routes/CommunityServiceRoutes");
const PublicationRoutes = require("./Routes/PublicationRoutes");
const GrantsAvailedRoutes = require("./Routes/GrantsAvailedRoutes");
const WorkshopRoutes = require("./Routes/WorkshopRoutes");
const SupervisionRoutes = require("./Routes/SupervisionRoutes");

// Initialize Express app
const app = express();

// Body parser middleware
app.use(express.json());

// Configure CORS options
const corsOptions = {
    origin: "*", // Update this to your frontend origin
    exposedHeaders: ["Content-Disposition"], // Expose Content-Disposition header
};

// Enable CORS with the configured options
app.use(cors(corsOptions));

// Database Connection
require("./DbConnection");

// Static Images
app.use("/images", express.static(path.join(__dirname, "images")));

// Reports Generation Routes
app.use("/api/reports/", ReportsRoutes);

// Media Upload Route
app.use("/api/media/", MediaRoutes);

// Admin Routes
app.use("/api/admin/", AdminRoutes);

// Educational background Routes
app.use("/api/educational-background", EducationalBackgroundRoutes);

// Educational background Routes
app.use("/api/teaching-history", TeachingHistoryRoutes);

// Staff Appointment Routes
app.use("/api/staff-appointment", StaffAppointmentRoutes);

// Attended Conferences Routes
app.use("/api/attended-conferences", AttendedConferencesRoutes);

// Attended Conferences Routes
app.use("/api/club-patronage", ClubPatronageRoutes);

// Attended Conferences Routes
app.use("/api/committee-membership", CommitteeMembershipRoutes);

// Community Service Routes
app.use("/api/community-service", CommunityServiceRoutes);

// Publication Routes
app.use("/api/publication", PublicationRoutes);

// Grants Availed Routes
app.use("/api/grants-availed", GrantsAvailedRoutes);

// Workshop Routes
app.use("/api/workshop", WorkshopRoutes);

// Supervision Routes
app.use("/api/supervision", SupervisionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send({
        Message: "Internal Server Error",
    });
});

module.exports = app;
