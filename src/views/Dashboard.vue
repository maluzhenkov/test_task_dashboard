<template>
  <v-main class="dashboard brown lighten-5">
    <v-container>
      <v-row align="center">
        <v-col cols="auto">
          <v-switch class="ma-0 pa-0" v-model="isDraggable" label="Click &amp; Drop" hide-details />
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn class="mr-4" text @click="clearData">Очистить</v-btn>
          <v-btn color="success" :to="{name: 'NewCard'}">Добавить</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <card-grid v-model="cards" :isDraggable="isDraggable" @change="saveCardList" />
  </v-main>
</template>

<script>
import CardGrid from "@/components/CardGrid";

export default {
  name: "Dashboard",
  components: {
    CardGrid
  },
  watch: {
    cards: {
      handler(newValue) {
        this.saveCardList(newValue);
      }
    }
  },
  computed: {
    isDraggable: {
      set(value) {
        this.$store.commit("SET_DRAGGABLE", value);
      },
      get() {
        return this.$store.getters.getStatusDraggable;
      }
    },
    cards: {
      set(value) {
        this.$store.commit("SET_CARDS", value);
      },
      get() {
        return this.$store.getters.getCards;
      }
    }
  },
  created() {
    this.getCardList();
  },
  methods: {
    getCardList() {
      this.$store.dispatch("getCardList");
    },
    saveCardList(items) {
      this.$store.dispatch("saveInStorage", items);
    },
    clearData() {
      this.$store.dispatch("clearStorage");
    }
  }
};
</script>
