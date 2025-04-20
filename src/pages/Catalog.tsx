
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Catalog = () => {
  const mockBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://m.media-amazon.com/images/I/81TLiZrasVL.jpg",
      status: "Available"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://m.media-amazon.com/images/I/51Z9p5AecCL._SY445_SX342_.jpg",
      status: "Checked Out"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      cover: "https://m.media-amazon.com/images/I/61nScdOJ9kL.jpg",
      status: "Available"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      cover: "https://m.media-amazon.com/images/I/71Q1tPupKjL.jpg",
      status: "Available"
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      cover: "https://m.media-amazon.com/images/I/91HPG31dTwL.jpg",
      status: "Checked Out"
    },
    {
      id: 6,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      cover: "https://m.media-amazon.com/images/I/81oAEEwxBWL.jpg",
      status: "Available"
    },
    {
      id: 7,
      title: "Brave New World",
      author: "Aldous Huxley",
      cover: "https://m.media-amazon.com/images/I/91D4YvdC0dL.jpg",
      status: "Available"
    },
    {
      id: 8,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      cover: "https://m.media-amazon.com/images/I/41O+xbW6asL.jpg",
      status: "Checked Out"
    }
  ];



  return (
    <div className="min-h-screen bg-[#F1F0FB] pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#221F26]">Book Catalog</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 w-[300px]"
                placeholder="Search books..."
                type="search"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#221F26]">{book.title}</h3>
                <p className="text-gray-600">{book.author}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    book.status === "Available" 
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {book.status}
                  </span>
                  <Button variant="outline" className="text-[#6E59A5] border-[#6E59A5]">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
