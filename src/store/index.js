import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const BD_NAME = "cards";

export default new Vuex.Store({
  state: {
    isDraggable: false,
    cards: [],
  },
  getters: {
    getStatusDraggable: (state) => state.isDraggable,
    getCards: (state) => state.cards,
  },
  mutations: {
    SET_DRAGGABLE(state, value) {
      state.isDraggable = value;
    },
    SET_CARDS(state, cards) {
      state.cards = cards;
    },
    ADD_NEW_CARD(state, item) {
      // Будем добавлять в начало
      state.cards = [item, ...state.cards];
    },
  },
  actions: {
    // эмулируем запрос из бд
    async getCardList({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          const cards = JSON.parse(localStorage.getItem(BD_NAME));

          if (cards) {
            commit("SET_CARDS", cards);
          } else {
            // В условиях задачи есть 2 карточки по умолчанию
            const defaultCards = [
              {
                id: 1,
                title: "Title 1",
                createAt: new Date().toISOString(),
                description:
                  "Текст-рыба далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Осталось семантика все курсивных своего эта, строчка, ведущими большой предупредила возвращайся, там наш снова на берегу? Которое пояс большой ему переулка несколько вдали, подпоясал деревни города, вскоре, океана всемогущая рукопись выйти грустный букв меня его lorem бросил переписали приставка дал прямо.",
              },
              {
                id: 2,
                title: "Title 2",
                createAt: new Date().toISOString(),
                description:
                  "Текст-рыба далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Осталось семантика все курсивных своего эта, строчка, ведущими большой предупредила возвращайся, там наш снова на берегу? Которое пояс большой ему переулка несколько вдали, подпоясал деревни города, вскоре, океана всемогущая рукопись выйти грустный букв меня его lorem бросил переписали приставка дал прямо. Текст-рыба далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Осталось семантика все курсивных своего эта, строчка, ведущими большой предупредила возвращайся, там наш снова на берегу? Которое пояс большой ему переулка несколько вдали, подпоясал деревни города, вскоре, океана всемогущая рукопись выйти грустный букв меня его lorem бросил переписали приставка дал прямо.",
              },
            ];

            localStorage.setItem(BD_NAME, JSON.stringify(defaultCards));
            commit("SET_CARDS", defaultCards);
          }
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    async addNewCard({ commit }, item) {
      return new Promise((resolve, reject) => {
        try {
          let cards = JSON.parse(localStorage.getItem(BD_NAME));
          if (!cards) {
            localStorage.setItem(BD_NAME, JSON.stringify([item]));
          } else {
            cards = [item, ...cards];
            localStorage.setItem(BD_NAME, JSON.stringify(cards));
          }
          commit("ADD_NEW_CARD", item);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
    saveInStorage(_, items) {
      if (items && items.length > 0) {
        localStorage.setItem(BD_NAME, JSON.stringify(items));
      }
    },
    clearStorage({ commit }) {
      localStorage.removeItem(BD_NAME);
      commit("SET_CARDS", []);
    },
  },
});
