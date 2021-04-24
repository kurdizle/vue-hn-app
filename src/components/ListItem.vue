<template>
  <b-container>
    <loading
      :active.sync="isLoading"
      :is-full-page="fullPage"
      loader="bars"
      color="#fff"
      background-color="#17a2b8"
      blur="null"
      :opacity="opacity"
    ></loading>
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item v-for="item in list" :key="item.id">
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
          <infinite-loading @infinite="infiniteHandler">
            <template slot="no-more">No more</template>
            <template slot="spinner">Loading...</template>
          </infinite-loading>
        </b-list-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import InfiniteLoading from 'vue-infinite-loading';
import { fetchList } from '../api';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      opacity: 1,
      page: 1,
      list: [],
    };
  },
  components: {
    Loading,
    InfiniteLoading,
  },
  created() {
    this.isLoading = true;
  },
  methods: {
    infiniteHandler($state) {
      const pageName = this.$route.name;
      const pageNumber = this.page;

      fetchList(pageName, pageNumber)
        .then((response) => {
          if (response.data.length) {
            this.page += 1;
            this.list.push(...response.data);
            $state.loaded();
          } else {
            $state.complete();
          }
          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        })
        .catch((error) => {
          $state.error(error);
        });
    },
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
