// =============================================================
// Books on Wheels, single-file React app
// =============================================================

const { useState, useMemo, useEffect } = React;

// ---------- Reusable bits ----------

function Eyebrow({ children, className = "" }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

function Arrow() {
  return (
    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---------- NAV ----------

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">
          <img src="assets/logo.png" alt="Books on Wheels" />
          <div>
            <div className="brand-name">Books on Wheels</div>
            <div className="brand-tag">books to yuh foot</div>
          </div>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#do">What We Do</a></li>
          <li><a href="#impact">Impact</a></li>
          <li><a href="#measure">Measure</a></li>
          <li><a href="#library">Library</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#get-involved">Get Involved</a></li>
        </ul>
        <a href="#get-involved" className="btn btn-orange">Donate <Arrow /></a>
      </div>
    </nav>
  );
}

// ---------- HERO ----------

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap-wide">
        <div className="hero-grid">
          <div>
            <div className="hero-pre">
              <span className="live"></span>
              <Eyebrow>St. Catherine, Jamaica · A Social Enterprise</Eyebrow>
            </div>
            <h1 className="hero-h">
              <span className="row">Bringing</span>
              <span className="row"><span className="o">books</span> to</span>
              <span className="row">yuh <span className="b underline">foot</span></span>
            </h1>
            <div className="hero-slogan">a mobile library for every child</div>
            <p className="hero-intro">
              Books on Wheels is a mobile library and literacy programme delivering books and learning support directly to underserved communities in St. Catherine. We're improving literacy, empowering young people, and creating equal access to education, one community at a time.
            </p>
            <div className="hero-ctas">
              <a href="#get-involved" className="btn btn-orange">Donate <Arrow /></a>
              <a href="#get-involved" className="btn btn-blue">Partner With Us <Arrow /></a>
              <a href="#get-involved" className="btn btn-ghost">Volunteer <Arrow /></a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="hero-card">
              <div className="hero-card-photo">
                <img src={window.__resources?.mobileUnit || "assets/mobile-unit.png"} alt="Books on Wheels mobile unit at a stop in St. Catherine with the team" />
              </div>
              <div className="hero-card-meta">
                <div>
                  <div style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 17, letterSpacing: "-0.01em" }}>St. Catherine · Jamaica</div>
                  <div style={{ opacity: .7, fontSize: 12, marginTop: 2 }}>Weekly community visits</div>
                </div>
                <div className="stamp">read • read • read</div>
              </div>
            </div>
            <div className="hero-sticker">
              <span><span className="big">500+</span>children a year</span>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hstat"><div className="n">500+</div><div className="l">Children & young adults reached annually</div></div>
          <div className="hstat"><div className="n">+40%</div><div className="l">Increase in reading engagement</div></div>
          <div className="hstat"><div className="n">Weekly</div><div className="l">Visits to rural communities</div></div>
          <div className="hstat"><div className="n">Free</div><div className="l">To borrow · always</div></div>
        </div>
      </div>
    </section>
  );
}

// ---------- MARQUEE ----------

function Marquee() {
  const items = [
    "EVERY CHILD A READER", "EVERY ROAD A LIBRARY", "FREE TO BORROW", "FREE TO DREAM",
    "BOOKS TO YUH FOOT", "ST. CATHERINE · JAMAICA", "A SOCIAL ENTERPRISE", "READ. RETURN. REPEAT."
  ];
  const stripe = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="s">★</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">{stripe}{stripe}</div>
    </div>
  );
}

// ---------- ABOUT ----------

function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="sec-title">A library on <span className="o">wheels</span>, built for the children libraries <span className="b">forget</span>.</h2>
        </div>

        <div className="about-grid">
          <div className="about-card orange">
            <span className="corner hand">our mission</span>
            <span className="label">Mission</span>
            <h3>Facilitate learning for vulnerable populations.</h3>
            <p>To facilitate learning for vulnerable populations while fostering a positive environment that supports the needs of children and young adults.</p>
          </div>

          <div className="about-card blue">
            <span className="corner hand">where we're going</span>
            <span className="label">Vision</span>
            <h3>Empowered communities. Lifelong learning. Equitable access.</h3>
            <p>We focus on empowering communities, fostering lifelong learning, and providing equitable access to information for every child and young adult we serve.</p>
          </div>

          <div className="story-block">
            <div>
              <Eyebrow className="on-dark">Why we started</Eyebrow>
              <h3>Many children attend school but return home with <span className="gold">no books</span> and no support.</h3>
            </div>
            <p>
              Across rural communities in St. Catherine, distance, transportation costs, and limited resources prevent consistent learning outside the classroom. Books on Wheels was created to bring education directly to these communities, a community-based social enterprise focused on improving literacy access for vulnerable children and young adults in rural Jamaica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- WHAT WE DO ----------

function IconBookshelf() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="26" height="20" rx="1.5" />
      <line x1="3" y1="16" x2="29" y2="16" />
      <rect x="6" y="9" width="3" height="6" />
      <rect x="10" y="8" width="3" height="7" />
      <rect x="14" y="10" width="3" height="5" />
      <rect x="19" y="9" width="6" height="6" transform="rotate(-8 22 12)" />
      <rect x="6" y="19" width="4" height="6" />
      <rect x="11" y="18" width="3" height="7" />
      <rect x="15" y="20" width="8" height="5" />
    </svg>
  );
}
function IconReading() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 11v15" />
      <path d="M16 11c-2-2-5-3-9-3v15c4 0 7 1 9 3" />
      <path d="M16 11c2-2 5-3 9-3v15c-4 0-7 1-9 3" />
      <circle cx="16" cy="6" r="2.2" />
    </svg>
  );
}
function IconCommunity() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="11" r="3.2" />
      <circle cx="7" cy="13" r="2.6" />
      <circle cx="25" cy="13" r="2.6" />
      <path d="M10.5 24c.6-3 2.8-5 5.5-5s4.9 2 5.5 5" />
      <path d="M3 24c.4-2.4 2-4 4-4.3" />
      <path d="M29 24c-.4-2.4-2-4-4-4.3" />
    </svg>
  );
}
function IconHandshake() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14l4-4 5 1 4-2 4 2 5-1 4 4" />
      <path d="M11 17l3-3 2 2 3-3 3 3" />
      <path d="M16 21l3 3 3-3 3-3" />
      <path d="M3 14v3l5 4 3-4" />
      <path d="M29 14v3l-5 4-3-4" />
    </svg>
  );
}

function WhatWeDo() {
  const services = [
    { n: "01", Icon: IconBookshelf, title: "Mobile Library Services", body: "We operate a fully equipped mobile unit that brings books directly into rural communities, allowing children and young adults to borrow and return books easily.", meta: "Weekly visits" },
    { n: "02", Icon: IconReading, title: "Literacy Development Sessions", body: "Monthly sessions focused on reading comprehension, storytelling, writing, and critical thinking using interactive, child-friendly approaches.", meta: "Monthly" },
    { n: "03", Icon: IconCommunity, title: "Community Workshops", body: "We engage parents and caregivers through workshops that provide tools to support reading and learning at home.", meta: "Quarterly" },
    { n: "04", Icon: IconHandshake, title: "Partnerships", body: "We collaborate with schools, community leaders, and organizations to strengthen programme delivery and expand our reach.", meta: "Ongoing" },
  ];
  return (
    <section className="sec" id="do" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="sec-title">Four ways books get from <span className="o">our shelves</span> into <span className="g">small hands</span>.</h2>
        </div>
        <div className="services">
          {services.map((s, i) => (
            <article className="svc" key={i}>
              <div className="svc-head">
                <span className="svc-num">{s.n} / 04</span>
                <div className="svc-icon">{<s.Icon />}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="svc-foot"><span>{s.meta}</span><span>Free · Always</span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- PROBLEM ----------


Object.assign(window, { Eyebrow, Arrow, Nav, Hero, Marquee, About, WhatWeDo });
