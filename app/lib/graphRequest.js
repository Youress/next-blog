export default async function graphRequest(query) {
  try {
    const res = await fetch(
      "https://youess-47031e.ingress-comporellon.ewp.live/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query)
      }
    );

    // Log response text for debugging
    const text = await res.text();

    // Try to parse the response as JSON
    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return { error: error.message };
  }
}
