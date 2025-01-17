import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <main className="border-b border-primary">
      <section className="flex flex-col gap-8 items-center justify-center h-[calc(100vh-104px)] text-center">
        <h1 className="text-primaryText text-5xl px-12">
          პროფესიული სტუდენტების წარმატების პლატფორმა
        </h1>
        <h2 className="text-xl text-secondaryText">
          ჩვენ ვზრუნავთ სტუდენტების წარმატებაზე და მომავალზე
        </h2>
        <Link
          to={"/projects/5"}
          className="bg-borderColor hover:bg-hoverBg hover:text-secondaryText duration-200 py-4 px-10 text-primaryText"
        >
          გადადით ლინკზე
        </Link>
      </section>
    </main>
  );
}
