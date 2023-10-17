import { Product } from "@/types";
import qs from "query-string";

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export default async function getProducts(query: Query): Promise<Product[]> {
  const url = qs.stringifyUrl({
    url: apiURL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await fetch(url);
  return res.json();
}
