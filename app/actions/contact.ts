'use server'

export async function sendContactForm(formData: FormData) {
  try {
    const response = await fetch('https://formspree.io/f/mrbbopgr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      return {
        success: true,
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
      }
    } else {
      throw new Error('Failed to send the message');
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    return {
      success: false,
      message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
    }
  }
}

