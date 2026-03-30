const artists = [
  {
    name: 'Fire From The Gods',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/6yeRY2d7gubXoymv3DAYhS',
    youtubeEmbed: 'https://www.youtube.com/embed/3_LxmVysn2I',
  },
  {
    name: 'Sylar',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/78vP5COn64VXULgkIQovEA',
    youtubeEmbed: 'https://www.youtube.com/embed/uR02UoZroQs',
  },
  {
    name: 'Framing Hanley',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/3niqfoc7C6lIeCNVz8iZYE',
  },
  {
    name: 'Divide The Fall',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/3w02P5LROmfJbh1YFHvtmC',
  },
  {
    name: 'Yung Mo$h',
    spotifyEmbed: 'https://open.spotify.com/embed/artist/6Sav6oWBRdmKNqjROoDOqB',
  },
]

function Header() {
  return (
    <header className="header">
      <div className="wrap nav-row">
        <a href="#top" className="brand" aria-label="Pluto Flux Records home">
          <img src="/logo.png" alt="Pluto Flux Records" className="brand-logo" />
        </a>
        <nav className="nav">
          <a href="#artists">Artists</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-overlay" />
      <div className="wrap hero-content">
        <img src="/logo.png" alt="Pluto Flux Records" className="hero-logo" />
        <h1>Pluto Flux Records</h1>
        <p className="tagline">
          A Record Label helping create ever evolving, genre bending music. Change is the only constant in life. Embrace the Unknown.
        </p>
        <div className="button-row">
          <a className="btn btn-primary" href="#artists">Explore Artists</a>
          <a className="btn btn-secondary" href="#contact">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

function ArtistCard({ artist }) {
  return (
    <section className="artist-card">
      <div className="artist-heading">
        <h3>{artist.name}</h3>
        <img src="/logo.png" alt="Pluto Flux Records" className="mini-logo" />
      </div>
      <div className={`embed-grid ${artist.youtubeEmbed ? 'two-col' : 'one-col'}`}>
        <div>
          <p className="embed-label">Spotify</p>
          <div className="embed-box spotify-box">
            <img src="/logo.png" alt="" aria-hidden="true" className="embed-logo" />
            <iframe
              src={artist.spotifyEmbed}
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title={`${artist.name} Spotify Player`}
            />
          </div>
        </div>
        {artist.youtubeEmbed && (
          <div>
            <p className="embed-label">YouTube</p>
            <div className="embed-box video-box">
              <img src="/logo.png" alt="" aria-hidden="true" className="embed-logo" />
              <iframe
                className="video-frame"
                src={artist.youtubeEmbed}
                title={`${artist.name} YouTube Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <Hero />

      <main>
        <section className="wrap section" id="artists">
          <h2>Artists</h2>
          <div className="artist-list">
            {artists.map((artist) => (
              <ArtistCard key={artist.name} artist={artist} />
            ))}
          </div>
        </section>

        <section className="wrap section section-narrow" id="about">
          <h2>About</h2>
          <p className="body-copy">
            Pluto Flux Records is a genre-bending label and creative house focused on artist development, production, and forward-thinking releases. Built on transparency, creative control, and pushing heavy music forward.
          </p>
        </section>

        <section className="wrap section section-narrow" id="contact">
          <h2>Contact</h2>
          <p className="body-copy">Work with Pluto Flux Records.</p>
          <a className="btn btn-primary" href="mailto:hello@plutofluxrecords.com">Get In Touch</a>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">© Pluto Flux Records</div>
      </footer>
    </div>
  )
}
