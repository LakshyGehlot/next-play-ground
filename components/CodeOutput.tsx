import React from "react";
import { genrateHtmlCode } from "@/lib/utils";

const CodeOutput = ({
  htmlCode,
  cssCode,
  jsCode,
}: {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}) => {
  return (
    <iframe
      className="h-screen w-full border-none bg-white"
      sandbox="allow-scripts"
      srcDoc={genrateHtmlCode(htmlCode, cssCode, jsCode)}
    />
  );
};

export default CodeOutput;
