"use client";
import { useQuery } from "@tanstack/react-query";
import Main from "@/components/Main/main";
import { getAllProducts } from "@/apis/products.apis";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const listIPhone = data?.products.filter((iphone) => iphone.type === "phone");
  const listMacbook = data?.products.filter(
    (macbook) => macbook.type === "macbook"
  );

  return (
    <div className="row">
      <div className="grid grid-cols-12 gap-4 m-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Main data={listIPhone} type="iPhone" />
            <Main data={listMacbook} type="MacBook" />
          </>
        )}
      </div>
    </div>
  );
}
