const { useState, useMemo, useEffect } = React;
// part 3
function GetInvolved() {
  const [tab, setTab] = useState("donate");

  // donate state
  const [cycle, setCycle] = useState("once");
  const [amount, setAmount] = useState(2500);
  const [custom, setCustom] = useState("");
  const total = custom ? parseFloat(custom) || 0 : amount;
  const [donateDone, setDonateDone] = useState(false);

  const impactLine = useMemo(() => {
    if (!total) return "Pick an amount to see what it funds.";
    if (total >= 20000) return `Helps fund a community workshop for parents and caregivers.`;
    if (total >= 10000) return `Helps stock the mobile unit with new books.`;
    if (total >= 5000) return `Helps fund a monthly literacy development session.`;
    if (total >= 2500) return `Helps fund a community visit by the mobile unit.`;
    if (total >= 1000) return `Adds new books and materials to our shelves.`;
    return `Every dollar helps put a book in a child's hands.`;
  }, [total]);

  // partner state
  const [partnerType, setPartnerType] = useState("school");
  const [partnerDone, setPartnerDone] = useState(false);

  // volunteer state
  const [roles, setRoles] = useState(new Set(["literacy"]));
  const [volDone, setVolDone] = useState(false);
  const toggleRole = (r) => setRoles(s => {
    const n = new Set(s); n.has(r) ? n.delete(r) : n.add(r); return n;
  });

  return (
    <section className="involved" id="get-involved">
      <div className="wrap">
        <div className="involved-head">
          <div>
            <Eyebrow>Get involved</Eyebrow>
            <h2 className="involved-h">Support our <span className="gold">mission</span>.</h2>
          </div>
          <p className="involved-sub">
            Your support helps us bring books, learning materials and literacy programmes directly to children who need them most. Your contribution helps purchase books and educational materials, support mobile library operations, fund literacy sessions and workshops, and expand services to more communities.
          </p>
        </div>

        <div className="tabs-card">
          <div className="tabs-rail">
            <button className={`tab-btn ${tab==="donate"?"active":""}`} onClick={() => setTab("donate")}>
              <span>Donate</span><span className="n">01</span>
            </button>
            <button className={`tab-btn ${tab==="partner"?"active":""}`} onClick={() => setTab("partner")}>
              <span>Partner</span><span className="n">02</span>
            </button>
            <button className={`tab-btn ${tab==="volunteer"?"active":""}`} onClick={() => setTab("volunteer")}>
              <span>Volunteer</span><span className="n">03</span>
            </button>
            <div className="rail-foot">
              Questions? <br />
              <a href="mailto:info@booksonwheels.com">info@booksonwheels.com</a>
            </div>
          </div>

          {/* DONATE */}
          {tab === "donate" && (
            <div className="tab-panel">
              {donateDone ? (
                <ThankYou title="Thank you." body={`Your ${cycle === "monthly" ? "monthly" : "one-time"} gift of $${total.toLocaleString()} helps put books in children's hands. We'll be in touch with a receipt and a programme update.`} reset={() => setDonateDone(false)} />
              ) : (
                <>
                  <h3>Fund <span className="o">books</span>, <span className="b">sessions</span>, and the route itself.</h3>
                  <p className="lede">Your contribution funds books and educational materials, mobile library operations, literacy sessions, and our expansion into more communities.</p>

                  <div className="cycle-toggle">
                    <button className={cycle==="once"?"active":""} onClick={() => setCycle("once")}>One-time</button>
                    <button className={cycle==="monthly"?"active":""} onClick={() => setCycle("monthly")}>Monthly</button>
                  </div>

                  <div className="amounts">
                    {[
                      { v: 1000, l: "Books & materials" },
                      { v: 2500, l: "A community visit" },
                      { v: 5000, l: "A literacy session" },
                      { v: 10000, l: "Stock the unit" },
                    ].map(a => (
                      <button
                        key={a.v}
                        className={`amount-btn ${!custom && amount===a.v ? "active" : ""}`}
                        onClick={() => { setAmount(a.v); setCustom(""); }}
                      >
                        ${a.v.toLocaleString()}
                        <span className="sub">{a.l}</span>
                      </button>
                    ))}
                  </div>

                  <div className="amount-row">
                    <input
                      className="amount-input"
                      type="number"
                      placeholder="Custom amount"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                    />
                    <button className="btn btn-orange" onClick={() => total > 0 && setDonateDone(true)}>
                      Give ${(total || 0).toLocaleString()} {cycle === "monthly" ? "/ mo" : ""} <Arrow />
                    </button>
                  </div>

                  <div className="donate-summary">
                    <div className="total"><span className="cur">$</span>{total.toLocaleString()}{cycle==="monthly"&&<span style={{ fontSize: 13, opacity: .7, marginLeft: 6 }}>/ mo</span>}</div>
                    <div className="donate-impact">{impactLine}</div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* PARTNER */}
          {tab === "partner" && (
            <div className="tab-panel">
              {partnerDone ? (
                <ThankYou title="We'll be in touch." body="A partnership lead will reach out within 3 working days. Thank you for opening the door." reset={() => setPartnerDone(false)} />
              ) : (
                <>
                  <h3>Open the gates of your <span className="b">school</span>, <span className="o">church</span>, or business.</h3>
                  <p className="lede">We partner with schools, faith groups, businesses and councils to host stops, sponsor books, or fund a route segment.</p>

                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>I'm reaching out as a…</div>
                    <div className="chips">
                      {[
                        { v: "school", l: "School" },
                        { v: "church", l: "Faith group" },
                        { v: "business", l: "Business" },
                        { v: "council", l: "Council / NGO" },
                        { v: "publisher", l: "Publisher / Author" },
                      ].map(c => (
                        <button key={c.v} className={`chip ${partnerType===c.v?"active":""}`} onClick={() => setPartnerType(c.v)}>{c.l}</button>
                      ))}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="field"><label>Your name</label><input type="text" placeholder="Your full name" /></div>
                    <div className="field"><label>Organization</label><input type="text" placeholder="School / org name" /></div>
                    <div className="field"><label>Email</label><input type="email" placeholder="you@org.com" /></div>
                    <div className="field"><label>Parish</label><input type="text" placeholder="St. Catherine" /></div>
                    <div className="field full"><label>How would you like to partner?</label><textarea placeholder="A bit about your idea, host a stop, sponsor books, donate space, anything…" /></div>
                  </div>

                  <button className="btn btn-blue" style={{ alignSelf: "flex-start" }} onClick={() => setPartnerDone(true)}>Send partnership request <Arrow /></button>
                </>
              )}
            </div>
          )}

          {/* VOLUNTEER */}
          {tab === "volunteer" && (
            <div className="tab-panel">
              {volDone ? (
                <ThankYou title="Welcome aboard." body="Thanks for offering to help. We'll send you next steps and our upcoming volunteer dates." reset={() => setVolDone(false)} />
              ) : (
                <>
                  <h3>Lend your <span className="o">time</span>, your <span className="b">skills</span>, your morning.</h3>
                  <p className="lede">Volunteers help us run literacy sessions, sort and shelve books, accompany the mobile unit, and reach more communities. Tell us what you'd like to do.</p>

                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>What pulls you in? (pick any)</div>
                    <div className="chips">
                      {[
                        { v: "library", l: "Mobile library" },
                        { v: "literacy", l: "Literacy sessions" },
                        { v: "workshops", l: "Community workshops" },
                        { v: "outreach", l: "Outreach & comms" },
                        { v: "fundraising", l: "Fundraising" },
                        { v: "ops", l: "Operations" },
                      ].map(r => (
                        <button key={r.v} className={`chip ${roles.has(r.v)?"active":""}`} onClick={() => toggleRole(r.v)}>{r.l}</button>
                      ))}
                    </div>
                  </div>

                  <div className="form-grid">
                    <div className="field"><label>Your name</label><input type="text" placeholder="Your full name" /></div>
                    <div className="field"><label>Email</label><input type="email" placeholder="you@email.com" /></div>
                    <div className="field"><label>Phone (optional)</label><input type="tel" placeholder="+1 876 …" /></div>
                    <div className="field"><label>Closest community</label><input type="text" placeholder="Spanish Town, Linstead, …" /></div>
                    <div className="field full"><label>Anything we should know?</label><textarea placeholder="Availability, languages, prior experience, totally optional." /></div>
                  </div>

                  <button className="btn btn-orange" style={{ alignSelf: "flex-start" }} onClick={() => setVolDone(true)}>Sign me up <Arrow /></button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ThankYou({ title, body, reset }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, padding: "24px 0" }}>
      <div style={{ fontFamily: "var(--hand)", fontSize: 56, color: "var(--orange)", lineHeight: 1, transform: "rotate(-2deg)" }}>thank you!</div>
      <h3 style={{ fontFamily: "var(--display)", fontWeight: 700, fontSize: 36, letterSpacing: "-0.025em", margin: 0 }}>{title}</h3>
      <p style={{ fontSize: 17, color: "var(--navy-2)", lineHeight: 1.55, margin: 0, maxWidth: 520 }}>{body}</p>
      <button className="btn btn-ghost" style={{ alignSelf: "flex-start" }} onClick={reset}>Submit another <Arrow /></button>
    </div>
  );
}

// ---------- FOOTER ----------


Object.assign(window, { GetInvolved, ThankYou });
