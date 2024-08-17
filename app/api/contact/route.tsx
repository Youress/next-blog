// /app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const email = formData.get('email');
  const message = formData.get('message');

  const url = 'https://api.hubapi.com/crm/v3/objects/contacts';

  const body = {
    properties: {
      firstname: firstname as string,
      lastname: lastname as string,
      email: email as string,
      message: message as string
    }
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}` // Replace with your actual PAT
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      const errorData = await response.json();
      return NextResponse.json(errorData, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error: (error as Error).message }, { status: 500 });
  }
}
