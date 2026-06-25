import ButtonLink from "./ButtonLink.jsx";
import { assets } from "../data/siteContent.js";

export default function AboutSection() {
  return (
    <section className="about-section" style={{ backgroundImage: `url(${assets.aboutBackground})` }}>
      <div className="inside about-grid">
        <div className="about-mark">
          <picture>
            <source media="(max-width: 767px)" srcSet={assets.aboutMobileMark} />
            <img src={assets.aboutLogo} alt="" />
          </picture>
        </div>
        <div className="about-copy">
          <h2>
            ABOUT
            <br />
            MUJIN ASSOCIATES
          </h2>
          <p>
            무진어소시에이츠는 언제나 개인과 조직의 잠재력이 온전히 발현되고,
            <br />
            매일의 삶과 비즈니스에 편안함과 행복함이 머물 수 있도록 든든한 파트너로서 함께합니다.
          </p>
          <ButtonLink href="https://www.mujinassociates.com/aboutmujin">자세히 보기</ButtonLink>
        </div>
      </div>
    </section>
  );
}
