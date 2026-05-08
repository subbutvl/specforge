import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Switch } from "@/components/ui/switch";

interface MarkdownPaneProps {
  title: string;
  markdown: string;
}

export function MarkdownPane({ title, markdown }: MarkdownPaneProps) {
  const [rawMode, setRawMode] = useState(false);

  return (
    <div className="h-full min-h-0 flex flex-col rounded-lg border border-zinc-800 bg-zinc-950">
      <div className="shrink-0 border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>

        <div className="flex items-center gap-3 text-sm">
          <span className={!rawMode ? "text-white" : "text-zinc-500"}>
            Preview
          </span>
          <Switch checked={rawMode} onCheckedChange={setRawMode} />
          <span className={rawMode ? "text-white" : "text-zinc-500"}>Raw</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-auto p-5">
        {rawMode ? (
          <pre className="max-h-full overflow-auto whitespace-pre-wrap rounded-md border border-zinc-800 bg-zinc-900 p-6 text-sm leading-7">
            {markdown}
          </pre>
        ) : (
          <div className="markdown-body mx-auto max-w-5xl bg-zinc-950">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
