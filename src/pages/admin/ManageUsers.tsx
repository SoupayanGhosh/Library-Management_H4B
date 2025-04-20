
import { useState } from "react";
import { Book, User, MailOpen, Calendar, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { toast } from "sonner";

const adminLinks = [
  { href: "/admin/dashboard", label: "Dashboard", icon: <Calendar className="w-4 h-4" /> },
  { href: "/admin/books", label: "Manage Books", icon: <Book className="w-4 h-4" /> },
  { href: "/admin/users", label: "Manage Users", icon: <User className="w-4 h-4" /> },
  { href: "/admin/requests", label: "Book Requests", icon: <MailOpen className="w-4 h-4" /> },
];

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      role: "student",
      status: "active",
      booksCheckedOut: 2
    },
    {
      id: 2,
      name: "Maya Patel",
      email: "maya@example.com",
      role: "student",
      status: "active",
      booksCheckedOut: 1
    },
    {
      id: 3,
      name: "Sam Wilson",
      email: "sam@example.com",
      role: "student",
      status: "inactive",
      booksCheckedOut: 0
    },
    {
      id: 4,
      name: "Admin User",
      email: "admin@example.com",
      role: "admin",
      status: "active",
      booksCheckedOut: 0
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  const handleOpenDialog = (user: any) => {
    setCurrentUser(user);
    setIsDialogOpen(true);
  };

  const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const userData = {
      ...currentUser,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      status: formData.get("status") as string,
    };
    
    setUsers(users.map(user => user.id === userData.id ? userData : user));
    toast.success("User updated successfully");
    setIsDialogOpen(false);
  };

  const handleDeleteUser = (id: number) => {
    // Do not allow deleting your own admin account
    if (id === 4) {
      toast.error("Cannot delete the main admin account");
      return;
    }
    
    setUsers(users.filter(user => user.id !== id));
    toast.success("User deleted successfully");
  };

  return (
    <DashboardLayout sidebarLinks={adminLinks} title="Admin Dashboard">
      <h1 className="text-3xl font-bold mb-6 text-[#221F26]">Manage Users</h1>
      
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Books Checked Out</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="capitalize">{user.role}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell>{user.booksCheckedOut}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => handleOpenDialog(user)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 text-red-600 border-red-600"
                      onClick={() => handleDeleteUser(user.id)}
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

      {/* Edit User Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdateUser} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                name="name" 
                defaultValue={currentUser?.name || ""} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email"
                defaultValue={currentUser?.email || ""} 
                required 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select name="role" defaultValue={currentUser?.role || "student"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" defaultValue={currentUser?.status || "active"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" className="bg-[#6E59A5] hover:bg-[#5b4a8c]">
                Update User
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default ManageUsers;
