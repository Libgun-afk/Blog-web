"use client";

import Link from "next/link";

export const Card = ({ id, cover_image, tag, title, published_at }) => {
  return (
    <Link href={`/single/${id}`} className="w-[380px]">
      <div className="flex flex-col gap-4 rounded-md">
        <img src={cover_image} alt="" />
        <div> {tag} </div>
        <div>{title}</div>
        <div>{published_at}</div>
      </div>
    </Link>
  );
};
