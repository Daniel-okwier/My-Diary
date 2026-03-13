import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import api from "@/services/api"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Signup(){

  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)
      setError("")

      const res = await api.post("/auth/register", form)

      localStorage.setItem("token", res.data.token)

      navigate("/timeline")

    } catch (err) {

      setError(
        err.response?.data?.message || "Signup failed"
      )

    } finally {

      setLoading(false)

    }

  }

  const handleGoogleSignup = () => {

    window.location.href =
      "http://localhost:5000/api/oauth/google"

  }

  return(

    <div className="flex items-center justify-center min-h-screen bg-app">

      <Card className="w-[400px]">

        <CardHeader>
          <CardTitle className="font-diary text-2xl">
            Create your account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          {/* GOOGLE SIGNUP */}

          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignup}
          >
            Continue with Google
          </Button>

          {/* DIVIDER */}

          <div className="flex items-center gap-3 text-xs text-muted">

            <div className="flex-1 h-px bg-border"></div>

            OR

            <div className="flex-1 h-px bg-border"></div>

          </div>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <Input
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              required
            />

            <Input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? "Creating..." : "Sign Up"}
            </Button>

          </form>

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