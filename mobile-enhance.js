<script>
(function () {
  console.log("可云 Premium 商务风增强 loaded");

  // 等待页面渲染完毕
  function waitForPlans() {
    const cards = document.querySelectorAll(".ant-card-body, .n-card__content");
    if (cards.length === 0) {
      requestAnimationFrame(waitForPlans);
      return;
    }
    enhance(cards);
  }

  function enhance(cards) {
    cards.forEach((card) => {
      if (card.dataset.enhanced === "1") return;

      // 筛选可折叠内容
      const blocks = Array.from(card.querySelectorAll("li, p, div"))
        .filter((b) => b.innerText.trim() !== "");
      if (blocks.length < 4) return;

      // 创建折叠包裹容器
      const wrapper = document.createElement("div");
      wrapper.className = "ky-premium-collapse-wrapper";

      const inner = document.createElement("div");
      inner.className = "ky-premium-inner-block";

      blocks.forEach((b) => inner.appendChild(b.cloneNode(true)));
      wrapper.appendChild(inner);

      // 替换原内容
      blocks.forEach((b) => b.remove());
      card.prepend(wrapper);

      // 添加展开按钮
      const btn = document.createElement("div");
      btn.className = "ky-premium-btn";
      btn.innerText = "展开详情 ▼";

      let expanded = false;
      btn.onclick = () => {
        expanded = !expanded;
        wrapper.classList.toggle("open", expanded);
        btn.innerText = expanded ? "收起详情 ▲" : "展开详情 ▼";
      };

      card.appendChild(btn);
      card.dataset.enhanced = "1";
    });
  }

  // 等待渲染完毕后执行
  setTimeout(waitForPlans, 1000);
})();
</script>
