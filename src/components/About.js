import React from 'react'
import ButtonLink from '../components/ButtonLink'

const About = (props) => {
  <section className="about">
    <ButtonLink
      href="/work"
      size="small"
      type="primary"
      text="Explore our work"
      hasArrow
    />

    <div className="content">
      <header>
        <Emerge>
          <h1>About Might & Method</h1>
        </Emerge>

        <Emerge>
          <p>In a nutshell of sorts, <span>Might & Method</span> is a digital agency, but we prefer to think of ourselves as digital alchemists. We convert pixels into magic for you and your customers. The secret’s in the sauce, baby.</p>
        </Emerge>
      </header>

      <Emerge>
        <h2>How We Work</h2>
      </Emerge>

      <Emerge>
      <p>Our ultimate goal is to create something that meets your needs while delighting your customers. If we were to put a Venn diagram of that statement here, it would look something like two slightly different-colored circles — one labeled “Meets your needs”, the other labeled “Delights your customers” — overlapping in the middle, and it’d say “The Sweet Spot” or something like that. But you get the idea. Unless you’ve never seen a Venn diagram, in which case, congrats.</p>
      </Emerge>

      <div className="grid">
        <div className="row">
        <Emerge>
          <div>
            <h3>Getting to know you & your company</h3>
            <p>Every final product should be a truthful reflection of your business, so we dig into your goals, processes, resources, opportunities and limitations. Think of us as the tailor taking every measurement on your new pair of silky smooth pants before you wear them in public. Looking good.</p>
          </div>
          </Emerge>
          <Emerge>
          <div>
            <h3>Understanding your customers</h3>
            <p>Sure, we said "audience" up there, but we're talking about people, people! We help you understand the distinct individuals who make up your target audience so you can discover how to guide them from "maybe" to "yes"—to "yes" yet again.</p>
          </div>
          </Emerge>
        </div>

        <div className="row">
        <Emerge>
          <div>
            <h3>Defining opportunities for growth</h3>
            <p>We're committed to giving you exactly what you want, but more than that, we aim to define goals first and determine the best course of action to meet them. We identify where potential solutions overlap with customers' dilemmas to drive a winning strategy.</p>
          </div>
          </Emerge>
          <Emerge>
          <div>
            <h3>Build the dang thing<span>&trade;</span></h3>
            <p>We define a clear process, identify specific needs for execution and set a step-by-step timeline. Those sound a little rigid, we know, but we also know that steps in a process can pivot, needs can change and key dates move. We execute because we adapt. We're limber folks—for the most part.</p>
          </div>
          </Emerge>
        </div>
      </div> {/* /grid */}

      <Emerge>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <a href="javascript:(0);" onClick={() => this.scrollTo('work-section')}>
            See what we've created <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
      </Emerge>
    </div>
  </section>
}

export default About