import { Color } from "@/types";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export default async function getColors(): Promise<Color[]> {
  const res = await fetch(apiURL);
  return res.json();
}
