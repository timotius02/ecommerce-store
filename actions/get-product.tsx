import { Product } from "@/types";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export default async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${apiURL}/${id}`);
  return res.json();
}
