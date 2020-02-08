<template>
  <div class="row align-justify ba-my-profile-container">
    <div class="column small-12 large-5">
      <div class="ba-my-profile-info-container">
        <img src="assets/img/order-service/Irina-Popova.jpg" alt="My profile image" />
        <div class="ba-my-profile-info-container__inner">
          <input type="text" value="Ірина Попова" class="ba-info-container-title" readonly />
          <input type="text" value="Полтава" readonly />
          <p class="ba-info-container-desc">Тут ви можете залишити інформацію про себе.</p>
          <button type="button" class="ba-button-edit-profile" data-action="edit">Редагувати</button>
          <!-- <button type="submit" class="ba-button-logout show-for-medium" data-logout>Вихід</button> -->
          <a href="index.html" class="ba-button-logout show-for-medium">Вихід</a>
        </div>
        <!-- /.ba-my-profile-info-container__info -->
      </div>
      <!-- /.ba-my-profile-info-container -->
    </div>
    <div class="column small-12 large-7">
      <div class="card ba-pet-card" v-for="pet in userPetsCards">
        <div class="card-section small-6 ba-card-section-left">
          <div class="ba-pet-card__inner">
            <div class="ba-pet-card__item">
              <label>Кличкa:</label>
              <input type="text" :value="pet.petNickname" readonly />
            </div>
            <!-- /.ba-pet-card__item -->
            <div class="ba-pet-card__item">
              <label>Вiк:</label>
              <input type="text" :value="pet.petAge" readonly />
            </div>
            <!-- /.ba-pet-card__item -->
            <div class="ba-pet-card__item">
              <label>Порода:</label>
              <input type="text" :value="pet.breed" readonly />
            </div>
            <!-- /.ba-pet-card__item -->
            <button
              type="button"
              class="ba-pet-card-edit-button"
              data-action="edit"
              v-on:click="editPetCard"
            >Редагувати</button>
          </div>
          <!-- /.ba-pet-card__title -->
        </div>
        <div class="card-section small-6 ba-card-section-right">
          <!-- <img src="assets/img/order-service/dog.jpg" alt="Pet"> -->
          <img :src="pet.petImg" :alt="pet.petNickname" />
        </div>
        <!-- /.card-section -->
      </div>
      <!-- /.column -->
    </div>
    <div class="column small-12 ba-buttons-my-profile-small show-for-small-only">
      <!-- <button type="submit" class="ba-button-logout" data-logout>Вихід</button> -->
      <a href="index.html" class="ba-button-logout">Вихід</a>
    </div>
    <!-- /.ba-buttons-small -->
  </div>
</template>

<script>
// import json from '../db/data.json';
export default {
  data() {
    return {
      userPetsCards: [],
      profileData: []
    };
  },
  methods: {
    editUserInfo() {},
    editPetCard() {
      let petsCardsColumn = document.querySelectorAll(".ba-pet-card");

      function editPetData() {
        petsCardsColumn.forEach(petCard => {
          petCard.addEventListener("click", event => {
            let inputFields = petCard.querySelectorAll('[type="text"]');
            let eventEl = event.target;
            let action = eventEl.dataset.action;
            if (!action) return;

            if (action == "edit") {
              inputFields.forEach(field => {
                field.readOnly = !field.readOnly;
              });
            }
          });
        });
      }

      editPetData();
    }
  },
  mounted() {
    fetch("assets/db/pets.json")
      .then(res => res.json())
      .then(list => {
        this.userPetsCards = list;
      });
  }
};
</script>