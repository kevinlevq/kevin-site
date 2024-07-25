"use client";

import React, { useState } from "react";
import { posts } from "../posts_array/posts";
import { useRouter } from "next/navigation";

const POSTS_PER_PAGE = 5;

const RecentPosts: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handleTitleClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "50px auto",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          paddingBottom: "10px",
          marginBottom: "20px",
          fontWeight: "bold",
          color: "black",
          fontSize: "2.5rem",
        }}
      >
        Recent Posts
      </h2>
      {selectedPosts.map((post, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            paddingBottom: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: "1", marginRight: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p
                  style={{
                    color: "black",
                    marginBottom: "5px",
                    flex: "1",
                    marginTop: "5px",
                  }}
                >
                  {post.date}
                </p>
                <h3
                  style={{
                    marginBottom: "5px",
                    color: "black",
                    flex: "5",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTitleClick(post.slug)}
                >
                  {post.title}
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  marginBottom: "10px",
                  flexWrap: "wrap",
                  marginLeft: "120px",
                }}
              >
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: "inline-block",
                      padding: "2px 8px",
                      color: "#007bff",
                      backgroundColor: "#e9ecef",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      boxShadow: "0 1px 1px rgba(0, 0, 0, 0.075)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#666",
                  lineHeight: "1.5",
                  marginLeft: "120px",
                }}
              >
                {post.summary}
              </p>
            </div>
            <img
              src={post.image}
              alt="cover"
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                marginTop: "40px",
              }}
            />
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            style={{
              padding: "10px 15px",
              margin: "0 5px",
              border: "1px solid #007bff",
              backgroundColor: currentPage === index + 1 ? "#007bff" : "#fff",
              color: currentPage === index + 1 ? "#fff" : "#007bff",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
