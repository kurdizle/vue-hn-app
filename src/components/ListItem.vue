<template>
  <b-container>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="item in listItems" :key="item.id">
            <template v-if="item.domain">
              <a
                :href="item.url"
                target="_blank"
                rel="noopener noreferrer"
                class="title"
              >
                {{ item.title }}
              </a>
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
export default {
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
    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS');
    } else if (name === 'ask') {
      this.$store.dispatch('FETCH_ASK');
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS');
    }
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
