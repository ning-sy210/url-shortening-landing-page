import { useState } from "react";

import ShortenedUrlHistory, {
  ShortenedUrlHistoryType,
} from "./ShortenedUrlHistory";
import UrlInput from "./UrlInput";

const ShortenInputSection = () => {
  // TODO: populate data from localStorage
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedUrlHistoryType[]>(
    []
  );

  return (
    <div className="full-width child-grid relative -top-20 mb-2 grid gap-y-6">
      <UrlInput
        shortenedUrls={shortenedUrls}
        setShortenedUrls={setShortenedUrls}
      />

      {shortenedUrls.map((url) => (
        <ShortenedUrlHistory
          key={url.shortUrl}
          isNew={url.isNew}
          longUrl={url.longUrl}
          shortUrl={url.shortUrl}
        />
      ))}
    </div>
  );
};

export default ShortenInputSection;
