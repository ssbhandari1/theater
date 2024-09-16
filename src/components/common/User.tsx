import React from "react";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";

export default function UserCard({ data, deadpool }: any) {
  const url = "https://image.tmdb.org/t/p/original";
  // const castProfile =url + data?.profile_path;
  const castProfile = data?.profile_path ? url + data?.profile_path : deadpool;
  return (
    <>
      <div className="max-w-[300px] w-full flex flex-col items-center gap-2">
        <div className="flex  w-[180px] h-[180px] rounded-full bg-gray-500">
          <Image
            alt=""
            className="rounded-full"
            width={280}
            height={280}
            src={castProfile}
            style={{
              color: "black",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="rounded-lg">
          <h3 className="text-xl font-semibold">Cate Blanchett</h3>
        </div>
        <div className="rounded-lg">
          <p className="text-slate-500">Lilith</p>
        </div>
      </div>
    </>
  );
}

// <div className="max-w-[300px] w-full flex flex-col  gap-3">
// <Skeleton className="flex rounded-full w-[180px] h-[180px]" />
// <Skeleton className="h-3 w-3/5 rounded-lg" />
// <Skeleton className="h-3 w-4/5 rounded-lg" />
// </div>
