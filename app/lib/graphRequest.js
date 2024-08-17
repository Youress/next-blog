export default async function graphRequest(query) {
  const res = await fetch(
    "https://youess-47031e.ingress-comporellon.ewp.live/graphql",
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    }
  );
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }

}
