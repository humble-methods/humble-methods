import fetch from "node-fetch";

export default async function handler (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body)

  const res = await fetch(
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
          content: requestBody.content
        },
      }),
    }
  );

  if(res.status !== 200 || res.ok !== true) {
    return {
      statusCode: 500,
      body: JSON.stringify({message: "Failed to send email"}),
    };
  }
    
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Subscribe email sent!"}),
  };
}
