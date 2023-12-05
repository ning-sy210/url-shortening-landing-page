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
    // TODO: handle error from fetch call
    // TODO: abort fetch calls that take too long to resolve
    const response = await fetch(api, {
      method: "POST",
    });
    const res = await response.json();
    const newShortenedUrl: ShortenedUrlHistoryType = {
      longUrl: urlInput,
      shortUrl: `1pt.co/${res.short}`,
    };

    const updatedShortenedUrls: ShortenedUrlHistoryType[] = [
      newShortenedUrl,
      ...shortenedUrls,
    ];

    // set the previous shortened url (if exists) to be not new anymore
    if (updatedShortenedUrls.length > 1 && updatedShortenedUrls[1].isNew) {
      delete updatedShortenedUrls[1].isNew;
    }

    // populate data to sessionStorage (without isNew flag, because all items are considered old on page refresh)
    window.sessionStorage.setItem(
      "shortenedUrls",
      JSON.stringify(updatedShortenedUrls)
    );

    updatedShortenedUrls[0].isNew = true;
    setShortenedUrls(updatedShortenedUrls);
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