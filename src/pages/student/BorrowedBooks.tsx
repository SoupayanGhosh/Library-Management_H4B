
import { Book, BookOpen, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { toast } from "sonner";

const studentLinks = [
  { href: "/student/dashboard", label: "Dashboard", icon: <Book className="w-4 h-4" /> },
  { href: "/student/borrowed", label: "Borrowed Books", icon: <BookOpen className="w-4 h-4" /> },
  { href: "/student/request", label: "Request Book", icon: <MailOpen className="w-4 h-4" /> },
];

const BorrowedBooks = () => {
  // Mock data
  const borrowedBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      borrowedDate: "2023-04-01",
      dueDate: "2023-05-01",
      isOverdue: false,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      borrowedDate: "2023-03-15",
      dueDate: "2023-04-15",
      isOverdue: true,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      borrowedDate: "2023-03-20",
      dueDate: "2023-04-20",
      isOverdue: false,
    }
  ];

  const handleRenew = (bookId: number) => {
    toast.success(`Book subscription renewed for another month`);
  };

  const handleReturn = (bookId: number) => {
    toast.success(`Book marked for return. Please return to library.`);
  };

  return (
    <DashboardLayout sidebarLinks={studentLinks} title="Student Dashboard">
      <h1 className="text-3xl font-bold mb-6 text-[#221F26]">Borrowed Books</h1>
      
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Borrowed Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {borrowedBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.borrowedDate}</TableCell>
                <TableCell>{book.dueDate}</TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    book.isOverdue 
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {book.isOverdue ? "Overdue" : "Active"}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#6E59A5] border-[#6E59A5]"
                      onClick={() => handleRenew(book.id)}
                    >
                      Renew
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-600"
                      onClick={() => handleReturn(book.id)}
                    >
                      Return
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
};

export default BorrowedBooks;
