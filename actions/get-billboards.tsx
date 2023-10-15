import { Billboard } from "@/types";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${apiURL}/${id}`);
  return res.json();
}
