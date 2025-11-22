(function () {
  console.log("【可云 Premium】商务风折叠模块 loaded");

  /** 注入 CSS（无需手动写 CSS 文件） **/
  const style = document.createElement("style");
  style.innerHTML = `
    .ky-premium-collapse-wrapper {
        max-height: 80px;
        overflow: hidden;
        transition: max-height .35s ease;
        margin-bottom: 8px;
    }
    .ky-premium-collapse-wrapper.open {
        max-height: 800px !important;
    }
    .ky-premium-btn {
        color: #ff6faf;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        margin-top: 4px;
        margin-bottom: 6px;
    }
  `;
  document.head.appendChild(style);

  /** 等待套餐内容加载 */
  function waitForPlans() {
    const cards = document.querySelectorAll(".ant-card-body, .n-card__content");
    if (cards.length === 0) {
      requestAnimationFrame(waitForPlans);
      return;
    }
    enhance(cards);
  }

  /** 绑定折叠功能 */
  function enhance(cards) {
    cards.forEach((card) => {
      if (card.dataset.enhanced === "1") return;

      // 读取可折叠内容（LI、DIV、P）
      const blocks = Array.from(card.querySelectorAll("li, p, div"));
      if (blocks.length < 3) return;

      // 创建折叠容器
      const wrapper = document.createElement("div");
      wrapper.className = "ky-premium-collapse-wrapper";

      const inner = document.createElement("div");
      inner.className = "ky-premium-inner-block";

      blocks.forEach((b) => inner.appendChild(b.cloneNode(true)));
      wrapper.appendChild(inner);

      // 清空原内容 → 放入折叠内容
      blocks.forEach((b) => b.remove());
      card.prepend(wrapper);

      // 控制按钮
      const btn = document.createElement("div");
      btn.className = "ky-premium-btn";
      btn.innerText = "展开详情 ▼";

      let expanded = false;
      btn.onclick = () => {
        expanded = !expanded;
        if (expanded) {
          wrapper.classList.add("open");
          btn.innerText = "收起详情 ▲";
        } else {
          wrapper.classList.remove("open");
          btn.innerText = "展开详情 ▼";
        }
      };

      card.appendChild(btn);
      card.dataset.enhanced = "1";
    });
  }

  /** MutationObserver 监听套餐异步加载 */
  const obs = new MutationObserver(() => {
    const cards = document.querySelectorAll(".ant-card-body, .n-card__content");
    if (cards.length > 0) enhance(cards);
  });
  obs.observe(document.body, { subtree: true, childList: true });

  /** 初次执行 */
  waitForPlans();
})();
