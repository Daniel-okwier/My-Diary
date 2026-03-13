import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Login() {

  return (

    <div className="flex items-center justify-center min-h-screen bg-app">

      <Card className="w-[400px]">

        <CardHeader>
          <CardTitle className="font-diary text-2xl">
            Login to MyDiary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Input placeholder="Email"/>

          <Input type="password" placeholder="Password"/>

          <Button className="w-full">
            Login
          </Button>

          <p className="text-sm text-muted text-center">

            Don't have an account?

            <Link
              to="/signup"
              className="text-primary ml-1"
            >
              Sign up
            </Link>

          </p>

        </CardContent>

      </Card>

    </div>

  )

}