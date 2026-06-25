import ButtonLink from "./ButtonLink.jsx";
import { insightPosts } from "../data/siteContent.js";

function InsightCard({ post }) {
  return (
    <article className="insight-card">
      <a href={post.href}>
        <div className="insight-image" style={{ backgroundImage: `url(${post.image})` }} />
        <div className="insight-copy">
          <h3>
            <span>{post.category}</span>
            {post.title}
          </h3>
          <p>{post.summary}</p>
          <time>{post.date}</time>
        </div>
      </a>
    </article>
  );
}

export default function InsightSection() {
  return (
    <section className="section insight-section">
      <div className="inside">
        <h2 className="section-title">AICS Insight</h2>
        <div className="insight-grid">
          {insightPosts.map((post) => (
            <InsightCard key={post.title} post={post} />
          ))}
        </div>
        <div className="center">
          <ButtonLink href="https://www.mujinassociates.com/mujininsight">자세히 보기</ButtonLink>
        </div>
      </div>
    </section>
  );
}
