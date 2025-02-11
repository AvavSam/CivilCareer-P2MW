export default async function ServerSideRenderedComponent(title: string) {
  const dataVideo = await fetch("http://localhost:3000/api/v1/getVideo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  const data = await dataVideo.json();
  return data;
}
