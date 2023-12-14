import { useRef, useState } from "react";
import { SyncLoader } from "react-spinners";
import { ShortenedUrlHistoryType } from "./ShortenedUrlHistory";

type UrlInputType = {
  shortenedUrls: ShortenedUrlHistoryType[];
  setShortenedUrls: React.Dispatch<
    React.SetStateAction<ShortenedUrlHistoryType[]>
  >;
};

const UrlInput = ({ shortenedUrls, setShortenedUrls }: UrlInputType) => {
  const controller = useRef<AbortController>(new AbortController());
  const signal = useRef<AbortSignal>(controller.current.signal);

  const [loading, setLoading] = useState(false);
  const [showAbortFetch, setShowAbortFetch] = useState(false);
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
    if (loading) return;

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
    // refer to https://rapidapi.com/BigLobster/api/url-shortener-service for more information
    const api = "https://url-shortener-service.p.rapidapi.com/shorten";
    const options = {
      signal: signal.current,
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "bd9ecf8dbamsh35996e940b8a0e4p1c65cajsn10ff84307f5a",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: url,
      }),
    };

    setLoading(true);
    try {
      const fetchAbortTimeout = setTimeout(() => {
        setErrorMessage("Hmmm... Request is taking unusually long...");
        setShowAbortFetch(true);
      }, 5000);

      const response = await fetch(api, options);
      const res = await response.json();
      clearTimeout(fetchAbortTimeout);

      const newShortenedUrl: ShortenedUrlHistoryType = {
        longUrl: urlInput,
        shortUrl: res.result_url,
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
    } catch (error) {
      if (error instanceof DOMException) {
        console.info(error.message);
      } else {
        console.error(error);
        alert("Service currently unavailable. Please try again later.");
      }
    } finally {
      controller.current = new AbortController();
      signal.current = controller.current.signal;
      setLoading(false);
      setShowAbortFetch(false);
      setErrorMessage("");
    }
  }

  function abortFetch() {
    controller.current.abort();
  }

  return (
    <form
      name="shorten-link-form"
      // TODO: bg-shorten-link (background-image) not working for some reason
      className="content bg-primary-2 bg-shorten-link px-6 py-6 rounded-xl grid 
      desktop:relative desktop:flex desktop:justify-between gap-x-6 desktop:px-16 desktop:py-[3.25rem] desktop:text-[1.25rem]"
    >
      <input
        id="url-input"
        type="url"
        required
        placeholder="Shorten a link here..."
        value={urlInput}
        onChange={(e) => onUrlInputChange(e.target.value)}
        onKeyDown={onInputEnterKeyDown}
        className={`h-12 rounded-md px-4 text-default ${invalidInputClassnames} 
        desktop:h-auto desktop:flex-grow desktop:px-8 desktop:rounded-[10px] desktop:text-[1.25rem] desktop:invalid:px-7`}
      />
      {errorMessage && (
        <span
          className="text-start italic text-red-400 text-[0.75rem] leading-7 -mb-[0.375rem] 
          desktop:absolute desktop:bottom-6 desktop:text-default desktop:tracking-[-0.02rem]"
        >
          {errorMessage}
        </span>
      )}

      <button
        type="button"
        onClick={showAbortFetch ? abortFetch : validateUrlInput}
        className="mt-4 h-12 flex justify-center items-center cta-btn rounded-md 
        desktop:mt-0 desktop:h-16 desktop:px-10 desktop:rounded-[10px]"
      >
        {loading ? (
          <span className="flex items-center gap-x-4">
            {showAbortFetch && "Cancel"}
            <SyncLoader
              size={7}
              margin={3}
              speedMultiplier={0.5}
              color="#FFF"
            />
          </span>
        ) : (
          "Shorten It!"
        )}
      </button>
    </form>
  );
};

export default UrlInput;
