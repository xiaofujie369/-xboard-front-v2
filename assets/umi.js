/* 可云安全降级版 umi.js v1.0
 * 功能：确保页面可显示，不依赖 React 或构建环境。
 */
(function () {
  console.log("🩷 可云 umi.js 安全降级版已加载");

  // 清空旧内容
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = `
      <style>
        body {
          font-family: "PingFang SC", "Helvetica Neue", sans-serif;
          background: linear-gradient(180deg, #fff6fa 0%, #ffdce9 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .ky-logo {
          font-size: 42px;
          font-weight: 600;
          background: linear-gradient(135deg, #ff9ccf, #ff6fa8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ky-desc {
          margin-top: 10px;
          font-size: 16px;
          color: #555;
          letter-spacing: 0.5px;
        }
        .ky-btn {
          margin-top: 24px;
          padding: 10px 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, #ff9ccf, #ff6fa8);
          color: #fff;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(255, 182, 193, 0.4);
          font-size: 15px;
        }
        .ky-btn:hover {
          opacity: 0.9;
        }
      </style>

      <div class="ky-logo">可云 Premium</div>
      <div class="ky-desc">前端系统已安全加载</div>
      <button class="ky-btn" onclick="location.reload()">刷新页面</button>
    `;
  } else {
    console.warn("⚠️ 未找到 #app 元素");
  }
})();
