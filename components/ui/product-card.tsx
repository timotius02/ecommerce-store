"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import Link from "next/link";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    cart.addItem(data);
  };
  return (
    <Link
      href={`/product/${data.id}`}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Product Image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transtion absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm  text-gray-500">{data.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </Link>
  );
}
