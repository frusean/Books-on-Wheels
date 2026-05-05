const { useState, useMemo, useEffect } = React;
// part 4
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="assets/logo.png" alt="Books on Wheels" />
            <h3 className="footer-mark"><span className="o">Books</span> on <span className="b">Wheels</span></h3>
            <p className="footer-tag">books to yuh foot</p>
            <p className="footer-blurb">A community-based social enterprise improving literacy access for vulnerable children and young adults in St. Catherine, Jamaica.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#do">What we do</a></li>
              <li><a href="#impact">Our impact</a></li>
              <li><a href="#library">The library</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
          <div>
            <h4>Get involved</h4>
            <ul>
              <li><a href="#get-involved">Donate</a></li>
              <li><a href="#get-involved">Partner</a></li>
              <li><a href="#get-involved">Volunteer</a></li>
              <li><a href="mailto:info@booksonwheels.com">info@booksonwheels.com</a></li>
              <li><a href="https://www.instagram.com/bringing_books_to_yuh_foot" target="_blank" rel="noreferrer">@bringing_books_to_yuh_foot</a></li>
            </ul>
          </div>
          <div>
            <h4>Stay in touch</h4>
            <p style={{ fontSize: 14, opacity: .8, margin: "0 0 12px" }}>Programme updates, sessions, volunteer calls. No spam, promise.</p>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); e.target.reset(); alert("Subscribed!"); }}>
              <input type="email" placeholder="you@email.com" required />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2025 Books on Wheels · A Social Enterprise · St. Catherine, Jamaica</div>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Annual report</a>
            <a href="mailto:info@booksonwheels.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- TWEAKS ----------

function Tweaks() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setOpen(true);
      if (d.type === "__deactivate_edit_mode") setOpen(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  if (!open) return null;
  return (
    <div style={{
      position: "fixed", right: 24, bottom: 24, zIndex: 100,
      background: "var(--navy)", color: "var(--paper)", borderRadius: 14,
      padding: 20, width: 280, fontFamily: "var(--body)",
      boxShadow: "8px 8px 0 var(--gold)", border: "2px solid var(--gold)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <strong style={{ fontFamily: "var(--display)", fontSize: 16 }}>Tweaks</strong>
        <button onClick={() => { setOpen(false); window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); }}
          style={{ background: "transparent", border: "none", color: "var(--gold)", cursor: "pointer", fontSize: 18 }}>×</button>
      </div>
      <p style={{ fontSize: 13, opacity: .8, margin: "0 0 12px" }}>This site uses a fixed brand palette pulled directly from the logo. Edit copy by clicking elements directly.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {[
          { c: "var(--orange)", l: "Orange" },
          { c: "var(--blue)", l: "Cobalt" },
          { c: "var(--green)", l: "Green" },
          { c: "var(--gold)", l: "Gold" },
          { c: "var(--red)", l: "Red" },
          { c: "var(--navy)", l: "Navy", border: "1px solid var(--gold)" },
        ].map(s => (
          <div key={s.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: s.c, border: s.border || "none" }}></div>
            <span style={{ fontSize: 10, opacity: .7 }}>{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- APP ----------

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <WhatWeDo />
      <Problem />
      <Impact />
      <Measure />
      <Library />
      <ChildStory />
      <Team />
      <GetInvolved />
      <Footer />
      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
