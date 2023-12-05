import { useState } from "react";
import { SyncLoader } from "react-spinners";
import { ShortenedUrlHistoryType } from "./ShortenedUrlHistory";

type UrlInputType = {
  shortenedUrls: ShortenedUrlHistoryType[];
  setShortenedUrls: React.Dispatch<
    React.SetStateAction<ShortenedUrlHistoryType[]>
  >;
};

const UrlInput = ({ shortenedUrls, setShortenedUrls }: UrlInputType) => {
  const [loading, setLoading] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const invalidInputClassnames = errorMessage
    ? [
        "invalid:px-[0.8125rem]",
        "invalid:border-[0.1875rem]",
        "invalid:border-solid border-red-400",
        "invalid:placeholder:text-red-200",
        "invalid:text-red-500",
      ].join(" ")
    : "";

  function onUrlInputChange(input: string) {
    if (errorMessage) {
      setErrorMessage("");
    }
    setUrlInput(input);
  }

  function onInputEnterKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code !== "Enter") return;
    e.preventDefault();
    validateUrlInput();
  }

  function validateUrlInput() {
    if (!urlInput) {
      setErrorMessage("Please add a link");
      return;
    }

    const urlInputElement = document.getElementById("url-input");

    if (
      urlInputElement instanceof HTMLInputElement &&
      !urlInputElement.checkValidity()
    ) {
      setErrorMessage("Please enter a valid URL");
      return;
    }

    getShortenedUrlFor(urlInput);
  }

  async function getShortenedUrlFor(url: string) {
    // visit https://github.com/1pt-co/1pt for more information
    const api = `https://csclub.uwaterloo.ca/~phthakka/1pt-express/addURL?long=${url}`;

    setLoading(true);
    const response = await fetch(api, {
      method: "POST",
    });
    const res = await response.json();
    const newShortenedUrl: ShortenedUrlHistoryType = {
      isNew: true,
      longUrl: urlInput,
      shortUrl: `1pt.co/${res.short}`,
    };

    // TODO: populate data from localStorage
    // TODO: handle error from fetch call
    // TODO: abort fetch calls that take too long to resolve
    // set the previous shortened url (if exists) to be not new anymore
    if (shortenedUrls.length > 0 && shortenedUrls[0].isNew) {
      const prevUrl = { ...shortenedUrls[0] };
      delete prevUrl.isNew;
      setShortenedUrls((prev) => [newShortenedUrl, prevUrl, ...prev.slice(1)]);
    } else {
      setShortenedUrls((prev) => [newShortenedUrl, ...prev]);
    }
    setUrlInput("");
    setLoading(false);
  }

  return (
    <form
      name="shorten-link-form"
      // TODO: bg-shorten-link (background-image) not working for some reason
      className="content bg-primary-2 bg-shorten-link px-6 py-6 rounded-xl grid"
    >
      <input
        id="url-input"
        type="url"
        required
        placeholder="Shorten a link here..."
        value={urlInput}
        onChange={(e) => onUrlInputChange(e.target.value)}
        onKeyDown={onInputEnterKeyDown}
        className={`h-12 rounded-md px-4 text-default ${invalidInputClassnames}`}
      />
      {errorMessage && (
        <span className="text-start italic text-red-400 text-[0.75rem] leading-7 -mb-[0.375rem]">
          {errorMessage}
        </span>
      )}

      <button
        type="button"
        onClick={validateUrlInput}
        className="mt-4 h-12 cta-btn rounded-md"
      >
        {loading ? (
          <SyncLoader size={7} margin={3} speedMultiplier={0.5} color="#FFF" />
        ) : (
          "Shorten It!"
        )}
      </button>
    </form>
  );
};

export default UrlInput;
