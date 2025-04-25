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
        <h1 class="year">ICT 2025</h1>
        <p class="tagline">
          We are <span class="highlight">unique</span>. We are{" "}
          <span class="highlight">unstoppable</span>.
        </p>

        <div class="qr-section pulse"></div>

        <div class="footer"></div>
      </div>
    </div>
  );
}
