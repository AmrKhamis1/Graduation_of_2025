import "./html.css";

export default function HTML() {
  return (
    <div class="container">
      <div class="bg-elements">
        <div class="bg-circle"></div>
        {/* <div class="bg-circle"></div> */}
        <div class="bg-circle"></div>
      </div>

      <div class="decorative-dots" id="dots"></div>

      <div class="content">
        <h1 class="year">2025</h1>
        <p class="tagline">
          We are <span class="highlight">unique</span>. We are{" "}
          <span class="highlight">unstoppable</span>.
        </p>

        <div class="qr-section pulse"></div>

        <div class="footer">
          <p>Created with pride by the Class of 2025</p>
          <div class="social-icons">
            <div class="social-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
