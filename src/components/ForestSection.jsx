import ButtonLink from "./ButtonLink.jsx";
import { assets, forestGallery, forestInfo } from "../data/siteContent.js";

function InfoItem({ item }) {
  return (
    <div className="forest-info-item">
      <h3>{item.label}</h3>
      <p>{item.value}</p>
    </div>
  );
}

export default function ForestSection() {
  return (
    <section className="forest-section">
      <div className="inside forest-intro">
        <div>
          <h2>고싱가의 숲</h2>
          <p className="mobile-summary">
            돈황미술연구소의 유일한 한국인, 서용 교수가 설계한 힐링 공간으로, 나무와 한지 인테리어 속에서 숲처럼 포근한 힐링을 느껴보세요.
          </p>
        </div>
        <div>
          <p className="desktop-summary">
            도심 속에 위치한 힐링 공간이며, 나무와 한지 인테리어 덕분에 숲처럼 포근하고 따뜻한 느낌을 줍니다.
            <br />
            이 공간은 돈황미술연구소의 유일한 한국인이자 동덕여자대학교 예술대학 회화과 서용 교수가 설계하여
            <br />
            안정감과 예술적인 감각을 느낄 수 있습니다.
          </p>
          <ButtonLink href="https://www.spacecloud.kr/space/23943?type=search" target="_blank">
            예약하기
          </ButtonLink>
        </div>
      </div>
      <div className="inside forest-gallery">
        <img className="forest-mobile-cover" src={assets.forestCover} alt="" />
        {forestGallery.map((image) => (
          <img key={image} src={image} alt="" />
        ))}
      </div>
      <div className="inside forest-info">
        {forestInfo.map((item) => (
          <InfoItem key={item.label} item={item} />
        ))}
      </div>
    </section>
  );
}
