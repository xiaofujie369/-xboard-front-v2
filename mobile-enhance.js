(function() {

  function enhanceProducts() {
    const items = document.querySelectorAll(".ant-list-item");
    if (!items.length) return;

    items.forEach((item) => {
      if (item.classList.contains("enhanced")) return;
      item.classList.add("enhanced");

      item.classList.add("product-card");

      const desc = item.querySelector(".ant-typography");
      if (desc) {
        desc.classList.add("product-desc-short");

        const more = document.createElement("div");
        more.className = "product-desc-more";
        more.innerText = "展开详情";
        more.onclick = () => {
          if (desc.classList.contains("product-desc-short")) {
            desc.classList.remove("product-desc-short");
            more.innerText = "收起";
          } else {
            desc.classList.add("product-desc-short");
            more.innerText = "展开详情";
          }
        };

        desc.after(more);
      }
    });
  }

  function enhanceBuyPage() {
    const price = document.querySelector(".price");
    if (!price) return;

    if (document.querySelector(".buy-bar")) return;

    const bar = document.createElement("div");
    bar.className = "buy-bar";

    bar.innerHTML = `
      <div style="font-size:16px;font-weight:700;">${price.innerText}</div>
      <button class="buy-btn">立即购买</button>
    `;

    document.body.appendChild(bar);

    const btn = bar.querySelector(".buy-btn");
    btn.onclick = () => {
      const realBtn = document.querySelector("button[type='submit']");
      realBtn?.click();
    };
  }

  const mo = new MutationObserver(() => {
    enhanceProducts();
    enhanceBuyPage();
  });

  mo.observe(document.body, { childList: true, subtree: true });

})();
