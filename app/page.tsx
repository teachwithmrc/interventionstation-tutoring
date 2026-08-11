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
          <div className="eyebrow">Private 1:1 intervention with Teach With Mr. C</div>
          <h1>Stop guessing.<br/><i>Start growing.</i></h1>
          <p className="hero-lede">Find the hidden skill gaps keeping your child stuck, teach them systematically, and see the progress—with Sean Connolly, an experienced teacher and interventionist.</p>
          <div className="hero-actions">
            <a className="button" href="#diagnostic">Book Your Progress Map Assessment <span>→</span></a>
            <a className="text-link" href="#method">See how it works <span>↓</span></a>
          </div>
          <div className="trust-row">
            <span><Check/> Nearly 18 years teaching</span><span><Check/> Orton-Gillingham trained</span><span><Check/> 200M+ content views</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Example student growth report">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="report-card">
            <div className="report-top"><span className="mini-logo">IS</span><div><b>Monthly Growth Report</b><small>Student progress snapshot</small></div><span className="status">ON TRACK</span></div>
            <div className="report-focus"><small>CURRENT FOCUS</small><b>Oral Reading Fluency</b></div>
            <div className="big-growth"><div><small>BASELINE</small><b>27</b><span>WCPM</span></div><span className="growth-arrow">→</span><div className="after"><small>NOW</small><b>39</b><span>WCPM</span></div></div>
            <div className="chart" aria-hidden="true"><span style={{height:"18%"}}/><span style={{height:"28%"}}/><span style={{height:"43%"}}/><span style={{height:"57%"}}/><span style={{height:"75%"}}/><span style={{height:"92%"}}/></div>
            <div className="report-note"><span>↗</span><div><b>Skills are moving forward</b><small>Next: automaticity + connected text</small></div></div>
          </div>
          <div className="float-card float-one"><span>96%</span><small>Reading accuracy<br/>89% baseline</small></div>
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
        <div className="eyebrow">The Intervention Station Progress Map™</div>
        <h2>Find the gap. Teach the skill. <i>Prove the growth.</i></h2>
        <p className="section-lede">The Progress Map combines baseline assessment with an instructional roadmap: where your child is now, which prerequisites are missing, what we teach first, and how we measure change.</p>
        <div className="process-grid">
          <article><span className="step-number">01</span><div className="step-icon">⌖</div><h3>Find It</h3><p>We screen the full skill chain to identify exactly where learning began to break down.</p><small>COMPREHENSIVE DIAGNOSTIC</small></article>
          <article><span className="step-number">02</span><div className="step-icon">✦</div><h3>Teach It</h3><p>We build a 1:1 plan from the earliest missing prerequisite—not a generic curriculum.</p><small>PERSONALIZED INTERVENTION</small></article>
          <article><span className="step-number">03</span><div className="step-icon">↗</div><h3>Prove It</h3><p>We monitor targeted skills and show you what changed, what’s next, and why.</p><small>CLEAR PARENT REPORTS</small></article>
        </div>
      </section>

      <section className="section instruction" id="instruction">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">Specific by design</div><h2>We teach the skill beneath<br/><i>the struggle.</i></h2></div><p>Progress is measured at the level being taught—not reduced to “reading is better” or “math feels easier.”</p></div>
          <div className="instruction-grid">
            <article><div className="program-label">READING INTERVENTION</div><h3>From speech sounds to connected text</h3><p>Science of Reading-aligned, explicit and systematic instruction informed by structured literacy principles and Sean’s Orton-Gillingham training.</p><ul><li>Phonemic awareness and letter-sound knowledge</li><li>Real and nonsense word decoding</li><li>Encoding, spelling, and high-frequency word automaticity</li><li>Controlled word-list fluency by phonics skill</li><li>Oral reading fluency, WCPM, accuracy, and connected text</li><li>Vocabulary and comprehension</li></ul><small>DECODING • ENCODING • CUMULATIVE PRACTICE • MULTISENSORY ENGAGEMENT</small></article>
            <article><div className="program-label math-label">MATH INTERVENTION</div><h3>Find the prerequisite that broke down</h3><p>Not homework supervision. We use explicit instruction, concrete and visual models, scaffolded practice, and precise progress checks.</p><ul><li>Counting, cardinality, and number sense as appropriate</li><li>Place value, operations, and fact fluency</li><li>Multi-digit computation and digits correct</li><li>Multiplication and division concepts and fluency</li><li>Fractions, mathematical vocabulary, and word problems</li><li>Grade-level prerequisite skills</li></ul><small>CONCRETE MODELS • EXPLICIT INSTRUCTION • FLUENCY • PROBLEM SOLVING</small></article>
          </div>
        </div>
      </section>

      <section className="section programs" id="programs">
        <div className="shell">
          <div className="section-heading"><div><div className="eyebrow">Choose the right path</div><h2>Focused support.<br/><i>Real momentum.</i></h2></div><p>Every program includes a Progress Map, individualized plan, two recurring private sessions each week, basic prescribed practice, progress monitoring, and a monthly parent growth report.</p></div>
          <div className="program-grid">
            <article className="program-card reading">
              <div className="program-label">READING</div><div className="program-icon">Aa</div><h3>Reading Growth<br/>Program</h3><p>Build the foundational skills that make accurate, fluent reading—and confident comprehension—possible.</p>
              <ul><li><Check/> Phonemic awareness & phonics</li><li><Check/> Decoding & high-frequency words</li><li><Check/> Encoding, spelling & connected text</li><li><Check/> Fluency, WCPM & comprehension</li></ul>
              <div className="program-proof"><b>Science of Reading-aligned</b><span>Structured literacy • Orton-Gillingham trained • Explicit & systematic</span></div>
              <div className="price"><b>$749</b><span>/ month<br/><small>2 sessions/week • typically 8–10/month</small></span></div><a href="#apply" className="card-link">Choose Reading Growth <span>→</span></a>
            </article>
            <article className="program-card math">
              <div className="program-label">MATH</div><div className="program-icon">1²</div><h3>Math Growth<br/>Program</h3><p>Rebuild the number sense and prerequisite skills hidden beneath grade-level struggles.</p>
              <ul><li><Check/> Number sense & place value</li><li><Check/> Fact fluency & operations</li><li><Check/> Computation & fractions</li><li><Check/> Word problems & math language</li></ul>
              <div className="program-proof"><b>Beyond homework help</b><span>Concrete models • Explicit instruction • Foundational skill repair</span></div>
              <div className="price"><b>$749</b><span>/ month<br/><small>2 sessions/week • typically 8–10/month</small></span></div><a href="#apply" className="card-link">Choose Math Growth <span>→</span></a>
            </article>
            <article className="program-card complete">
              <div className="best">MOST COMPREHENSIVE</div><div className="program-label">READING + MATH</div><div className="program-icon">R+M</div><h3>Complete Academic<br/>Growth</h3><p>Two coordinated intervention plans across reading and math, delivered within the same consistent weekly schedule.</p>
              <ul><li><Check/> Full Reading + Math Progress Maps</li><li><Check/> Individualized plans in both areas</li><li><Check/> Instructional time follows the data</li><li><Check/> Progress monitoring across both domains</li></ul>
              <div className="program-proof"><b>Data-directed support</b><span>Two weekly sessions are strategically allocated as your child’s needs change</span></div>
              <div className="price"><b>$995</b><span>/ month<br/><small>2 sessions/week • typically 8–10/month</small></span></div><a href="#apply" className="card-link">Choose Complete Growth <span>→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section accelerator" id="accelerator">
        <div className="shell">
          <div className="accelerator-intro">
            <div><div className="eyebrow">Optional at-home add-on</div><h2>Keep the progress going<br/><i>between sessions.</i></h2></div>
            <p>Your child works with us twice a week. The At-Home Accelerator adds a personalized 5–10 minute practice routine on the days between sessions—without adding more live tutoring appointments.</p>
          </div>
          <div className="upsell-grid">
            <article className="accelerator-card">
              <div className="optional-pill">OPTIONAL • BEST VALUE</div>
              <div className="upsell-heading"><div><small>PERSONALIZED HOME PRACTICE</small><h3>At-Home Accelerator</h3></div><div className="addon-price"><b>+$99</b><span>/month</span></div></div>
              <p className="upsell-lede">A simple, targeted practice system that reinforces exactly what your child is learning now—not a stack of generic worksheets.</p>
              <div className="accelerator-features">
                <div><span>01</span><p><b>Personalized daily review slides</b>Tailored 5–10 minute practice for current Progress Map targets, including letter names and sounds, phonemic awareness, phonics, heart words, fluency, math facts, and number sense.</p></div>
                <div><span>02</span><p><b>Monthly Progress Map Practice Pack</b>A personalized workbook or PDF generated around current instructional targets.</p></div>
                <div><span>03</span><p><b>Learning library access</b>InterventionStation.com resources plus Sean’s educational songs and videos.</p></div>
                <div><span>04</span><p><b>Weekly practice plan</b>A clear, manageable schedule so families know what to use and when.</p></div>
              </div>
              <div className="evolving-note"><span>↗</span><p><b>Practice evolves as skills grow.</b> When your child masters a target, their materials shift to what they need next.</p></div>
              <a href="#apply" className="button">Add to My Application <span>→</span></a>
            </article>
            <article className="practice-pack-card">
              <div><small>LIGHTER OPTION</small><h3>Personalized<br/>Practice Pack</h3><p>For families who want the targeted monthly workbook or PDF without the full digital practice system.</p></div>
              <div><div className="addon-price"><b>+$39</b><span>/month</span></div><ul><li><Check/> Monthly targeted workbook/PDF</li><li><Check/> Built from current Progress Map goals</li><li><Check/> Refreshes as targets change</li></ul><a href="#apply" className="card-link">Ask for the Practice Pack <span>→</span></a></div>
            </article>
          </div>
          <p className="optional-note"><b>Both options are completely optional.</b> Your child’s core Growth Program already includes basic prescribed home practice and everything needed for premium intervention.</p>
        </div>
      </section>

      <section className="section measure shell">
        <div className="measure-copy"><div className="eyebrow">Progress you can actually see</div><h2>Not “seems better.”<br/><i>Measured better.</i></h2><p>Every plan begins with baseline data. Regular monitoring shows whether instruction is working—and tells us when to adjust.</p><ul><li><Check/> Where your child started</li><li><Check/> Which skills they’ve mastered</li><li><Check/> How their targeted measures are changing</li><li><Check/> Exactly what we’re teaching next</li></ul><p className="fine">Percentile or benchmark status is reported only when appropriate for the assessment, grade, and testing period.</p></div>
        <div className="metrics-panel"><div className="illustrative">ILLUSTRATIVE EXAMPLES</div><article><div><small>ORAL READING FLUENCY</small><b>27 <em>→</em> 39</b><span>correct words per minute</span></div><strong>+12 WCPM</strong></article><article><div><small>SILENT-E WORD LIST FLUENCY</small><b>8 <em>→</em> 22</b><span>correct words per minute</span></div><strong>+14</strong></article><article><div><small>READING ACCURACY</small><b>89% <em>→</em> 96%</b><span>connected-text accuracy</span></div><strong>+7 pts</strong></article><article><div><small>HIGH-FREQUENCY WORDS</small><b>32/50 <em>→</em> 46/50</b><span>read automatically</span></div><strong>+14</strong></article><article><div><small>NONSENSE WORD DECODING</small><b>52% <em>→</em> 84%</b><span>decoding accuracy</span></div><strong>+32 pts</strong></article><article><div><small>MULTIPLICATION FACT FLUENCY</small><b>22 <em>→</em> 37</b><span>correct per minute</span></div><strong>+15</strong></article><article><div><small>MULTI-DIGIT COMPUTATION</small><b>50% <em>→</em> 90%</b><span>task accuracy</span></div><strong>+40 pts</strong></article><article><div><small>WORD-PROBLEM OPERATION</small><b>4/10 <em>→</em> 9/10</b><span>correct operation identified</span></div><strong>+5</strong></article><p>Illustrative examples of the types of measures we track. Individual results vary.</p></div>
      </section>

      <section className="section sean" id="sean"><div className="shell sean-grid"><div className="sean-monogram" aria-hidden="true"><span>Teach With</span><b>Mr. C</b><small>SEAN CONNOLLY</small></div><div><div className="eyebrow">Meet your child’s teacher</div><h2>Experience matters when<br/><i>a child is stuck.</i></h2><p className="sean-lede">Your child works directly with Sean Connolly—Teach With Mr. C—an educator with nearly two decades of experience helping struggling learners, an Orton-Gillingham trained teacher, Get Your Teach On presenter, and creator of educational content viewed more than 200 million times.</p><p>This is premium intervention delivered by an experienced teacher, learning-support specialist, curriculum creator, and founder of Intervention Station—not random homework help or a worksheet packet.</p><div className="credential-grid"><div><b>18</b><span>years teaching</span></div><div><b>200M+</b><span>educational content views</span></div><div><b>OG</b><span>trained</span></div><div><b>GYTO</b><span>presenter</span></div><div><b>1,000s</b><span>of scaffolded resource sales</span></div></div></div></div></section>

      <section className="diagnostic" id="diagnostic"><div className="shell diagnostic-grid"><div><div className="eyebrow light">Assess before we prescribe</div><h2>The Comprehensive<br/><i>Progress Map Assessment</i></h2><p>A standalone assessment that identifies strengths, missing prerequisites, the recommended starting point, and exactly how progress should be measured.</p></div><div className="diagnostic-card"><div className="diagnostic-price"><span>ONE-TIME</span><b>$249</b></div><ul><li><Check/> Comprehensive reading or math screening</li><li><Check/> Written Progress Map findings</li><li><Check/> Personalized intervention priorities</li><li><Check/> Parent results review</li></ul><div className="waived">Assessment fee waived when you enroll in a Growth Program.</div><a href="#apply" className="button cream">Book Your Progress Map <span>→</span></a></div></div></section>

      <section className="section guarantee shell"><div className="seal">GROWTH<br/><b>GUARANTEE</b><span>✦</span></div><div><div className="eyebrow">The Intervention Station growth guarantee</div><h2>A promise built around<br/><i>your child’s baseline.</i></h2><p>After the initial assessment, we establish an individualized, measurable growth target. If a qualifying student attends consistently, completes prescribed practice, and does not make measurable progress toward that goal, we will reassess, adjust instruction, and provide additional support according to program terms.</p><small>No invented percentages. No one-size-fits-all promises. Just responsible goals, responsive teaching, and a commitment to the process.</small></div></section>

      <section className="section voices"><div className="shell center"><div className="eyebrow">The experience we’re building</div><h2>What parents deserve to feel.</h2><div className="quote-grid"><blockquote>“For the first time, I understand exactly what’s getting in my child’s way—and what we’re doing about it.”<cite>THE CLARITY PARENTS DESERVE</cite></blockquote><blockquote>“We’re no longer guessing. The plan is specific, and I can finally see the skills moving.”<cite>THE CONFIDENCE DATA CAN CREATE</cite></blockquote><blockquote>“Homework isn’t the whole story anymore. We’re fixing the foundation underneath it.”<cite>THE RELIEF ROOT-CAUSE SUPPORT CAN BRING</cite></blockquote></div><p className="placeholder-note">These statements illustrate the intended parent experience and are not client testimonials. Verified family stories will be added here.</p></div></section>

      <section className="section faq shell" id="faq"><div><div className="eyebrow">Questions, answered</div><h2>Before you<br/><i>get started.</i></h2><p>Still unsure which program fits? Start with the Progress Map. The data will guide the recommendation.</p></div><div className="faq-list">
        <details open><summary>Is this just homework help?<span>+</span></summary><p>No. We may support school success, but sessions target the foundational skills causing the struggle. Instruction is driven by your child’s diagnostic data—not tonight’s worksheet.</p></details>
        <details><summary>What ages and grades do you serve?<span>+</span></summary><p>Programs are designed for elementary learners. The initial conversation helps determine whether our approach matches your child’s needs.</p></details>
        <details><summary>How does the Progress Map assessment work?<span>+</span></summary><p>We screen the relevant skill chain, review the results, and explain where performance is strong, where it breaks down, what instruction should target first, and which measures will show growth.</p></details>
        <details><summary>How many live sessions are included?<span>+</span></summary><p>Every Growth Program includes a maximum of two recurring 1:1 sessions each week—typically 8–10 sessions per month depending on the calendar. The Complete program manages reading and math within those same two weekly sessions.</p></details>
        <details><summary>When will I receive progress updates?<span>+</span></summary><p>You’ll receive a clear monthly growth report, while targeted skills are monitored weekly or biweekly depending on the program and measure.</p></details>
        <details><summary>Do I need the At-Home Accelerator?<span>+</span></summary><p>No. It is an optional add-on for families who want a more personalized routine between sessions. Every core program already includes basic prescribed home practice.</p></details>
        <details><summary>Does the Growth Guarantee promise a specific score increase?<span>+</span></summary><p>No. We set a responsible target from your child’s own baseline. The guarantee covers reassessment, instructional adjustment, and additional support under the program terms—not a universal percentile or percentage claim.</p></details>
      </div></section>

      <section className="apply" id="apply"><div className="shell apply-grid"><div><div className="eyebrow light">Three initial 1:1 openings</div><h2>Let’s find out<br/><i>what’s really missing.</i></h2><p>Tell us about your child and every Wednesday/Thursday time your family can consistently attend. Availability is reviewed before a recurring time is assigned.</p><div className="apply-points"><span><b>01</b> Share your concerns</span><span><b>02</b> Indicate all available times</span><span><b>03</b> Book the Progress Map</span></div><p className="schedule-note"><b>Important:</b> Selecting a time indicates availability and does not reserve that time. Every student receives a maximum of two recurring sessions per week. Alternating weekends are reserved for assessments, parent meetings, makeups, or occasional support—not a third recurring session.</p></div>
        {sent ? <div className="success"><span>✓</span><h3>Thank you!</h3><p>Your inquiry is ready. This demo form is front-end only; connect it to your preferred form service before launch.</p><button className="button" onClick={()=>setSent(false)}>Send another inquiry</button></div> : <form onSubmit={submit}><h3>Apply for 1:1 Intervention</h3><div className="field-row"><label>Parent name<input required name="parentName" placeholder="Your name"/></label><label>Email address<input required type="email" name="email" placeholder="you@example.com"/></label></div><div className="field-row"><label>Child’s grade<select required name="grade" defaultValue=""><option value="" disabled>Select grade</option><option>K–1</option><option>2–3</option><option>4–5</option><option>6+</option></select></label><label>Main area of concern<select required name="concern" defaultValue=""><option value="" disabled>Select one</option><option>Reading</option><option>Math</option><option>Reading + Math</option><option>Not sure yet</option></select></label></div><label>What are you noticing?<textarea name="message" rows={4} placeholder="Tell us what feels hardest right now…"/></label><fieldset className="availability-field"><legend>Recurring Wednesday + Thursday availability</legend><p>Select every same-time slot your child could consistently attend on both evenings.</p><div><label><input type="checkbox" name="availability" value="5pm"/><span>5:00 PM</span></label><label><input type="checkbox" name="availability" value="6pm"/><span>6:00 PM</span></label><label><input type="checkbox" name="availability" value="7pm"/><span>7:00 PM</span></label></div><small>Selecting a time indicates availability and does not reserve that time.</small></fieldset><fieldset className="addon-field"><legend>Would you like personalized at-home practice?</legend><p>This is optional and does not affect your application.</p><label><input type="radio" name="homePractice" value="accelerator"/><span><b>Yes — At-Home Accelerator</b><small>Personalized daily slides, monthly practice pack, learning library, songs/videos, and weekly plan • +$99/month</small></span></label><label><input type="radio" name="homePractice" value="maybe"/><span><b>Maybe — tell me more</b><small>We’ll explain the options during your consultation.</small></span></label><label><input type="radio" name="homePractice" value="no"/><span><b>No thanks</b><small>Basic prescribed home practice is still included.</small></span></label></fieldset><button className="button" type="submit">Apply for 1:1 Intervention <span>→</span></button><small>Submitting an application does not reserve a time or guarantee enrollment.</small></form>}
      </div></section>

      <footer><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">IS</span><span>Intervention <em>Station</em></span></a><p>Find the gap. Teach the skill.<br/>Prove the growth.</p></div><div><b>EXPLORE</b><a href="#method">Our Method</a><a href="#sean">Meet Sean</a><a href="#programs">Programs</a><a href="#faq">FAQ</a></div><div><b>GET STARTED</b><a href="#diagnostic">Progress Map Assessment</a><a href="#apply">Apply for Intervention</a></div><div><b>APPROACH</b><span>1:1 personalized intervention</span><span>Reading • Math • Both</span></div></div><div className="shell footer-bottom"><span>© 2026 Intervention Station. All rights reserved.</span><span>Because tutoring should be based on data—not hope.</span></div></footer>
    </main>
  );
}
