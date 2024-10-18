import React, { useState, useEffect } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeToggleButton from "@/ThemeToggltButton";
import { useNavigate } from "react-router-dom";
import useUser from "@/store/useUser";

function Auth() {
  const navigate = useNavigate();

  const [loginDeatils, setLoginDeatils] = useState({
    email: "",
    password: "",
  });
  const [signupDeatils, setSignupDeatils] = useState({
    name: "",
    email: "",
    password: "",
  });

  const user = useUser((state) => state.user);
  const login = useUser((state) => state.login);
  const signup = useUser((state) => state.signup);

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginDeatils);
    if (loginDeatils.email === "admin@tarc.com") {
      navigate("/admin");
    } else navigate("/");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupDeatils);

    signup(signupDeatils);
    navigate("/");
  };

  // Example usage of the `user` variable
  useEffect(() => {
    if (user) {
      console.log("User is logged in:", user);
    } else {
      console.log("No user is logged in");
    }
  }, [user]);

  return (
    <>
      <div className="fixed top-0 w-full flex justify-end py-2 px-6 border-b-2">
        <ThemeToggleButton />
      </div>
      <div
        className="
        flex flex-col items-center justify-center h-screen
      "
      >
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter of your Email"
                        onChange={(e) =>
                          setLoginDeatils({
                            ...loginDeatils,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        placeholder="Enter of your password"
                        onChange={(e) =>
                          setLoginDeatils({
                            ...loginDeatils,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  onClick={handleLogin}
                  disabled={!loginDeatils.email || !loginDeatils.password}
                >
                  Login
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* signup */}
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>SignUp</CardTitle>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter of your Name"
                        onChange={(e) => {
                          setSignupDeatils({
                            ...signupDeatils,
                            name: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter of your Email"
                        onChange={(e) =>
                          setSignupDeatils({
                            ...signupDeatils,
                            email: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        placeholder="Enter of your password"
                        onChange={(e) =>
                          setSignupDeatils({
                            ...signupDeatils,
                            password: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Checkbox id="terms" />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  onClick={handleSignup}
                  disabled={
                    !signupDeatils.name ||
                    !signupDeatils.email ||
                    !signupDeatils.password
                  }
                >
                  SignUp
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Auth;
