import bcrypt from "bcryptjs"
import User from "../models/User.js"
import { generateToken } from "../utils/generateToken.js"


export const registerService = async (name, email, password) => {

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw new Error("Email already in use")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  const token = generateToken(user._id)

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  }
}


export const loginService = async (email, password) => {

  const user = await User.findOne({ email }).select("+password")

  if (!user) {
    throw new Error("Invalid credentials")
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error("Invalid credentials")
  }

  const token = generateToken(user._id)

  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  }
}