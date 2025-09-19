import React from "react";
import { useNavigate } from "react-router-dom";

const AboutCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="aboutCard"
      onClick={() => {
        navigate(`/about/${item.id}`);
      }}
    >
      <figure>
        <img src={item.imageUrl} alt={item.title} />
      </figure>
      <div className="aboutText">
        <h3>{item.title}</h3>
        <p className="info">
          <span className="category">{item.category}</span>
          <span className="tag">#{item.tags.join(" #")}</span>
        </p>
        <p className="desc">{item.description}</p>
        <p className="recom">
          {item.recommended && <span className="badeg">👒추천</span>}
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
