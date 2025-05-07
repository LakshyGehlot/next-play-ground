"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import ReactMarkDown from "react-markdown";
import { Download } from "lucide-react";

const MarkDownEditor = () => {
  const [content, setContent] = React.useState("");

  const handleDownload = () => {
    const blob = new Blob([content], {
      type: "text/markdown",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "File.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex gap-4">
        <div className="h-[90vh] flex-1 p-1">
          <div className="flex ml-2 bg-secondary-2 p-2">
            <Button onClick={handleDownload}>
              Download <Download className="ml-2" />
            </Button>
          </div>
          <Textarea
            placeholder="Write your markdown here..."
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full resize-none p-2"
          />
        </div>
        <div className="h-screen flex-1 overflow-auto bg-secondary-2-dark p-3 prose dark:prose-invert min-w-[45%]">
          <ReactMarkDown>{content}</ReactMarkDown>
        </div>
      </div>
    </div>
  );
};

export default MarkDownEditor;
