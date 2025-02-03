import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { BsHeart, BsChat, BsArrowRepeat, BsSend } from "react-icons/bs";

const LinkedInFeed = () => {
  const posts = [
    {
      id: 1,
      profileImg:
        "https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_200_200/B56ZRK8L9qGsAc-/0/1736424080393?e=1744243200&v=beta&t=96faAJCH3JWEdSe3NePRuMV1FcSJvULzqV5FuqvyJdg",
      name: "Shiva Kumar",
      title: "Frontend Engineer specializing in MERN/MEAN Stack",
      postTitle: "🔥 LISTEN UP, YOUNG DEVS: A REAL TALK ABOUT AI & CAREERS 🔥",
      postTime: "23h",
      likes: 45,
      comments: 4,
      reposts: 4,
      send: 10,
      impressions: 1125,
    },
  ];

  return (
   
    <div className="container mt-5">
      {posts.map((post) => (
        <Card key={post.id} className="mb-4 shadow-sm">
          <Card.Body>
            <div className="d-flex align-items-center mb-3">
              <img
                src={post.profileImg}
                alt={`${post.name}'s profile`}
                className="rounded-circle me-3"
                style={{ width: "50px", height: "50px" }}
              />
              <div>
                <h6 className="mb-0">{post.name}</h6>
                <small>{post.title}</small>
              </div>
            </div>
            <Card.Text>{post.postTitle}</Card.Text>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div className="d-flex align-items-center">
                <span className="me-4 d-flex align-items-center">
                  <BsHeart className="me-1" /> {post.likes}
                </span>
                <span className="me-4 d-flex align-items-center">
                  <BsChat className="me-1" /> {post.comments}
                </span>
                <span className="me-4 d-flex align-items-center">
                  <BsArrowRepeat className="me-1" /> {post.reposts}
                </span>
                <span className="d-flex align-items-center">
                  <BsSend className="me-1" /> {post.send}
                </span>
              </div>
              <div>
                <small>{post.impressions} impressions</small>
              </div>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default LinkedInFeed;
