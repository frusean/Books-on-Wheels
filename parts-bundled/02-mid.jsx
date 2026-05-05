const { useState, useMemo, useEffect } = React;
// part 2
function Problem() {
  return (
    <section className="problem">
      <div className="wrap">
        <Eyebrow className="on-dark">The problem</Eyebrow>
        <h2 className="problem-h">
          Many children in rural Jamaica face <span className="o">limited access</span> to books and learning resources <span className="g">outside of school</span>.
        </h2>
        <div className="problem-grid">
          <div className="pstat">
            <span className="num">33<span className="pct">%</span></span>
            <p className="desc">of students struggle with reading.</p>
          </div>
          <div className="pstat">
            <span className="num">56<span className="pct">%</span></span>
            <p className="desc">of students struggle with writing.</p>
          </div>
          <div className="pstat">
            <span className="num">Few</span>
            <p className="desc">communities have a public library nearby — distance, transport costs and limited resources block consistent learning at home.</p>
          </div>
        </div>
        <div className="problem-coda">
          <p className="lead">What this means.</p>
          <p className="body">A child may attend school daily but return home to an environment with no books, no study support, and no access to learning resources. Over time, this affects their confidence, performance, and future opportunities. Books on Wheels exists to change that.</p>
        </div>
      </div>
    </section>
  );
}

// ---------- IMPACT ----------

function Impact() {
  const stats = [
    { n: "500", small: "+", l: "children & young adults reached annually" },
    { n: "+40", small: "%", l: "increase in reading engagement" },
    { n: "Weekly", small: "", l: "visits to rural communities" },
    { n: "Monthly", small: "", l: "literacy development sessions" },
    { n: "Quarterly", small: "", l: "community workshops" },
  ];
  return (
    <section className="sec" id="impact">
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow>Our impact</Eyebrow>
          <h2 className="sec-title">What the route delivers, <span className="o">on a regular cadence</span>.</h2>
        </div>
        <div className="impact-grid">
          {stats.map((s, i) => (
            <div className="imp" key={i}>
              <div className="num">{s.n}<span className="small">{s.small}</span></div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- HOW WE MEASURE ----------

function Measure() {
  const items = [
    { n: "01", t: "Children reached", d: "We track the number of children and young adults engaged across our communities." },
    { n: "02", t: "Book circulation & usage", d: "We monitor what's borrowed, what's returned, and which titles spend the most time in small hands." },
    { n: "03", t: "Session attendance", d: "We log attendance at every literacy development session and community workshop." },
    { n: "04", t: "Reading engagement", d: "We measure improvements in reading engagement and comprehension over time." },
    { n: "05", t: "Community feedback", d: "We gather feedback from parents, teachers and community members shaping how we deliver." },
  ];
  return (
    <section className="sec measure" id="measure">
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow>How we measure impact</Eyebrow>
          <h2 className="sec-title">Committed to <span className="o">accountability</span> and <span className="b">measurable results</span>.</h2>
        </div>
        <div className="measure-grid">
          {items.map(it => (
            <div className="measure-card" key={it.n}>
              <span className="measure-num">{it.n}</span>
              <h3>{it.t}</h3>
              <p>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- LIBRARY ----------

const COVER_PALETTES = [
  { bg: "var(--orange)", fg: "var(--navy)" },
  { bg: "var(--blue)", fg: "var(--paper)" },
  { bg: "var(--green)", fg: "var(--paper)" },
  { bg: "var(--gold)", fg: "var(--navy)" },
  { bg: "var(--red)", fg: "var(--paper)" },
  { bg: "var(--navy)", fg: "var(--gold)" },
];

// Real titles, real Open Library cover IDs (covers.openlibrary.org/b/isbn/<isbn>-L.jpg).
// Mix of classic children's lit and Caribbean voices.
const BOOKS = [
  // Caribbean
  { t: "Anansi the Spider", a: "Gerald McDermott", g: "Caribbean", isbn: "0805003118", out: false },
  { t: "A Caribbean Dozen", a: "John Agard & Grace Nichols", g: "Caribbean", isbn: "1564023737", out: false },
  { t: "Coming on Home Soon", a: "Jacqueline Woodson", g: "Caribbean", isbn: "0399237488", out: true },
  { t: "Hairs / Pelitos", a: "Sandra Cisneros", g: "Caribbean", isbn: "0679890076", out: false },

  // Picture
  { t: "Where the Wild Things Are", a: "Maurice Sendak", g: "Picture", isbn: "0064431789", out: false },
  { t: "The Snowy Day", a: "Ezra Jack Keats", g: "Picture", isbn: "0670867330", out: false },
  { t: "Last Stop on Market Street", a: "Matt de la Peña", g: "Picture", isbn: "0399257748", out: true },
  { t: "Corduroy", a: "Don Freeman", g: "Picture", isbn: "0670241334", out: false },

  // Chapter
  { t: "Charlotte's Web", a: "E. B. White", g: "Chapter", isbn: "0061124958", out: false },
  { t: "Matilda", a: "Roald Dahl", g: "Chapter", isbn: "0142410373", out: false },
  { t: "Bridge to Terabithia", a: "Katherine Paterson", g: "Chapter", isbn: "0064401847", out: true },
  { t: "Hatchet", a: "Gary Paulsen", g: "Chapter", isbn: "1416936475", out: false },

  // Learning
  { t: "The Phantom Tollbooth", a: "Norton Juster", g: "Learning", isbn: "0394820371", out: false },
  { t: "G is for Googol", a: "David M. Schwartz", g: "Learning", isbn: "1883672589", out: false },
  { t: "How Things Work", a: "DK", g: "Learning", isbn: "1465445331", out: true },
  { t: "First Atlas", a: "DK", g: "Learning", isbn: "1465445064", out: false },

  // Non-fiction
  { t: "National Geographic Kids Almanac", a: "National Geographic", g: "Non-fiction", isbn: "1426338627", out: false },
  { t: "The Big Book of the Body", a: "Minna Lacey", g: "Non-fiction", isbn: "0794524257", out: false },
  { t: "Animal Atlas", a: "Anita Ganeri", g: "Non-fiction", isbn: "1465469419", out: false },
  { t: "Octopus Stew", a: "Eric Velasquez", g: "Non-fiction", isbn: "0823444597", out: false },
];

function Library() {
  const genres = ["All", "Caribbean", "Picture", "Chapter", "Learning", "Non-fiction"];
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => active === "All" ? BOOKS : BOOKS.filter(b => b.g === active),
    [active]
  );
  const counts = useMemo(() => {
    const m = { All: BOOKS.length };
    BOOKS.forEach(b => { m[b.g] = (m[b.g] || 0) + 1; });
    return m;
  }, []);

  return (
    <section className="sec" id="library" style={{ background: "var(--paper-2)" }}>
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow>The shelf</Eyebrow>
          <h2 className="sec-title">Browse what's on <span className="o">the truck</span> this week.</h2>
        </div>

        <div className="lib-tabs">
          {genres.map(g => (
            <button
              key={g}
              className={`lib-tab ${active === g ? "active" : ""}`}
              onClick={() => setActive(g)}
            >
              {g} <span className="n">{counts[g] || 0}</span>
            </button>
          ))}
        </div>

        <div className="books">
          {filtered.map((b, i) => {
            const p = COVER_PALETTES[(i + b.t.length) % COVER_PALETTES.length];
            const cover = b.isbn ? (window.__resources?.[`book_${b.isbn}`] || `https://covers.openlibrary.org/b/isbn/${b.isbn}-L.jpg`) : null;
            return (
              <div className="book" key={b.t}>
                <div className="book-cover book-cover-img" style={{ background: p.bg, color: p.fg }}>
                  {cover && (
                    <img
                      src={cover}
                      alt={b.t}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  )}
                  <span className="a">{b.g}</span>
                  <span className="t">{b.t}</span>
                </div>
                <div className="book-meta">
                  <span className="t">{b.t}</span>
                  <span className="a">{b.a}</span>
                  <span className={`book-status ${b.out ? "out" : ""}`}>
                    <span className="pip"></span>
                    {b.out ? "Out on loan" : "On the truck"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- A CHILD'S STORY ----------

function ChildStory() {
  return (
    <section className="child-story">
      <span className="quote">"</span>
      <div className="wrap">
        <div className="child-story-inner">
          <Eyebrow style={{ color: "var(--navy)" }}>A child's story</Eyebrow>
          <p className="child-story-h">
            Imagine a child who attends school every day but has <strong>no books at home</strong>. The nearest library is miles away, and transportation is not affordable. Over time, that child begins to struggle with reading and <span className="it">loses confidence</span>.
            <br/><br/>
            Now imagine that same child gaining <strong>access to books</strong>, participating in reading sessions, and receiving support within their own community. <span className="it">That is the difference Books on Wheels is making.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- TEAM ----------

function Team() {
  const team = [
    { name: "Kimonie Walters", role: "Social Work Specialist · Community Engagement", photo: "assets/team-kimonie.png" },
    { name: "Danesha Newman", role: "Social Worker · Programme Support", photo: "assets/team-danesha.png" },
    { name: "Daneille Scott", role: "Literacy Specialist · Library & Information Science", photo: "assets/team-daneille.png" },
    { name: "Annika Garvey", role: "Business Administration · Operations & Management", photo: "assets/team-annika.png" },
    { name: "Tamara Fogah", role: "Early Childhood Support · Programme Assistant", photo: "assets/team-tamara.png" },
  ];
  return (
    <section className="sec" id="team">
      <div className="wrap">
        <div className="sec-head">
          <Eyebrow>Our team</Eyebrow>
          <h2 className="sec-title">Five specialists. One <span className="o">shared mission</span>.</h2>
        </div>
        <div className="team-grid">
          {team.map((m, i) => (
            <div className="member" key={i}>
              <div className="member-photo">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} />
                ) : (
                  <span className="ph">Photo · {m.name.split(" ")[0]}</span>
                )}
              </div>
              <div>
                <h3 className="member-name">{m.name}</h3>
                <p className="member-role">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- GET INVOLVED ----------


Object.assign(window, { Problem, Impact, Measure, Library, ChildStory, Team, BOOKS, COVER_PALETTES });
