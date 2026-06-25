export default function CtaSection() {
  return (
    <section className="cta-section">
      <a className="cta-copy" href="mailto:bjkim@mujinassociates.com">
        <span className="mobile-only">마음챙김 프로그램이 궁금하다면</span>
        <span>망설이지 말고 지금 시작하세요!</span>
      </a>
      <a className="cta-button" href="mailto:bjkim@mujinassociates.com">
        <span className="desktop-only">바로 문의하기</span>
        <span className="mobile-only">문의하기</span>
      </a>
    </section>
  );
}
