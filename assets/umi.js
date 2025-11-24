(function () {
  console.log("✅ 可云 umi.js 安全降级版加载成功");

  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
  <style>
    body {
      background: linear-gradient(180deg, #fff6fa 0%, #ffdce9 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      flex-direction: column;
      font-family: "PingFang SC", "Helvetica Neue", sans-serif;
    }
    .ky-title {
      font-size: 42px;
      font-weight: 700;
      background: linear-gradient(135deg, #ff9ccf, #ff6fa8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .ky-sub {
      color: #555;
      font-size: 16px;
      margin-top: 10px;
    }
    .ky-btn {
      margin-top: 25px;
      padding: 10px 24px;
      background: linear-gradient(135deg, #ff9ccf, #ff6fa8);
      color: #fff;
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(255, 182, 193, 0.4);
      cursor: pointer;
    }
  </style>

  <div class="ky-title">可云 Premium</div>
  <div class="ky-sub">前端已安全加载（umi.js 降级版）</div>
  <button class="ky-btn" onclick="location.reload()">刷新页面</button>
  `;
})();
