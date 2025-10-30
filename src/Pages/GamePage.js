import { useCallback, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import gameData from "./gameData.json";

function GamePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title");
  const backArrowSrc = `${process.env.PUBLIC_URL}/images/back-arrow.png`;

  // get game title
  const game = useMemo(() => {
    if (!title) return undefined;
    return gameData.games.find(
      (g) => g.title.toLowerCase() === title.toLowerCase()
    );
  }, [title]);

  // game screen
  const iframeSrc = useMemo(() => {
    if (!game) return "";
    return `${process.env.PUBLIC_URL}/game.html?script=${encodeURIComponent(
      game.url
    )}`;
  }, [game]);

  // game desc
  const gameSummary = useMemo(() => {
    if (!game) return "";
    if (game.desc && game.desc.trim().length > 0) return game.desc;
    return "Game Description Unavailable";
  }, [game]);

  // player count label
  const playerLabel = useMemo(() => {
    if (!game) return "";
    if (!game.players || game.players <= 0) return "Multiplayer";
    if (game.players === 1) return "Solo Play";
    return `${game.players}-Player`;
  }, [game]);

  // no need for click to play
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.focus();
      iframe.contentWindow?.focus();
    }
  }, []);

  const handleReload = useCallback(() => {
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.location.reload();
      iframe.contentWindow.focus();
    }
  }, []);

  if (!game) return <p>Game not found</p>; // error message

  return (
    <main id="game-page">
      <aside id="back-arrow" onClick={() => window.history.back()}>
        <img src={backArrowSrc} alt="Back" />
      </aside>

      <div className="game-page__shell">
        <header className="game-page__header">
          <p id="game-title" className="subheader-font extra-big-font blue-font">
            {game.title}
          </p>
          <span className="game-page__meta paragraph-font">
            {playerLabel}
          </span>
        </header>

        <section className="game-page__frame-area">
          <div className="game-page__frame-shadow" />
          <iframe
            id="game-frame"
            className="game-page__frame"
            ref={iframeRef}
            src={iframeSrc} // game.html in the frame
            title={game.title}
            allowFullScreen
          ></iframe>
        </section>

        <section className=" darkgrey-font game-page__details">
          <p className="paragraph-font">{gameSummary}</p>
          <div className="game-page__actions">
            <button
              type="button"
              className="game-page__button "
              onClick={handleReload}
            >
              Reload Game
            </button>
            <a
              className="game-page__button game-page__button--outline"
              href={iframeSrc}
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullscreen
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default GamePage;
