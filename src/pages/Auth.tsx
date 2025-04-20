
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication - in a real app, this would validate with a backend
    toast.success("Login successful");
    
    // Redirect based on role (using form data)
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;
    
    // Simple role determination based on email (for demo purposes)
    const isAdmin = email.includes("admin");
    navigate(isAdmin ? "/admin/dashboard" : "/student/dashboard");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Account created successfully");
    navigate(role === "admin" ? "/admin/dashboard" : "/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F1F0FB] flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl text-[#221F26]">Welcome to LibraryHub</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full bg-[#6E59A5] hover:bg-[#5b4a8c]">Sign In</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form className="space-y-4" onSubmit={handleRegister}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">Email</Label>
                  <Input id="reg-email" name="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password">Password</Label>
                  <Input id="reg-password" name="password" type="password" placeholder="Create a password" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Account Type</Label>
                  <Select defaultValue="student" onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="admin">Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-gray-500">
                    {role === "admin" ? "Administrator accounts have full library management rights" : "Student accounts can borrow books and manage subscriptions"}
                  </p>
                </div>
                <Button type="submit" className="w-full bg-[#6E59A5] hover:bg-[#5b4a8c]">Create Account</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
