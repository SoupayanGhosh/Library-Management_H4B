
import { useState } from "react";
import { Book, User, MailOpen, Calendar, Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
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

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <Calendar className="w-4 h-4" /> },
  { href: "/admin/books", label: "Manage Books", icon: <Book className="w-4 h-4" /> },
  { href: "/admin/users", label: "Manage Users", icon: <User className="w-4 h-4" /> },
  { href: "/admin/requests", label: "Book Requests", icon: <MailOpen className="w-4 h-4" /> },
];

const ManageBooks = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      quantity: 5,
      availableQuantity: 3,
      category: "Fiction"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      isbn: "9780061120084",
      quantity: 3,
      availableQuantity: 1,
      category: "Fiction"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      isbn: "9780451524935",
      quantity: 4,
      availableQuantity: 2,
      category: "Science Fiction"
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      isbn: "9780547928227",
      quantity: 2,
      availableQuantity: 0,
      category: "Fantasy"
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenDialog = (book: any = null) => {
    setCurrentBook(book);
    setIsEditing(!!book);
    setIsDialogOpen(true);
  };

  const handleSaveBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const bookData = {
      id: isEditing ? currentBook.id : books.length + 1,
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      isbn: formData.get("isbn") as string,
      quantity: Number(formData.get("quantity")),
      availableQuantity: isEditing 
        ? currentBook.availableQuantity 
        : Number(formData.get("quantity")),
      category: formData.get("category") as string
    };
    
    if (isEditing) {
      setBooks(books.map(book => book.id === bookData.id ? bookData : book));
      toast.success("Book updated successfully");
    } else {
      setBooks([...books, bookData]);
      toast.success("Book added successfully");
    }
    
    setIsDialogOpen(false);
  };

  const handleDeleteBook = (id: number) => {
    setBooks(books.filter(book => book.id !== id));
    toast.success("Book deleted successfully");
  };

  return (
    <DashboardLayout sidebarLinks={adminLinks} title="Admin Dashboard">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#221F26]">Manage Books</h1>
        <Button 
          onClick={() => handleOpenDialog()}
          className="bg-[#6E59A5] hover:bg-[#5b4a8c]"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Book
        </Button>
      </div>

      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>ISBN</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell className="font-medium">{book.title}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>{book.quantity}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    book.availableQuantity > 0
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {book.availableQuantity}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleOpenDialog(book)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 text-red-600 border-red-600"
                      onClick={() => handleDeleteBook(book.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Book Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? "Edit Book" : "Add New Book"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveBook} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  name="title" 
                  defaultValue={currentBook?.title || ""} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input 
                  id="author" 
                  name="author" 
                  defaultValue={currentBook?.author || ""} 
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="isbn">ISBN</Label>
                <Input 
                  id="isbn" 
                  name="isbn" 
                  defaultValue={currentBook?.isbn || ""} 
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input 
                  id="category" 
                  name="category" 
                  defaultValue={currentBook?.category || ""} 
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input 
                id="quantity" 
                name="quantity" 
                type="number" 
                min="1"
                defaultValue={currentBook?.quantity || "1"} 
                required 
              />
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-[#6E59A5] hover:bg-[#5b4a8c]">
                {isEditing ? "Update Book" : "Add Book"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default ManageBooks;
