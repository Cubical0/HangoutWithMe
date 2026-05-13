/**
 * Server-rendered hero content visible to search engine crawlers.
 * This component renders static HTML that Google will see in the raw source.
 * The animated client component (HomeHero.tsx) hydrates over this content.
 */
export default function HomeHeroStatic() {
  return (
    <section aria-label="Hero section - HangoutCodex platform overview" className="sr-only" aria-hidden="false">
      <h1>HangoutCodex - Build, Trade, Innovate</h1>
      <p>HangoutCodex is the all-in-one platform where hustlers, traders and founders collide. Learn, trade, scale and grow together with 100K+ active members.</p>
      <div>
        <ul>
          <li>100K+ Active Members</li>
          <li>100+ Clients Served</li>
          <li>99.9% Uptime</li>
        </ul>
      </div>
      <p>Join our Discord community to get started with crypto trading signals, e-commerce courses, SaaS development, startup fundraising, and enterprise IT services.</p>
    </section>
  );
}