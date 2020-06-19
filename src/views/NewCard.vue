<template>
  <v-main class="newCard blue-grey lighten-5">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <v-form ref="form" v-model="valid">
            <v-card width="600">
              <v-card-title>Добавить карточку</v-card-title>
              <v-card-text>
                <v-text-field
                  v-model.trim="title"
                  label="Заголовок"
                  :rules="[v => !!v || 'Обязательное поле']"
                  clearable
                />
                <v-textarea
                  v-model.trim="description"
                  label="Описание"
                  :rules="[v => !!v || 'Обязательное поле']"
                  rows="1"
                  auto-grow
                  clearable
                />
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text :to="{name: 'Dashboard'}">Отмена</v-btn>
                <v-btn class="success" @click="add">Добавить</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "NewCard",
  data: () => ({
    valid: false,
    title: "",
    description: ""
  }),
  methods: {
    add() {
      this.$refs.form.validate();
      if (this.valid) {
        const item = {
          id: Date.now(),
          title: this.title,
          createAt: new Date().toISOString(),
          description: this.description
        };
        this.$store.dispatch("addNewCard", item);
        this.$router.push({ name: "Dashboard" });
      }
    }
  }
};
</script>
