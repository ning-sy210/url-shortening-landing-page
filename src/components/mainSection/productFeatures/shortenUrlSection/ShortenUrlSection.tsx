import { useState } from "react";

import ShortenedUrlHistory, {
  ShortenedUrlHistoryType,
} from "./ShortenedUrlHistory";
import UrlInput from "./UrlInput";

const ShortenUrlSection = () => {
  const savedUrls = window.sessionStorage.getItem("shortenedUrls");
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrlHistoryType[]>(
    savedUrls ? JSON.parse(savedUrls) : []
  );

  return (
    <div className="full-width child-grid relative -top-20 mb-2 grid gap-y-6 desktop:-top-[5.25rem] desktop:mb-11">
      <UrlInput
        shortenedUrls={shortenedUrls}
        setShortenedUrls={setShortenedUrls}
      />

      <div className="content empty:hidden grid gap-y-[inherit] desktop:gap-y-4">
        {shortenedUrls.map((url) => (
          <ShortenedUrlHistory
            key={url.shortUrl}
            isNew={url.isNew}
            longUrl={url.longUrl}
            shortUrl={url.shortUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ShortenUrlSection;
