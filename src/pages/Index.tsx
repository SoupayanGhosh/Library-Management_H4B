
import { Button } from "@/components/ui/button";
import { BookOpen, Search, Library } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F1F0FB] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-[#221F26] mb-6">
            Your Digital Library Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover, borrow, and manage your library experience with ease.
            Access thousands of books at your fingertips.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/catalog">
              <Button className="bg-[#6E59A5] hover:bg-[#5b4a8c]">
                Browse Collection
                <BookOpen className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="outline" className="border-[#6E59A5] text-[#6E59A5]">
                Join Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <div className="text-center p-6">
            <div className="bg-[#D6BCFA] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-[#6E59A5]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
            <p className="text-gray-600">Find your next read with our powerful search system</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-[#FDE1D3] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-8 w-8 text-[#6E59A5]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Checkout</h3>
            <p className="text-gray-600">Borrow books with just a few clicks</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-[#D6BCFA] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Library className="h-8 w-8 text-[#6E59A5]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Your Books</h3>
            <p className="text-gray-600">Manage your borrowed books and due dates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
