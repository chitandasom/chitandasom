/* =========================
      모바일 제어
========================= */
const mChitandaBtn = document.getElementById("m-chitanda-btn");
const mContactBtn  = document.getElementById("m-contact-btn");

const mChitandaPanel = document.getElementById("m-chitanda-panel");
const mContactPanel  = document.getElementById("m-contact-panel");

document.querySelectorAll(".m-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = btn.dataset.panel;
    if (p === "m-chitanda") mChitandaPanel.style.display = "none";
    if (p === "m-contact")  mContactPanel.style.display  = "none";
  });
});

mChitandaBtn.onclick = () => mChitandaPanel.style.display = "block";
mContactBtn.onclick  = () => mContactPanel.style.display  = "block";


/* =========================
      웹 제어
========================= */
const wChitandaBtn = document.getElementById("w-chitanda-btn");
const wContactBtn  = document.getElementById("w-contact-btn");

const wChitandaFilled = document.getElementById("w-chitanda-filled");
const wContactFilled  = document.getElementById("w-contact-filled");

document.querySelectorAll(".w-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const p = btn.dataset.panel;
    if (p === "w-chitanda") wChitandaFilled.style.display = "none";
    if (p === "w-contact")  wContactFilled.style.display  = "none";
  });
});

wChitandaBtn.onclick = () => wChitandaFilled.style.display = "block";
wContactBtn.onclick  = () => wContactFilled.style.display  = "block";

/* ===========================
   PC만 반응형 스케일 적용
=========================== */

const PC_WIDTH = 1920;
const PC_HEIGHT = 1080;

function applyPcScale() {
  const ww = window.innerWidth;
  const wh = window.innerHeight;

  const isPc = ww > 900; // 모바일 기준과 동일

  const web = document.querySelector(".web-wrapper");
  const mobile = document.querySelector(".mobile-wrapper");

  if (isPc) {
    const scale = Math.min(ww / PC_WIDTH, wh / PC_HEIGHT);
    web.style.transform = `translate(-50%, -50%) scale(${scale})`;
    web.style.transformOrigin = "center center";

    // 모바일은 숨김
    mobile.style.transform = ""; 
    mobile.style.transformOrigin = "";
  } else {
    // PC transform 완전 제거
    web.style.transform = "";
    web.style.transformOrigin = "";

    // 모바일 transform 완전 제거 (반드시 필요)
    mobile.style.transform = "";
    mobile.style.transformOrigin = "";
  }
}

applyPcScale();
window.addEventListener("resize", applyPcScale);

// function alignMobileCloseButtons() {
//   const chitandaPanel = document.querySelector(".m-panel-chitanda");
//   const contactPanel = document.querySelector(".m-panel-contact");

//   if (!chitandaPanel || !contactPanel) return;

//   // chitanda의 top 값 (예: -14px)
//   const chitandaTop = parseFloat(getComputedStyle(chitandaPanel).top);

//   // 화면 밖으로 나간 값 (예: 14)
//   const chitandaOffset = Math.abs(chitandaTop);

//   // contact의 닫기 버튼 요소
//   const contactClose = contactPanel.querySelector(".m-close");

//   // m-close 기본 위치 값 (px)
//   const baseCloseTop = 31;

//   // Somi 원하는 보정치: offset에서 2px 빼기
//   const adjustedOffset = chitandaOffset - 2;

//   // 최종 적용 값
//   contactClose.style.top = (baseCloseTop - adjustedOffset) + "px";
// }

// alignMobileCloseButtons();
// window.addEventListener("resize", alignMobileCloseButtons);
// function alignMobileCloseButtons() {
//   const chitandaPanel = document.querySelector(".m-panel-chitanda");
//   const contactPanel = document.querySelector(".m-panel-contact");

//   if (!chitandaPanel || !contactPanel) return;

//   // chitanda의 top 값 (예: -14px)
//   const chitandaTop = parseFloat(getComputedStyle(chitandaPanel).top);

//   // 화면 밖으로 나간 값 (예: 14)
//   const chitandaOffset = Math.abs(chitandaTop);

//   // contact의 닫기 버튼 요소
//   const contactClose = contactPanel.querySelector(".m-close");

//   // m-close 기본 위치 값 (px)
//   const baseCloseTop = 31;

//   // Somi 원하는 보정치: offset에서 2px 빼기
//   const adjustedOffset = chitandaOffset - 2;

//   // 최종 적용 값
//   contactClose.style.top = (baseCloseTop - adjustedOffset) + "px";
// }

// alignMobileCloseButtons();
// window.addEventListener("resize", alignMobileCloseButtons);

function fixMobileTextPosition() {
  const chitandaPanel = document.querySelector(".m-panel-chitanda");
  const contactPanel  = document.querySelector(".m-panel-contact");

  const chitandaText = document.querySelector(".m-chitanda-text");
  const contactText  = document.querySelector(".m-contact-text");

  if (!chitandaPanel || !contactPanel) return;

  // 의도한 아래 spacing(px)
  const bottomSpacingPx = 24;

  chitandaText.style.bottom = bottomSpacingPx + "px";
  chitandaText.style.top = "auto";

  contactText.style.bottom = bottomSpacingPx + "px";
  contactText.style.top = "auto";
}

fixMobileTextPosition();
window.addEventListener("resize", fixMobileTextPosition);
window.addEventListener("orientationchange", fixMobileTextPosition);


function updateVh() {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
}

updateVh();                       // 초기 실행
window.addEventListener("resize", updateVh);
window.addEventListener("orientationchange", updateVh);
window.addEventListener("load", updateVh);

// ✔ 크롬 버그 보정: 여러 번 실행
setTimeout(updateVh, 100);
setTimeout(updateVh, 300);
setTimeout(updateVh, 500);
