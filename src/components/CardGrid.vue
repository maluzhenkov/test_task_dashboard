<template>
  <v-container>
    <draggable
      v-if="value && value.length > 0"
      :list="value"
      :disabled="!isDraggable"
      v-bind="dragOptions"
      @start="dragging = true"
      @end="dragging = false"
    >
      <transition-group
        tag="div"
        class="row"
        type="transition"
        :name="!dragging ? 'flip-list' : null"
      >
        <v-col
          v-for="item in value"
          :key="item.id"
          :class="{'draggable': isDraggable}"
          cols="12"
          sm="6"
          md="3"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="d-flex flex-column fill-height"
              max-height="300"
              :elevation="hover ? '4': '2'"
            >
              <v-card-title class="d-flex flex-nowrap justify-space-between">
                <span>{{item.title}}</span>
                <v-btn v-if="!isDraggable" icon small @click="openModal(item)">
                  <v-icon small>mdi-open-in-new</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider />
              <v-card-text class="card__description flex-grow-1 pb-0 mb-4">{{item.description}}</v-card-text>
              <v-card-actions>
                <v-spacer />
                <span class="text--disabled">{{item.createAt | date('datetime')}}</span>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </transition-group>
    </draggable>

    <v-row v-else>
      <v-col>
        <v-alert class="text-center" type="info" text>Нет данных</v-alert>
      </v-col>
    </v-row>

    <v-dialog v-model="modal" width="500">
      <v-card>
        <v-card-title v-text="modalItem.title" />
        <v-divider />
        <v-card-text v-text="modalItem.description" />

        <v-card-actions>
          <v-spacer />
          <span class="text--disabled">{{modalItem.createAt | date('datetime')}}</span>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "CardGrid",
  components: {
    draggable
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    isDraggable: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    dragging: false,
    modal: false,
    modalItem: {}
  }),
  computed: {
    dragOptions() {
      return {
        animation: 300,
        ghostClass: "dragging"
      };
    }
  },
  methods: {
    openModal(item) {
      this.modalItem = item;
      this.modal = true;
    }
  }
};
</script>

<style>
.card__description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.opacity {
  opacity: 0;
}
[draggable="true"] {
  user-select: none;
}
.draggable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}
.draggable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}
.dragging {
  opacity: 0.5;
}
</style>