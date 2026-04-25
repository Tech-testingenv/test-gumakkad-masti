// utils/sendEmail.js
import emailjs from '@emailjs/browser'

export const sendEmail = async (params) => {
  try {
    const res = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      params,
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    return res
  } catch (error) {
    throw error
  }
}
