import React, { useState, useEffect } from "react";
import "./LinkBox.css"
const LinkBox = () => {
  const [links, setLinks] = useState(() => {
    try {
      const stored = localStorage.getItem("myLinks");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error parsing localStorage:", err);
      return [];
    }
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("myLinks", JSON.stringify(links));
  }, [links]);

  const handleSaveInput = () => {
    if (input.trim()) {
      setLinks((prevLinks) => [input.trim(),...prevLinks ]);
      setInput("");
    }
  };

  const handleSaveTab = () => {
  if (chrome?.tabs?.query) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Tabs:", tabs); // ✅ Correct location
      const url = tabs?.[0]?.url;
      if (url) {
        setLinks((prevLinks) => [url,...prevLinks]);
      }
    });
  } else {
    alert("chrome.tabs API works only inside a Chrome Extension");
  }
};


  const handleDeleteAll = () => {
    setLinks([]);
    localStorage.removeItem("myLinks");
  };

  // Delete one specific link by index
  const handleDeleteLink = (index) => {
    setLinks((prev) => prev.filter((_, i) => i !== index));
  };

  // Copy a link to clipboard
  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      
    });
  };

  return (
    <div className="p-4 font-sans max-w-[600px] wrapper">
      <div className="header">
      {/* <img src="./open-in-browser.png" alt="icon " className=" w-8" /> */}
      <h2 className=" ml-1 font-bold text-2xl ">LinkBox</h2>
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a URL"
        className="w-[480px] p-2 mb-2 font-bold border rounded"
      />

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={handleSaveInput}
          className="px-4 py-2 font-bold text-white rounded"
        >
          SAVE INPUT
        </button>

        <button
          onClick={handleSaveTab}
          className="px-4 py-2 font-bold text-white rounded"
        >
          SAVE TAB
        </button>

        <button
          onDoubleClick={handleDeleteAll}
          className=" del-btn"
        >
          Delete All
        </button>
      </div>

      <ul className=" w-[480px] mt-4 mb-2 space-y-2">
        {links.map((link, index) => (
          <li
            key={index}
            className="p-0 list-none flex justify-between items-center mb-1 "
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline truncate max-w-[70%]"
              title={link}
            >
              {link}
            </a>

            <div className="flex space-x-2">
              <button
                onClick={() => handleCopyLink(link)}
                className=" inner util"
                title="Copy link"
              >
                📋
              </button>

              <button
                onClick={() => handleDeleteLink(index)}
                className=" util"
                title="Delete link"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkBox;
