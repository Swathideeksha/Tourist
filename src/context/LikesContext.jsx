import { createContext, useContext, useEffect, useState } from "react";

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likedPlaces, setLikedPlaces] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("likedPlaces")) || [];
    setLikedPlaces(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("likedPlaces", JSON.stringify(likedPlaces));
  }, [likedPlaces]);

  const toggleLike = (id) => {
    setLikedPlaces((prev) =>
      prev.includes(id)
        ? prev.filter((pid) => pid !== id)
        : [...prev, id]
    );
  };

  return (
    <LikesContext.Provider value={{ likedPlaces, toggleLike }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);
