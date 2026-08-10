"use client";

import { FormEvent, useState } from "react";

const Check = () => <span className="check" aria-hidden="true">✓</span>;

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Intervention Station home">
          <span className="brand-mark">IS</span>
          <span>Intervention <em>Station</em></span>
        </a>
        <div className="nav-links">
          <a href="#method">Our Method</a><a href="#programs">Programs</a><a href="#faq">FAQ</a>
        </div>
        <a className="button button-small" href="#apply">Apply for Tutoring <span>→</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">Private 1:1 reading & math intervention</div>
          <h1>Stop guessing.<br/><i>Start growing.</i></h1>
          <p className="hero-lede">Find the hidden skill gaps keeping your child stuck—and replace homework battles with a clear, personalized path forward.</p>
          <div className="hero-actions">
            <a className="button" href="#diagnostic">Book Your SkillMap Assessment <span>→</span></a>
            <a className="text-link" href="#method">See how it works <span>↓</span></a>
          </div>
          <div className="trust-row">
            <span><Check/> Diagnostic-first</span><span><Check/> 100% personalized</span><span><Check/> Measurable progress</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Example student growth report">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="report-card">
            <div className="report-top"><span className="mini-logo">IS</span><div><b>Monthly Growth Report</b><small>Student progress snapshot</small></div><span className="status">ON TRACK</span></div>
            <div className="report-focus"><small>CURRENT FOCUS</small><b>Oral Reading Fluency</b></div>
            <div className="big-growth"><div><small>BASELINE</small><b>27</b><span>WCPM</span></div><span className="growth-arrow">→</span><div className="after"><small>NOW</small><b>36</b><span>WCPM</span></div></div>
            <div className="chart" aria-hidden="true"><span style={{height:"18%"}}/><span style={{height:"28%"}}/><span style={{height:"43%"}}/><span style={{height:"57%"}}/><span style={{height:"75%"}}/><span style={{height:"92%"}}/></div>
            <div className="report-note"><span>↗</span><div><b>Skills are moving forward</b><small>Next: automaticity + connected text</small></div></div>
          </div>
          <div className="float-card float-one"><span>72%</span><small>Vowel teams<br/>25% baseline</small></div>
          <div className="float-card float-two"><span>Clear</span><small>plan for what<br/>comes next</small></div>
        </div>
      </section>

      <section className="pain-band">
        <div className="shell pain-grid">
          <div><div className="eyebrow light">Does this feel familiar?</div><h2>You know your child is capable.<br/>You just don’t know <i>what’s missing.</i></h2></div>
          <div className="pain-list">
            <p><span>01</span> Homework takes hours and ends in frustration.</p>
            <p><span>02</span> You’re told to “practice more,” but not what to practice.</p>
            <p><span>03</span> Generic tutoring helps with tonight—not the root problem.</p>
          </div>
        </div>
        <p className="reframe shell">Your child doesn’t need more random practice. <b>They need to know what’s missing.</b></p>
      </section>

      <section className="section shell center" id="method">
        <div className="eyebrow">The Intervention Station SkillMap™ system</div>
        <h2>Find it. Fix it. <i>Prove it.</i></h2>
        <p className="section-lede">A diagnostic-first intervention process that turns uncertainty into a focused plan—and effort into visible progress.</p>
        <div className="process-grid">
          <article><span className="step-number">01</span><div className="step-icon">⌖</div><h3>Find It</h3><p>We screen the full skill chain to identify exactly where learning began to break down.</p><small>COMPREHENSIVE DIAGNOSTIC</small></article>
          <article><span className="step-number">02</span><div className="step-icon">✦</div><h3>Fix It</h3><p>We build a 1:1 plan from the earliest missing prerequisite—not a generic curriculum.</p><small>PERSONALIZED INTERVENTION</small></article>
          <article><span className="step-number">03</span><div className="step-icon">↗</div><h3>Prove It</h3><p>We monitor targeted skills and show you what changed, what’s next, and why.</p><small>CLEAR PARENT REPORTS</small></article>
        </div>
      </section>

      <section className="section programs" id="programs">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">Choose the right path</div><h2>Focused support.<br/><i>Real momentum.</i></h2></div><p>Each program begins with the SkillMap diagnostic and includes private instruction, home practice, progress monitoring, and a monthly growth report.</p></div>
          <div className="program-grid">
            <article className="program-card reading">
              <div className="program-label">READING</div><div className="program-icon">Aa</div><h3>Reading Growth<br/>Program</h3><p>Build the foundational skills that make accurate, fluent reading—and confident comprehension—possible.</p>
              <ul><li><Check/> Phonemic awareness & phonics</li><li><Check/> Decoding & high-frequency words</li><li><Check/> Encoding, spelling & connected text</li><li><Check/> Fluency, WCPM & comprehension</li></ul>
              <div className="program-proof"><b>Science of Reading-aligned</b><span>Structured literacy • Orton-Gillingham trained • Explicit & systematic</span></div>
              <div className="price"><b>$749</b><span>/ month<br/><small>2 private sessions / week</small></span></div><a href="#apply" className="card-link">Explore Reading Growth <span>→</span></a>
            </article>
            <article className="program-card math">
              <div className="program-label">MATH</div><div className="program-icon">1²</div><h3>Math Growth<br/>Program</h3><p>Rebuild the number sense and prerequisite skills hidden beneath grade-level struggles.</p>
              <ul><li><Check/> Number sense & place value</li><li><Check/> Fact fluency & operations</li><li><Check/> Computation & fractions</li><li><Check/> Word problems & math language</li></ul>
              <div className="program-proof"><b>Beyond homework help</b><span>Concrete models • Explicit instruction • Foundational skill repair</span></div>
              <div className="price"><b>$749</b><span>/ month<br/><small>2 private sessions / week</small></span></div><a href="#apply" className="card-link">Explore Math Growth <span>→</span></a>
            </article>
            <article className="program-card complete">
              <div className="best">MOST COMPREHENSIVE</div><div className="program-label">READING + MATH</div><div className="program-icon">R+M</div><h3>Complete Academic<br/>Growth</h3><p>Two coordinated intervention plans with added weekly intensity where your child needs it most.</p>
              <ul><li><Check/> Full Reading + Math SkillMaps</li><li><Check/> Individualized plans in both areas</li><li><Check/> Flexible third session follows the data</li><li><Check/> Weekly progress monitoring</li></ul>
              <div className="program-proof"><b>Data-directed support</b><span>The third session shifts to the area of greatest current need</span></div>
              <div className="price"><b>$995</b><span>/ month<br/><small>3 private sessions / week</small></span></div><a href="#apply" className="card-link">Explore Complete Growth <span>→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section measure shell">
        <div className="measure-copy"><div className="eyebrow">Progress you can actually see</div><h2>Not “seems better.”<br/><i>Measured better.</i></h2><p>Every plan begins with baseline data. Regular monitoring shows whether instruction is working—and tells us when to adjust.</p><ul><li><Check/> Where your child started</li><li><Check/> Which skills they’ve mastered</li><li><Check/> How their targeted measures are changing</li><li><Check/> Exactly what we’re teaching next</li></ul><p className="fine">Percentile or benchmark status is reported only when appropriate for the assessment, grade, and testing period.</p></div>
        <div className="metrics-panel"><div className="illustrative">ILLUSTRATIVE EXAMPLES</div><article><div><small>READING FLUENCY</small><b>27 <em>→</em> 36</b><span>correct words per minute</span></div><strong>+9 WCPM</strong></article><article><div><small>PHONICS: VOWEL TEAMS</small><b>25% <em>→</em> 72%</b><span>decoding accuracy</span></div><strong>+47 pts</strong></article><article><div><small>MATH COMPUTATION</small><b>18 <em>→</em> 29</b><span>correct responses</span></div><strong>+11</strong></article><p>Examples demonstrate report format only. Individual results vary.</p></div>
      </section>

      <section className="diagnostic" id="diagnostic"><div className="shell diagnostic-grid"><div><div className="eyebrow light">Start with clarity</div><h2>The Comprehensive<br/><i>SkillMap Diagnostic</i></h2><p>A standalone assessment for families who want to understand the “why” before deciding what comes next.</p></div><div className="diagnostic-card"><div className="diagnostic-price"><span>ONE-TIME</span><b>$249</b></div><ul><li><Check/> Comprehensive reading or math screening</li><li><Check/> Written SkillMap findings</li><li><Check/> Personalized recommendations</li><li><Check/> Parent consultation</li></ul><div className="waived">Assessment fee waived when you enroll in a Growth Program.</div><a href="#apply" className="button cream">Book Your Assessment <span>→</span></a></div></div></section>

      <section className="section guarantee shell"><div className="seal">GROWTH<br/><b>GUARANTEE</b><span>✦</span></div><div><div className="eyebrow">The Intervention Station growth guarantee</div><h2>A promise built around<br/><i>your child’s baseline.</i></h2><p>After the initial assessment, we establish an individualized, measurable growth target. If a qualifying student attends consistently, completes prescribed practice, and does not make measurable progress toward that goal, we will reassess, adjust instruction, and provide additional support according to program terms.</p><small>No invented percentages. No one-size-fits-all promises. Just responsible goals, responsive teaching, and a commitment to the process.</small></div></section>

      <section className="section voices"><div className="shell center"><div className="eyebrow">The experience we’re building</div><h2>What parents deserve to feel.</h2><div className="quote-grid"><blockquote>“For the first time, I understand exactly what’s getting in my child’s way—and what we’re doing about it.”<cite>THE CLARITY PARENTS DESERVE</cite></blockquote><blockquote>“We’re no longer guessing. The plan is specific, and I can finally see the skills moving.”<cite>THE CONFIDENCE DATA CAN CREATE</cite></blockquote><blockquote>“Homework isn’t the whole story anymore. We’re fixing the foundation underneath it.”<cite>THE RELIEF ROOT-CAUSE SUPPORT CAN BRING</cite></blockquote></div><p className="placeholder-note">These statements illustrate the intended parent experience and are not client testimonials. Verified family stories will be added here.</p></div></section>

      <section className="section faq shell" id="faq"><div><div className="eyebrow">Questions, answered</div><h2>Before you<br/><i>get started.</i></h2><p>Still unsure which program fits? Start with the SkillMap. The data will guide the recommendation.</p></div><div className="faq-list">
        <details open><summary>Is this just homework help?<span>+</span></summary><p>No. We may support school success, but sessions target the foundational skills causing the struggle. Instruction is driven by your child’s diagnostic data—not tonight’s worksheet.</p></details>
        <details><summary>What ages and grades do you serve?<span>+</span></summary><p>Programs are designed for elementary learners. The initial conversation helps determine whether our approach matches your child’s needs.</p></details>
        <details><summary>How does the SkillMap assessment work?<span>+</span></summary><p>We screen the relevant skill chain, review the results, and explain where performance is strong, where it breaks down, and what instruction should target first.</p></details>
        <details><summary>When will I receive progress updates?<span>+</span></summary><p>You’ll receive a clear monthly growth report, while targeted skills are monitored weekly or biweekly depending on the program and measure.</p></details>
        <details><summary>Does the Growth Guarantee promise a specific score increase?<span>+</span></summary><p>No. We set a responsible target from your child’s own baseline. The guarantee covers reassessment, instructional adjustment, and additional support under the program terms—not a universal percentile or percentage claim.</p></details>
      </div></section>

      <section className="apply" id="apply"><div className="shell apply-grid"><div><div className="eyebrow light">Your next step</div><h2>Let’s find out<br/><i>what’s really missing.</i></h2><p>Tell us a little about your child. We’ll follow up to discuss fit, answer questions, and choose the right starting point.</p><div className="apply-points"><span><b>01</b> Share your concerns</span><span><b>02</b> Talk through fit</span><span><b>03</b> Book the SkillMap</span></div></div>
        {sent ? <div className="success"><span>✓</span><h3>Thank you!</h3><p>Your inquiry is ready. This demo form is front-end only; connect it to your preferred form service before launch.</p><button className="button" onClick={()=>setSent(false)}>Send another inquiry</button></div> : <form onSubmit={submit}><h3>Apply for 1:1 Tutoring</h3><div className="field-row"><label>Parent name<input required name="parentName" placeholder="Your name"/></label><label>Email address<input required type="email" name="email" placeholder="you@example.com"/></label></div><div className="field-row"><label>Child’s grade<select required name="grade" defaultValue=""><option value="" disabled>Select grade</option><option>K–1</option><option>2–3</option><option>4–5</option><option>6+</option></select></label><label>Main area of concern<select required name="concern" defaultValue=""><option value="" disabled>Select one</option><option>Reading</option><option>Math</option><option>Reading + Math</option><option>Not sure yet</option></select></label></div><label>What are you noticing?<textarea name="message" rows={4} placeholder="Tell us what feels hardest right now…"/></label><button className="button" type="submit">Request a Family Consultation <span>→</span></button><small>There’s no commitment. We’ll start by making sure the program is a good fit.</small></form>}
      </div></section>

      <footer><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">IS</span><span>Intervention <em>Station</em></span></a><p>Find the gap. Build the skill.<br/>See the growth.</p></div><div><b>EXPLORE</b><a href="#method">Our Method</a><a href="#programs">Programs</a><a href="#faq">FAQ</a></div><div><b>GET STARTED</b><a href="#diagnostic">SkillMap Diagnostic</a><a href="#apply">Apply for Tutoring</a></div><div><b>APPROACH</b><span>1:1 personalized intervention</span><span>Reading • Math • Both</span></div></div><div className="shell footer-bottom"><span>© 2026 Intervention Station. All rights reserved.</span><span>Because tutoring should be based on data—not hope.</span></div></footer>
    </main>
  );
}
