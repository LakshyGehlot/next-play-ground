"use client";

import React, { useState } from "react";
import Tabs from "@/components/Tabs";
import CodeOutput from "@/components/CodeOutput";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { genrateHtmlCode } from "@/lib/utils";

const HtmlEditor = () => {
  const [htmlCode, setHtmlCode] = React.useState("");
  const [cssCode, setCssCode] = React.useState("");
  const [jsCode, setJsCode] = React.useState("");

  const handleDownload = () => {
    const blob = new Blob([genrateHtmlCode(htmlCode, cssCode, jsCode)], {
      type: "text/html",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "index.html";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <Tabs className="h-screen">
            <Tabs.Panel label={"HTML"}>
              <textarea
                value={htmlCode}
                className="w-full h-full text-xl bg-gray-200 dark:bg-gray-900 outline-none p-4 mt-2 "
                placeholder="Write your HTML here..."
                onChange={(e) => setHtmlCode(e.target.value)}
              ></textarea>
            </Tabs.Panel>

            <Tabs.Panel label={"CSS"}>
              <textarea
                value={cssCode}
                className="w-full h-full text-xl bg-gray-200 dark:bg-gray-900 outline-none p-4 mt-2 "
                placeholder="Write your CSS here..."
                onChange={(e) => setCssCode(e.target.value)}
              ></textarea>
            </Tabs.Panel>

            <Tabs.Panel label={"JS"}>
              <textarea
                value={jsCode}
                className="w-full h-full text-xl bg-gray-200 dark:bg-gray-900 outline-none p-4 mt-2 "
                placeholder="Write your JS here..."
                onChange={(e) => setJsCode(e.target.value)}
              ></textarea>
            </Tabs.Panel>
          </Tabs>
        </div>

        {/* Output */}
        <div className="w-1/2">
          <div className="flex justify-end">
            <Button className="my-2" onClick={handleDownload}>
              Download <Download className="ml-2" />
            </Button>
          </div>
          <CodeOutput htmlCode={htmlCode} cssCode={cssCode} jsCode={jsCode} />
        </div>
      </div>
    </>
  );
};

export default HtmlEditor;
