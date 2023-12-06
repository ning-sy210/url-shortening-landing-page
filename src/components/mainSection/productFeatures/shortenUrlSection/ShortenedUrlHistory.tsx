import { useState } from "react";

export type ShortenedUrlHistoryType = {
  isNew?: boolean;
  longUrl: string;
  shortUrl: string;
};

const ShortenedUrlHistory = ({
  isNew,
  longUrl,
  shortUrl,
}: ShortenedUrlHistoryType) => {
  const [copied, setCopied] = useState(false);
  const copiedStateClassnames = copied ? "bg-primary-2" : "";

  function onCopyLinkClick() {
    navigator.clipboard.writeText(shortUrl).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  }

  return (
    <div className="content grid rounded text-start bg-white">
      <div className="flex items-center px-4 pt-3 pb-[0.375rem] border-b-[1px] border-solid border-gray-200">
        <p
          title={longUrl}
          className="text-default overflow-hidden text-ellipsis"
        >
          {longUrl}
        </p>
        {isNew && (
          <span className="ml-4 px-[0.375rem] py-1 rounded-md bg-secondary-1 text-white text-[0.75rem] font-bold leading-none">
            new!
          </span>
        )}
      </div>
      <div className="px-4 pt-3 pb-4 grid">
        <p className="text-default text-primary-1">{shortUrl}</p>
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
