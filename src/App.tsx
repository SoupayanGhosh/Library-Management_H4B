
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";
import BorrowedBooks from "./pages/student/BorrowedBooks";
import RequestBook from "./pages/student/RequestBook";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageBooks from "./pages/admin/ManageBooks";
import ManageUsers from "./pages/admin/ManageUsers";
import BookRequests from "./pages/admin/BookRequests";
import { useState } from "react";

const App = () => {
  // Move the queryClient inside the component
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/auth" element={<Auth />} />
            
            {/* Student Panel Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/borrowed" element={<BorrowedBooks />} />
            <Route path="/student/request" element={<RequestBook />} />
            
            {/* Admin Panel Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/books" element={<ManageBooks />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/requests" element={<BookRequests />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
