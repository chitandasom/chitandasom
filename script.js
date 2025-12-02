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

