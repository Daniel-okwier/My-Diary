import { Router } from "express"
import passport from "passport"
import { generateToken } from "../utils/generateToken.js"

const router = Router()


router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)


router.get(
  "/google/callback",

  passport.authenticate("google", { session: false }),

  (req, res) => {

    const token = generateToken(req.user._id)

    res.redirect(`http://localhost:5173/oauth-success?token=${token}`)

  }

)

export default router