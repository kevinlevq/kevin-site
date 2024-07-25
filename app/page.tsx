// pages/index.tsx
import React from "react";
import HeaderDisplay from "./header/page"; // Adjust the path as necessary
import RecentPosts from "./post/page"; // Adjust the path as necessary

const Home: React.FC = () => {
  return (
    <div>
      <HeaderDisplay />
      <RecentPosts />
    </div>
  );
};

export default Home;
