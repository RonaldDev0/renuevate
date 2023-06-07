import { NextRequest } from 'next/server'
// import nodemailder from 'nodemailer'

export async function POST (req: NextRequest) {
  try {
    const body = await req.json()
    console.log(body)
    return new Response(JSON.stringify(await req.json()))
  } catch (error) {
    console.log(error)
  }
}
