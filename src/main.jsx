import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import AdminUsers from "./pages/admin/Users.jsx";
import AdminCars from "./pages/admin/Cars.jsx";
import AdminBookings from "./pages/admin/Bookings.jsx";
import AdminSettings from "./pages/admin/Settings.jsx";
import CustomerLayout from "./pages/customer/CustomerLayout.jsx";
import Profile from "./pages/customer/Profile.jsx";
import MyBookings from "./pages/customer/MyBookings.jsx";
import Payments from "./pages/customer/Payments.jsx";
import Support from "./pages/customer/Support.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminUsers />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="cars" element={<AdminCars />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="/dashboard" element={<CustomerLayout />}>
          <Route index element={<MyBookings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="payments" element={<Payments />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
