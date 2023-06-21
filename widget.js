// Function to add CSS styles
const addCSS = () => {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
      .campspace_widget {
        --csGreen: #00b189;
        --csGreenShaded: #27634d;
        --csYellow: #ffb100;
        --csYellowShaded: #d99d26;
        --csBlue: #4074bc;
        --csBlueShaded: #234063;
      
        --csBlack: #000000;
        --csWhite: #ffffff;
        --csDarkGrey: #32322e;
        --csDarkGreyShaded: #191917;
        --csMediumGrey: #9d9d95;
        --csMediumGreyShaded: #6e6e68;
        --csLightGrey: #f5f5f1;
        --csLightGreyShaded: #ddddd9;
        
        display: grid;
        grid-template-columns: 40% 40%;
        grid-template-rows: 1fr;
        grid-column-gap: 120px;
        grid-row-gap: 0px;
      
        width: 900px;
        height: 375px;
        background-color: white;
      
        border-radius: 25px;
      
        position: absolute;
        left: 28%;
        top: 28%;
      }
      
      .campspace_widget__image img {
        width: auto;
        height: 375px;
        border-bottom-left-radius: 22px;
        border-top-left-radius: 22px;
      }
      
      .campspace_widget__info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        max-width: 70%;
        margin-left: 100px;
      }
      
      .campspace_widget__info_logo {
        max-width: 100%;
        fill: #00b189;
      }
      
      .campspace_widget__info_title {
        color: var(--csMediumGreyShaded);
        font-size: 1.3rem;
        font-weight: 500;
      }
      
      .campspace_widget__info_book {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .campspace_widget__info_book a {
        text-decoration: none;
        width: 80%;
      }
      
      .campspace_widget__info_button {
        background-color: var(--csBlue);
        color: var(--csWhite);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        border-radius: 1.2rem;
      }
    `;
  document.head.appendChild(styleElement);
};

// Function to create and append the widget to the body
const createWidget = () => {
  const section = document.createElement("section");
  section.className = "campspace_widget";
  // I want to load an image from the json file
  const widgetContent = `
      <section class="campspace_widget__image">
        <img src="https://campspace.com/media/detail/uploads/space/38/17/fc/3817fca8c428f244070c63336d4013f0.jpg" />
      </section>
      <section class="campspace_widget__info">
        <img class="campspace_widget__info_logo" src="https://www.duurzaam-ondernemen.nl/wordpress/wp-content/uploads/2021/08/campspace.png" alt="campspace logo" />
        <span class="campspace_widget__info_title">⚡️ Book Right away!</span>
        <a href="https://campspace.com/en/s/terug-naar-de-basis-natuurkampeerterrein-in-dranouter-heuvelland_5038?pitchTypeId=2846&">
          <div class="campspace_widget__info_button">Book now</div>
        </a>
      </section>
    `;

  section.innerHTML = widgetContent;
  document.body.appendChild(section);

  addCSS();
};

createWidget();
