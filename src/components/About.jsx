import React from "react";
import aboutImg from "../assets/aboutme.jpg";

export default function About() {
  return (
    <div className="px-12 h-[calc(100vh-104px)] flex flex-col gap-8 items-center justify-center">
      <h1 className="text-primaryText text-6xl text-center">ჩვენს შესახებ</h1>
      <h3 className="text-secondaryText text-2xl text-center">
        პროფესიული სტუდენტების წარმატების პლატფორმა არის ადგილი, სადაც
        დამსაქმებლებს აქვთ შესაძლებლობა, დაამყარონ სწრაფი კომუნიკაცია სხვადასხვა
        დარგის პროფესიონალებთან. პლატფორმაზე განთავსებული იქნება პროფესიული
        სასწავლებლების სტუდენტთა ნამუშრერები, რაც დაეხმარება კონკრეტული დარგის
        დამსაქმებელს მისთვის რელევანტური კადრის მოძიებაში.
      </h3>
      <div className="w-2/3 h-auto">
        <img src={aboutImg} alt="" />
      </div>
    </div>
  );
}
