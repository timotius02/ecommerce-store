import { Category } from "@/types";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export default async function getCategory(id: string): Promise<Category> {
  const res = await fetch(`${apiURL}/${id}`);
  return res.json();
}
