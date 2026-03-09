import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Signup(){

  return(

    <div className="flex items-center justify-center min-h-screen bg-app">

      <Card className="w-[400px]">

        <CardHeader>
          <CardTitle className="font-diary text-2xl">
            Create your account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          <Input placeholder="Full name"/>

          <Input placeholder="Email"/>

          <Input type="password" placeholder="Password"/>

          <Button className="w-full">
            Sign Up
          </Button>

          <p className="text-sm text-muted text-center">

            Already have an account?

            <Link
              to="/login"
              className="text-primary ml-1"
            >
              Login
            </Link>

          </p>

        </CardContent>

      </Card>

    </div>

  )

}