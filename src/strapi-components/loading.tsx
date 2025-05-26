import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}

