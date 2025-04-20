
import { Book, BookOpen, MailOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Link } from "react-router-dom";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: <Book className="w-4 h-4" /> },
  { href: "/student/borrowed", label: "Borrowed Books", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/student/request", label: "Request Book", icon: <MailOpen className="w-4 h-4" /> },
];

const StudentDashboard = () => {
  // Mock data
  const overviewData = [
    { title: "Current Borrows", value: 3, color: "bg-blue-100 text-blue-800" },
    { title: "Pending Requests", value: 2, color: "bg-amber-100 text-amber-800" },
    { title: "Due Soon", value: 1, color: "bg-red-100 text-red-800" },
  ];
  
  const recentActivity = [
    { date: "2023-04-15", action: "Borrowed", book: "The Great Gatsby" },
    { date: "2023-04-12", action: "Returned", book: "To Kill a Mockingbird" },
    { date: "2023-04-08", action: "Requested", book: "1984" },
  ];

  return (
    <DashboardLayout sidebarLinks={studentLinks} title="Student Dashboard">
      <h1 className="text-3xl font-bold mb-6 text-[#221F26]">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {overviewData.map((item, idx) => (
          <Card key={idx}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-bold">{item.value}</p>
                <span className={`${item.color} px-3 py-1 rounded-full text-sm`}>
                  {item.title}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{activity.book}</p>
                    <p className="text-sm text-gray-500">{activity.action}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link to="/student/request">
              <div className="bg-[#F1F0FB] hover:bg-[#E5E2F6] p-4 rounded-md flex items-center gap-3 transition-colors cursor-pointer">
                <MailOpen className="text-[#6E59A5] w-5 h-5" />
                <span>Request a New Book</span>
              </div>
            </Link>
            <Link to="/student/borrowed">
              <div className="bg-[#F1F0FB] hover:bg-[#E5E2F6] p-4 rounded-md flex items-center gap-3 transition-colors cursor-pointer">
                <BookOpen className="text-[#6E59A5] w-5 h-5" />
                <span>View Borrowed Books</span>
              </div>
            </Link>
            <Link to="/catalog">
              <div className="bg-[#F1F0FB] hover:bg-[#E5E2F6] p-4 rounded-md flex items-center gap-3 transition-colors cursor-pointer">
                <Book className="text-[#6E59A5] w-5 h-5" />
                <span>Browse Books</span>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
