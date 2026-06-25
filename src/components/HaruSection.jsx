import ButtonLink from "./ButtonLink.jsx";
import { assets } from "../data/siteContent.js";

export default function HaruSection() {
  return (
    <section className="haru-section">
      <div className="inside haru-grid">
        <img className="haru-device" src={assets.haruDevice} alt="" />
        <div className="haru-copy">
          <picture>
            <source media="(max-width: 767px)" srcSet={assets.haruMobileLogo} />
            <img src={assets.haruLogo} alt="하루명상" />
          </picture>
          <p className="desktop-only">국민 모두를 위한 국내 최대 &amp; 최초 무료 마음챙김 콘텐츠 서비스</p>
          <p className="mobile-only">무진어소시에이츠만의 국내 최대 마음챙김 콘텐츠 서비스.</p>
          <ButtonLink href="https://harumeditation.com/" target="_blank">
            자세히 보기
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
