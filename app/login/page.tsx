"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        window.location.href = "/admin";
    };

    return (
        <div className="container mt-10 flex justify-center p-5 md:mt-0 md:p-20">
            <Card className="w-[600px]">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Admin Login</CardTitle>
                    <CardDescription>
                        Enter your credentials below to login as admin
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2 mb-4">
                        <Label htmlFor="email" className="mb-2">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="admin email"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password" className="mb-2">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="admin password"
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="flex gap-1" onClick={handleLogin}>
                        <span className="text-lg">Login</span> <ArrowRight />
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
