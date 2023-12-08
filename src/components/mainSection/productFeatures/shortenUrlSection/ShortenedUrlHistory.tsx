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
  const copiedStateClassnames = copied ? "bg-primary-2 hover:bg-primary-2" : "";

  function onCopyLinkClick() {
    navigator.clipboard.writeText(shortUrl).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    });
  }

  return (
    <div className="grid rounded text-start bg-white desktop:flex desktop:justify-between desktop:pl-8 desktop:pr-6 desktop:py-4">
      <div
        className="flex items-center px-4 pt-3 pb-[0.375rem] border-b-[1px] border-solid border-gray-200
        desktop:p-0 desktop:border-none"
      >
        <p
          title={longUrl}
          className="text-default overflow-hidden text-ellipsis desktop:text-[1.25rem] desktop:tracking-[-0.01rem]"
        >
          {longUrl}
        </p>
        {isNew && (
          <span className="ml-4 px-[0.375rem] py-1 rounded-md bg-secondary-1 text-white text-[0.75rem] font-bold leading-none">
            new!
          </span>
        )}
      </div>
      <div className="px-4 pt-3 pb-4 grid desktop:flex desktop:items-center desktop:p-0 desktop:gap-x-6">
        <p className="text-default text-primary-1 desktop:text-[1.25rem] desktop:tracking-[-0.02rem]">
          {shortUrl}
        </p>
        <button
          type="button"
          onClick={onCopyLinkClick}
          className={`mt-2 cta-btn text-mobile-p-sm font-bold py-[0.4375rem] rounded-md ${copiedStateClassnames}
          desktop:mt-0 desktop:w-[6.375rem] desktop:py-2`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenedUrlHistory;
