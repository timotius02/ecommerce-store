import { Category } from "@/types";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export default async function getCategories(): Promise<Category[]> {
  const res = await fetch(apiURL, { next: { revalidate: 100 } });
  return res.json();
}
