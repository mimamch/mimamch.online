import React from "react";

export default function Button(props) {
  return (
    <a
      className={`rounded-full ${props.primary && "bg-primary"} ${
        props.secondary && "bg-white/90 text-slate-800"
      } ${
        props.className
      } opacity-95 shadow px-5 py-3 font-medium transition duration-200 ease-in-out hover:opacity-80`}
      href=""
    >
      {props.children}
    </a>
  );
}
