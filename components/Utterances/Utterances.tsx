import React, { useEffect } from "react";

const src = "https://utteranc.es/client.js";
const branch = "master";
const repo = "wakie92/blog_comments";

const Utterances = () => {
  const rootElm = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances: HTMLScriptElement = document.createElement("script");

    const config = {
      src,
      repo,
      branch,
      label: "comment",
      "issue-term": "pathname",
      theme: "github-light",
      crossorigin: "anoymous",
      async: true,
    };

    Object.keys(config).forEach((configKey) => {
      utterances.setAttribute(configKey, config[configKey]);
    });
    rootElm.current.appendChild(utterances);
    console.log(rootElm)
    console.log(config)
  }, []);

  return <div className="utternces" ref={rootElm} />;
};

export default Utterances;
