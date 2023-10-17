import { Size } from "@/types";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export default async function getSizes(): Promise<Size[]> {
  const res = await fetch(apiURL);
  return res.json();
}
