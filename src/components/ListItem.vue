<template>
  <b-container>
    <b-row>
      <b-col>
        <loading
          :active.sync="isLoading"
          :is-full-page="fullPage"
          loader="bars"
          color="#17a2b8"
          blur="null"
        ></loading>
        <b-list-group>
          <b-list-group-item v-for="item in listItems" :key="item.id">
            <div class="points">
              {{ item.points ? item.points : '-' }}
            </div>
            <template v-if="item.domain">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="title"
                >{{ item.title }}</a
              >
            </template>
            <template v-else>
              <b-link :to="`/ask/${item.id}`" class="title">{{
                item.title
              }}</b-link>
            </template>
            <div class="subtitle">
              <span>by </span>
              <b-link :to="`/user/${item.user}`" v-if="item.user">{{
                item.user
              }}</b-link>
              <a
                :href="item.url"
                target="_blank"
                ref="noreferrer"
                v-else-if="item.url"
                >{{ item.domain }}</a
              >
              <span> | </span>
              <span>{{ item.time_ago }}</span>
              <span v-if="item.comments_count > 0">
                <span> | </span>
                <span>{{ item.comments_count }} comments</span>
              </span>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.ask;
      } else if (name === 'jobs') {
        return this.$store.state.jobs;
      } else {
        return null;
      }
    },
  },
  created() {
    const name = this.$route.name;

    this.isLoading = true;

    if (name === 'news') {
      setTimeout(() => {
        this.isLoading = false;
        this.$store.dispatch('FETCH_NEWS');
      }, 1000);
    } else if (name === 'ask') {
      setTimeout(() => {
        this.isLoading = false;
        this.$store.dispatch('FETCH_ASK');
      }, 1000);
    } else if (name === 'jobs') {
      setTimeout(() => {
        this.isLoading = false;
        this.$store.dispatch('FETCH_JOBS');
      }, 1000);
    }
  },
};
</script>

<style>
.points {
  display: inline-block;
  width: 50px;
  color: #17a2b8;
}
.title {
  font-size: 16px;
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
