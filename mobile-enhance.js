(function () {
  console.log("[可云] mobile-enhance.js loaded");

  // ------------------------------
  // 1. 自动折叠套餐说明（手机端）
  // ------------------------------
  function shortenPlanDescriptions() {
    const blocks = document.querySelectorAll(".ant-card-body");

    blocks.forEach((block) => {
      const fullText = block.innerText.trim();

      if (fullText.length > 120 && !block.dataset.enhanced) {
        block.dataset.enhanced = "1";

        const shortText = fullText.slice(0, 120) + "...";

        const wrapper = document.createElement("div");
        wrapper.style.whiteSpace = "pre-wrap";

        const textDom = document.createElement("div");
        textDom.innerText = shortText;

        const btn = document.createElement("span");
        btn.innerText = "展开详情";
        btn.style.color = "#ff69a8";
        btn.style.fontSize = "14px";
        btn.style.marginLeft = "6px";

        wrapper.appendChild(textDom);
        wrapper.appendChild(btn);

        block.innerHTML = "";
        block.appendChild(wrapper);

        btn.addEventListener("click", () => {
          textDom.innerText =
            textDom.innerText === shortText ? fullText : shortText;
          btn.innerText =
            btn.innerText === "展开详情" ? "收起" : "展开详情";
        });
      }
    });
  }

  // ------------------------------
  // 2. 常驻购买栏（手机端）
  // ------------------------------
  function initBuyBar() {
    if (document.getElementById("mobile-buy-bar")) return;

    const bar = document.createElement("div");
    bar.id = "mobile-buy-bar";
    bar.style.position = "fixed";
    bar.style.bottom = "0";
    bar.style.left = "0";
    bar.style.right = "0";
    bar.style.height = "60px";
    bar.style.display = "flex";
    bar.style.justifyContent = "center";
    bar.style.alignItems = "center";
    bar.style.background = "white";
    bar.style.boxShadow = "0 -2px 10px rgba(0,0,0,0.08)";
    bar.style.zIndex = "9999";

    bar.innerHTML = `
      <button id="buy-btn"
        style="
          width: 90%;
          height: 45px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(90deg,#ff7ab9,#ff54a3);
          color: white;
          font-size: 1
