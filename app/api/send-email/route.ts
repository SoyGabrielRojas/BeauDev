import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // In a production environment, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll log the data and simulate sending
    console.log("[v0] Contact form submission:", { name, email, message })

    // TODO: Implement actual email sending
    // Example with Resend (you would need to install @resend/node and add RESEND_API_KEY):
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'BeauDev <contacto@beaudev.com>',
    //   to: 'gabrielrojasokk@gmail.com',
    //   subject: `Nuevo mensaje de contacto de ${name}`,
    //   html: `
    //     <h2>Nuevo mensaje de contacto</h2>
    //     <p><strong>Nombre:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Mensaje:</strong></p>
    //     <p>${message}</p>
    //   `
    // })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true, message: "Mensaje enviado exitosamente" })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Error al procesar el mensaje" }, { status: 500 })
  }
}
