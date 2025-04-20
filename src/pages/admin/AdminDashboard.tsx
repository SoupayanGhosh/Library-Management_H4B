
import { Book, User, MailOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <Calendar className="w-4 h-4" /> },
  { href: "/admin/books", label: "Manage Books", icon: <Book className="w-4 h-4" /> },
  { href: "/admin/users", label: "Manage Users", icon: <User className="w-4 h-4" /> },
  { href: "/admin/requests", label: "Book Requests", icon: <MailOpen className="w-4 h-4" /> },
];

const AdminDashboard = () => {
  // Mock data
  const statsData = [
    { title: "Total Books", value: 256, change: "+12%", color: "bg-blue-100 text-blue-800" },
    { title: "Active Users", value: 124, change: "+5%", color: "bg-green-100 text-green-800" },
    { title: "Book Requests", value: 18, change: "+24%", color: "bg-amber-100 text-amber-800" },
    { title: "Overdue Returns", value: 7, change: "-3%", color: "bg-red-100 text-red-800" },
  ];
  
  const recentRequests = [
    { id: 1, user: "Alex Johnson", book: "Dune", date: "2023-04-18", status: "pending" },
    { id: 2, user: "Maya Patel", book: "The Hobbit", date: "2023-04-17", status: "approved" },
    { id: 3, user: "Sam Wilson", book: "Pride and Prejudice", date: "2023-04-15", status: "pending" },
  ];

  return (
    <DashboardLayout sidebarLinks={adminLinks} title="Admin Dashboard">
      <h1 className="text-3xl font-bold mb-6 text-[#221F26]">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsData.map((item, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold">{item.value}</p>
                <span className={`${item.color} px-3 py-1 rounded-full text-sm`}>
                  {item.change}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Book Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <div key={request.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{request.book}</p>
                    <p className="text-sm text-gray-500">Requested by {request.user}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span 
                      className={`px-2 py-1 rounded-full text-xs ${
                        request.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {request.status}
                    </span>
                    <span className="text-sm text-gray-500">{request.date}</span>
                  </div>
                </div>
              ))}
              
              <Link to="/admin/requests" className="text-[#6E59A5] hover:underline text-sm block text-center">
                View all requests
              </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/admin/books">
              <div className="bg-[#F1F0FB] hover:bg-[#E5E2F6] p-4 rounded-md flex items-center gap-3 transition-colors cursor-pointer">
                <Book className="text-[#6E59A5] w-5 h-5" />
                <span>Add New Book</span>
              </div>
            </Link>
            <Link to="/admin/users">
              <div className="bg-[#F1F0FB] hover:bg-[#E5E2F6] p-4 rounded-md flex items-center gap-3 transition-colors cursor-pointer">
                <User className="text-[#6E59A5] w-5 h-5" />
                <span>Manage Users</span>
              </div>
            </Link>
            <Link to="/admin/requests">
              <div className="bg-[#F1F0FB] hover:bg-[#E5E2F6] p-4 rounded-md flex items-center gap-3 transition-colors cursor-pointer">
                <MailOpen className="text-[#6E59A5] w-5 h-5" />
                <span>Review Book Requests</span>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
