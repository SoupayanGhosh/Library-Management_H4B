
import { useState } from "react";
import { Book, BookOpen, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { toast } from "sonner";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: <Book className="w-4 h-4" /> },
  { href: "/student/borrowed", label: "Borrowed Books", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/student/request", label: "Request Book", icon: <MailOpen className="w-4 h-4" /> },
];

const RequestBook = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      bookTitle: "Dune",
      author: "Frank Herbert",
      requestDate: "2023-04-10",
      status: "pending"
    },
    {
      id: 2,
      bookTitle: "The Hobbit",
      author: "J.R.R. Tolkien",
      requestDate: "2023-04-05",
      status: "approved"
    }
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    // Create a new request with the form data
    const newRequest = {
      id: requests.length + 1,
      bookTitle: formData.get("bookTitle") as string,
      author: formData.get("author") as string,
      requestDate: new Date().toISOString().split("T")[0],
      status: "pending"
    };
    
    setRequests([...requests, newRequest]);
    toast.success("Book request submitted successfully");
    
    // Reset form
    event.currentTarget.reset();
  };

  return (
    <DashboardLayout sidebarLinks={studentLinks} title="Student Dashboard">
      <h1 className="text-3xl font-bold mb-6 text-[#221F26]">Request a Book</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>New Book Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bookTitle">Book Title</Label>
                <Input id="bookTitle" name="bookTitle" placeholder="Enter book title" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="author">Author (if known)</Label>
                <Input id="author" name="author" placeholder="Enter author name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="reason">Why do you need this book?</Label>
                <Textarea 
                  id="reason" 
                  name="reason" 
                  placeholder="Briefly explain why you need this book"
                  className="min-h-[100px]"
                />
              </div>
              
              <Button type="submit" className="w-full bg-[#6E59A5] hover:bg-[#5b4a8c]">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {requests.map((request) => (
                <div key={request.id} className="border rounded-md p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{request.bookTitle}</h3>
                      <p className="text-sm text-gray-500">{request.author}</p>
                    </div>
                    <span 
                      className={`px-3 py-1 rounded-full text-sm ${
                        request.status === "approved"
                          ? "bg-green-100 text-green-800"
                          : request.status === "rejected"
                            ? "bg-red-100 text-red-800"
                            : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">Requested on: {request.requestDate}</p>
                </div>
              ))}
              
              {requests.length === 0 && (
                <p className="text-gray-500 text-center">No requests yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RequestBook;
