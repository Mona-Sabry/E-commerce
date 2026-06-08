'use client'

import React, { createContext, useContext, useEffect, useState } from "react";

type WishlistContextType = {
  wishlist: any[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
  loading: boolean;
};

export const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // 🔹 GET wishlist on load
  const getWishlist = async () => {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers: {
            token: token || "",
          },
        }
      );

      const data = await res.json();
      setWishlist(data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  //  ADD
  const addToWishlist = async (productId: string) => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: token || "",
          },
          body: JSON.stringify({ productId }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setWishlist(data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  
  const removeFromWishlist = async (productId: string) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
          method: "DELETE",
          headers: {
            token: token || "",
          },
        }
      );

      const data = await res.json();

      if (res.ok) {
        setWishlist(data.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, loading }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }
  return context;
};