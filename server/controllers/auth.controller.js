import { validationResult } from "express-validator"
import { registerService, loginService } from "../services/auth.service.js"


export const register = async (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {

    const { name, email, password } = req.body

    const result = await registerService(name, email, password)

    res.status(201).json(result)

  } catch (error) {

    res.status(400).json({ message: error.message })

  }

}


export const login = async (req, res) => {

  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {

    const { email, password } = req.body

    const result = await loginService(email, password)

    res.json(result)

  } catch (error) {

    res.status(400).json({ message: error.message })

  }

}


export const getMe = async (req, res) => {

  try {

    res.json({
      user: req.user
    })

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch user"
    })

  }

}