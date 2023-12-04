import { useState } from "react";

type ShortenedUrlHistoryType = {
  longUrl: string;
  shortenedUrl: string;
};

const ShortenedUrlHistory = ({
  longUrl,
  shortenedUrl,
}: ShortenedUrlHistoryType) => {
  const [copied, setCopied] = useState(false);
  const copiedStateClassnames = copied ? "bg-primary-2" : "";

  function onCopyLinkClick() {
    navigator.clipboard.writeText(shortenedUrl).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  }

  return (
    <div className="content grid rounded text-start bg-white">
      <p
        title={longUrl}
        className="px-4 pt-3 pb-[0.375rem] border-b-[1px] border-solid border-gray-200 text-default overflow-hidden text-ellipsis"
      >
        {longUrl}
      </p>
      <div className="px-4 pt-3 pb-4 grid">
        <p className="text-default text-primary-1">{shortenedUrl}</p>
        <button
          type="button"
          onClick={onCopyLinkClick}
          className={`mt-2 cta-btn text-mobile-p-sm font-bold py-[0.4375rem] rounded-md transition-colors duration-300 ${copiedStateClassnames}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenedUrlHistory;
