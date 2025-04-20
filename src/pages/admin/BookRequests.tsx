
import { useState } from "react";
import { Book, User, MailOpen, Calendar, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <Calendar className="w-4 h-4" /> },
  { href: "/admin/books", label: "Manage Books", icon: <Book className="w-4 h-4" /> },
  { href: "/admin/users", label: "Manage Users", icon: <User className="w-4 h-4" /> },
  { href: "/admin/requests", label: "Book Requests", icon: <MailOpen className="w-4 h-4" /> },
];

const BookRequests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      user: "Alex Johnson",
      email: "alex@example.com",
      bookTitle: "Dune",
      author: "Frank Herbert",
      requestDate: "2023-04-18",
      reason: "Required for my science fiction literature class.",
      status: "pending"
    },
    {
      id: 2,
      user: "Maya Patel",
      email: "maya@example.com",
      bookTitle: "The Hobbit",
      author: "J.R.R. Tolkien",
      requestDate: "2023-04-17",
      reason: "Personal interest in fantasy literature.",
      status: "approved"
    },
    {
      id: 3,
      user: "Sam Wilson",
      email: "sam@example.com",
      bookTitle: "Pride and Prejudice",
      author: "Jane Austen",
      requestDate: "2023-04-15",
      reason: "Required reading for English literature course.",
      status: "pending"
    },
    {
      id: 4,
      user: "Taylor Reed",
      email: "taylor@example.com",
      bookTitle: "The Alchemist",
      author: "Paulo Coelho",
      requestDate: "2023-04-12",
      reason: "Recommended by my philosophy professor.",
      status: "rejected"
    }
  ]);

  const handleApproveRequest = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "approved" } : req
    ));
    toast.success("Request approved");
  };

  const handleRejectRequest = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "rejected" } : req
    ));
    toast.success("Request rejected");
  };

  const pendingRequests = requests.filter(req => req.status === "pending");
  const processedRequests = requests.filter(req => req.status !== "pending");

  return (
    <DashboardLayout sidebarLinks={adminLinks} title="Admin Dashboard">
      <h1 className="text-3xl font-bold mb-6 text-[#221F26]">Book Requests</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Pending Requests ({pendingRequests.length})</h2>
          
          {pendingRequests.length === 0 ? (
            <p className="text-gray-500">No pending requests</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingRequests.map((request) => (
                <Card key={request.id} className="border-l-4 border-l-amber-400">
                  <CardHeader>
                    <CardTitle>{request.bookTitle}</CardTitle>
                    <CardDescription>by {request.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Requested by</span>
                        <span className="font-medium">{request.user}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Contact</span>
                        <span>{request.email}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Date</span>
                        <span>{request.requestDate}</span>
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-500 text-sm mb-1">Reason:</p>
                        <p className="text-sm bg-gray-50 p-2 rounded">{request.reason}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-600"
                      onClick={() => handleRejectRequest(request.id)}
                    >
                      <X className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-[#6E59A5] hover:bg-[#5b4a8c]"
                      onClick={() => handleApproveRequest(request.id)}
                    >
                      <Check className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Processed Requests ({processedRequests.length})</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processedRequests.map((request) => (
              <Card 
                key={request.id} 
                className={`border-l-4 ${
                  request.status === "approved" 
                    ? "border-l-green-400" 
                    : "border-l-red-400"
                }`}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base">{request.bookTitle}</CardTitle>
                    <span 
                      className={`px-2 py-1 rounded-full text-xs ${
                        request.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {request.status}
                    </span>
                  </div>
                  <CardDescription>Requested by {request.user}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Processed on {request.requestDate}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookRequests;
