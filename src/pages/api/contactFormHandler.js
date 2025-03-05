export default async function handler (req, res) {
  if (req.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(req.body)

  try{
    const contactUsRes = await fetch(
      `${process.env.URL}/.netlify/functions/emails/contact-us`,
      {
        headers: {
          "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
          from: "contact-form@humblemethods.com",
          to: "hello@humblemethods.com",
          subject: "Inquiry from Humble Methods website",
          parameters: {
            name: requestBody.name,
            email: requestBody.email,
            phone: requestBody.phone,
            company: requestBody.company,
            message: requestBody.message
          },
        }),
      }
    );

    if(contactUsRes.status !== 200) {
      return res.status(500).json({message: "Something went wrong!"})
    }

    return res.status(200).json({message: "Message sent!"})

  } catch {
    return res.status(500).json({message: "Something went wrong!"})
  }
}
