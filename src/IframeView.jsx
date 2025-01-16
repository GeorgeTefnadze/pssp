import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function IframeView() {
  const navigate = useNavigate();
  const { src } = useParams();

  return (
    <div className="iframe-view w-full h-[calc(100vh-104px)] relative">
      <iframe
        src={"http://localhost/projects/assets/" + src}
        allowFullScreen
        className="w-full h-full"
      ></iframe>
      <Link
        onClick={() => navigate(-1)}
        className="absolute bg-primaryBg w-10 h-10 top-1/2 right-5 text-primaryText rounded-full text-center"
      >
        X
      </Link>
    </div>
  );
}
