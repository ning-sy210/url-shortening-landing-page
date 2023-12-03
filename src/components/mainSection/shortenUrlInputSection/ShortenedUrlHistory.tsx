type ShortenedUrlHistoryType = {
  longUrl: string;
  shortenedUrl?: string;
};

const ShortenedUrlHistory = ({
  longUrl,
  shortenedUrl,
}: ShortenedUrlHistoryType) => {
  if (!shortenedUrl) return;

  return (
    <div className="content grid rounded text-start bg-white">
      <p
        title={longUrl}
        className="px-4 pt-3 pb-2 border-b-[0.5px] border-solid border-neutral-1 text-default overflow-hidden text-ellipsis"
      >
        {longUrl}
      </p>
      <div className="px-4 pt-[0.625rem] pb-4 grid">
        <p className="text-default text-primary-1">{shortenedUrl}</p>
        <button
          type="button"
          className="mt-2 cta-btn text-mobile-p-sm font-bold py-[0.4375rem] rounded-md"
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortenedUrlHistory;
