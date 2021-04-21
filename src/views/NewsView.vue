<template>
  <b-container>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="item in news" :key="item.id">
            <a
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="title"
            >
              {{ item.title }}
            </a>
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
    ...mapState(['news']),
  },
  created() {
    this.FETCH_NEWS();
  },
  methods: {
    ...mapActions(['FETCH_NEWS']),
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
