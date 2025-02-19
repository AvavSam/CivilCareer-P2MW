export async function ServerSideRenderedComponent(title: string) {
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

export function GenerateOrderID(): string {
  const now = new Date();
  const timestamp =
    now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    now.getDate().toString().padStart(2, "0") +
    now.getHours().toString().padStart(2, "0") +
    now.getMinutes().toString().padStart(2, "0") +
    now.getSeconds().toString().padStart(2, "0");

  const randomString = Math.random().toString(36).substring(2, 6).toUpperCase();

  return `${timestamp}${randomString}`;
}

export function formatDate(isoString: any) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
