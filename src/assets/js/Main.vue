<template>
  <div>
    <section id="intro" class="ba-section-intro">
      <div class="ba-main-title-container">
        <h1 class="ba-section-intro__title">Ми потурбуємося про ваших улюбленців</h1>
      </div>
      <!-- /.ba-main-title -->
      <div class="row align-justify">
        <div class="column medium-7 large-4 ba-section-intro__col-left show-for-large">
          <p>
            Знаючи не з чуток про проблеми, що виникають коли всім членам Вашої родини потрібно відлучитися на деякий
            час, а домашнього вихованця залишити ніде, коли друзі не виявляють особливої радості від майбутнього
            спілкування з твариною, нами був відкритий готель для тварин.
          </p>
        </div>
        <!-- /.ba-section-intro__col-1 -->
        <div class="column medium-7 large-4 ba-section-intro__col-right show-for-medium">
          <p
            class="ba-col-2-description"
          >Оберіть Ваше місто та перегляньте список доступних послуг у Вашому регіоні:</p>
          <div class="ba-select-cities">
            <select v-model="selected" v-on:change="showServices">
              <option selected disabled value="Оберіть Ваше місто">Оберіть Ваше місто</option>
              <option value="Poltava">Полтава, вул. Кірова, 10</option>
              <option value="Kyiv">Киев, вул. Бандери, 120</option>
              <option value="Kharkiv">Харьков, вул. Шухевича, 12</option>
            </select>
            <svg
              class="select-arrow-intro"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10L5 5L0 0V10Z" fill="black" fill-opacity="0.54" />
            </svg>
          </div>
        </div>
        <!-- /.ba-section-intro__col-2 -->
      </div>

      <div class="ba-select-cities-mobile ba-select-cities show-for-small-only">
        <select class="ba-select-mobile___cities" v-model="selected" v-on:change="showServices">
          <option selected disabled>Оберіть Ваше місто</option>
          <option value="Poltava">Полтава, вул. Кірова, 10</option>
          <option value="Kyiv">Киев, вул. Бандери, 120</option>
          <option value="Kharkiv">Харьков, вул. Шухевича, 12</option>
        </select>
		  <svg
              class="select-arrow-intro"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10L5 5L0 0V10Z" fill="black" fill-opacity="0.54" />
            </svg>
      </div>
      <!-- /.select-mobile -->
      <div class="ba-section-intro__socials show-for-medium">
        <ul class="menu ba-socials-row">
          <li>
            <a href="https://twitter.com/?lang=ru" target="_blank">
              <svg width="24" height="20">
                <use xlink:href="#icon-twitter" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/" target="_blank">
              <svg width="20" height="20">
                <use xlink:href="#icon-linkedin" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://google.com" target="_blank">
              <svg width="20" height="20">
                <use xlink:href="#icon-google" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <!-- /.ba-section-intro__socials -->
    </section>
    <!-- /.ba-section-intro -->

    <section id="advantages" class="ba-section-advantages ba-section">
      <div class="row column align-justify">
        <h2 class="ba-section-title">Наші переваги</h2>
        <div class="row">
          <div class="column small-12 large-3 ba-column-advantages">
            <div class="ba-column-title">
              <svg width="20" height="18">
                <use xlink:href="#icon-heart" />
              </svg>
              <h3>індивідуальний підхід</h3>
            </div>
            <!-- /.ba-column-title -->
            <div class="ba-column-description">
              <p>
                Всі наші гості розміщуються з урахуванням їх особливостей і побажань господарів. Ми забезпечуємо догляд,
                враховуючи надану інформацію від господарів про звички, поведінку та характер тварини. Організуємо звичне
                домашнє харчування, вигул собак на обгородженій території в компанії і без.
              </p>
            </div>
            <!-- /.column-description -->
          </div>
          <div class="column small-12 large-3 ba-column-advantages">
            <div class="ba-column-title">
              <svg width="20" height="18">
                <use xlink:href="#icon-heart" />
              </svg>
              <h3>покращене проживання</h3>
            </div>
            <!-- /.ba-column-title -->
            <div class="ba-column-description">
              <p>
                Готель передбачає окреме проживання кожного вихованця. Номери оснащені вентиляцією і системою опалення з
                можливістю регулювання температурного режиму. Регулярно проходить прибирання та кварцування. Собаки і
                кішки міститися в різних корпусах. Для котів передбачені лежанки, драбинки, когтеточки. У псів просторі
                вольєри.
              </p>
            </div>
            <!-- /.column-description -->
          </div>
          <div class="column small-12 large-3 ba-column-advantages">
            <div class="ba-column-title">
              <svg width="20" height="18">
                <use xlink:href="#icon-heart" />
              </svg>
              <h3>контроль ветеринарів</h3>
            </div>
            <!-- /.ba-column-title -->
            <div class="ba-column-description">
              <p>
                Під час перетримки, тварини знаходяться під наглядом кваліфікованих ветеринарів, які щодня проводять
                огляди. При необхідності ветлікар проведе всі необхідні процедури, якщо ваш вихованець знаходиться на
                лікуванні.
              </p>
            </div>
            <!-- /.column-description -->
          </div>
        </div>
      </div>
    </section>
    <!-- /.ba-section-advantages -->

    <section id="settlement-conditions" class="ba-section-settlement-conditions ba-section">
      <div class="row column ba-section-settlement-conditions__content">
        <h2 class="ba-section-title">Умови заселення</h2>
        <div class="row">
          <div class="column small-12 large-5 ba-column-description">
            <p>
              В умовах підвищеного попиту послуги під час відпусток влітку, а також у святкові дати, ми рекомендуємо
              бронювати місця заздалегідь.
            </p>
            <p>
              Перед заселенням, кожен гість проходить обов'язковий огляд у ветеринара. Ми приймаємо в зооготелі
              тварин без інфекційних, паразитних і грибкових захворювань. Вихованці повинні бути щеплені і оброблені
              від ектопаразитів. Перед заселенням, тваринам необхідно зробити вакцинацію з відміткою в ветпаспорт.
            </p>
            <p>
              Отримати більш детальну консультацію по правилам заселення можна у наших фахівців за телефоном, що
              вказаний нижче, або написавши на нашу електронну пошту.
            </p>
            <!-- /.column-description -->
          </div>
          <div class="column small-12 large-7">
            <a href="gallery.html">
              <img src="assets/img/sleeping-dog.jpg" alt="Sleeping dog" />
            </a>
            <!-- /.column-image -->
          </div>
        </div>
      </div>
    </section>
    <!-- /.ba-section-settlement-conditions -->

    <section id="services" class="ba-section--services ba-section">
      <div class="row">
        <div class="column small-12 large-5 align-justify show-for-medium">
          <a href="order-service.html">
            <img src="assets/img/grey-cat.jpg" alt="Grey Cat" />
          </a>
        </div>

        <div class="column small-12 large-7">
          <h2 class="ba-section-title ba-section-title--services">Перелік послуг</h2>
          <ul class="vertical menu ba-services-list">
            <li class="ba-services-list-item">
              <div class="ba-services-list-item__price">
                <h4 class="ba-service-price-title">Перетримка (котики)</h4>
                <span>{{cats}}</span> грн
              </div>
              <!-- /.ba-price -->
              <p class="ba-service-item-description">бокс з відділеннями для сну і гігієни</p>
            </li>
            <li class="ba-services-list-item">
              <div class="ba-services-list-item__price">
                <h4 class="ba-service-price-title">Перетримка (собаки)</h4>
                <span>{{dogs}}</span> грн
              </div>
              <!-- /.ba-price -->
              <p>бокс/вольєр в окремій кімнаті</p>
            </li>
            <li class="ba-services-list-item">
              <div class="ba-services-list-item__price">
                <h4 class="ba-service-price-title">Грумінг</h4>
                <span>{{groomingW}}*</span> грн
              </div>
              <!-- /.ba-price -->
              <p>Миття</p>
            </li>
            <li class="ba-services-list-item">
              <div class="ba-services-list-item__price">
                <h4 class="ba-service-price-title">Грумінг</h4>
                <span>{{groomingWC}}*</span> грн
              </div>
              <!-- /.ba-price -->
              <p>Миття та стрижка</p>
            </li>
            <li class="ba-services-list-item">
              <div class="ba-services-list-item__price">
                <h4 class="ba-service-price-title">Огляд ветеринара</h4>
                <span>{{inspection}}</span>грн
              </div>
              <!-- /.ba-price -->
              <p>Загальний</p>
            </li>
          </ul>
        </div>
		  </div>
        <div class="row small-12 ba-services-order-row">
          <a href="order-service.html" class="button button--service">перейти до замовлення</a>
        </div>

        <div class="row ba-link-to-gallery-container">
          <div class="column small-12 medium-8 ba-link-description">
            <p>Ви можете переглянути фото з умовами, в яких будуть на перетримці ваші вихованці за цією ссилкою</p>
          </div>
          <div class="column small-12 medium-3">
            <a href="gallery.html" class="ba-link-to-gallery">Наші фото</a>
          </div>
        </div>
      
    </section>
    <!-- /.ba-section-services -->
  </div>
</template>

<script>
// import json from '../db/data.json';
export default {
  data() {
    return {
      selected: "Оберіть Ваше місто",
      cats: "",
      dogs: "",
      inspection: "",
      groomingW: "",
      groomingWC: "",
      servicesList: []
    };
  },
  methods: {
    showServices() {
      fetch("assets/db/services.json")
        .then(response => response.json())
        .then(services => {
          services.forEach(element => {
            if (element.cityName == this.selected) {
              this.cats = element.overExposureCats;
              this.dogs = element.overExposureDogs;
              this.inspection = element.inspection;
              this.groomingW = element.groomingW;
              this.groomingWC = element.groomingWC;
            }
            window.scrollTo(0, 1996);
          });
        });
    }
  }
};
</script>