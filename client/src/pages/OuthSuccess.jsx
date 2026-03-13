import { useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function OAuthSuccess() {

  const [params] = useSearchParams()
  const navigate = useNavigate()

  useEffect(() => {

    const token = params.get("token")

    if (token) {

      localStorage.setItem("token", token)

      navigate("/timeline")

    } else {

      navigate("/login")

    }

  }, [])

  return <p className="p-10 text-center">Signing you in...</p>

}