<template>
  <b-container>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="item in ask" :key="item.id">
            <b-link :to="`/ask/${item.id}`" class="title">{{
              item.title
            }}</b-link>
            <div class="subtitle">
              <span>by </span>
              <b-link :to="`/user/${item.user}`">{{ item.user }}</b-link>
              <span> | </span>
              <span>{{ item.time_ago }}</span>
              <span> | </span>
              <span>{{ item.comments_count }} comments</span>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['ask']),
  },
  created() {
    this.FETCH_ASK();
  },
  methods: {
    ...mapActions(['FETCH_ASK']),
  },
};
</script>

<style>
.title {
  font-size: 18px;
}

.subtitle {
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
  color: #aaa;
}

.subtitle a {
  color: #aaa;
  font-style: italic;
}
</style>
