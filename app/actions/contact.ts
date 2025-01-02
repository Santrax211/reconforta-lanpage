'use server'

export async function sendContactForm(formData: FormData) {
  try {
    // Extraer los datos del formulario
    const nombre = formData.get('nombre')
    const email = formData.get('email')
    const mensaje = formData.get('mensaje')

    // Validación básica
    if (!email || !mensaje) {
      return {
        success: false,
        message: 'Por favor, complete todos los campos requeridos.'
      }
    }

    // Aquí puedes agregar la lógica para enviar el email
    // Por ejemplo, usando un servicio de email como SendGrid, Nodemailer, etc.
    
    // Simulamos un delay para demostración
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Por ahora, solo registramos los datos
    console.log('Formulario recibido:', { nombre, email, mensaje })

    return {
      success: true,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    return {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
    }
  }
}

