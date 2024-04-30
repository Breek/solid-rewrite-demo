import { cache } from "@solidjs/router";

const post = (id: string) => `https://jsonplaceholder.typicode.com/posts/${id}`;

export type PostDefinition = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchAPI(id: string) {
  const url = post(id)
  const headers: Record<string, string> = { "User-Agent": "chrome" };

  try {
    let response = await fetch(url, { headers });
    let text = await response.text();

    try {
      if (text === null) {
        return { error: "Not found" };
      }
      return JSON.parse(text);
    } catch (e) {
      console.error(`Received from API: ${text}`);
      console.error(e);
      return { error: e };
    }
  } catch (error) {
    return { error };
  }
}

const mapStories = {
  top: "news",
  new: "newest",
  show: "show",
  ask: "ask",
  job: "jobs"
} as const;


export const getPost = cache(async (id: string): Promise<PostDefinition> => {
  "use server";
  return fetchAPI(id);
}, "post");

