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
        <h3>{{ item.title }}</h3>
        <div class="detail-info">
          <span>{{ item.points }} points</span>
          <span>by</span>
          <span>
            <b-link :to="`/user/${item.user}`" class="detail-user">
              {{ item.user }}
            </b-link>
          </span>
          <span>{{ item.time_ago }} | </span>
          <span>{{ item.comments_count }} comments</span>
        </div>
        <article v-html="item.content" class="detail-content"></article>
      </b-col>
    </b-row>
    <b-row class="comments-row">
      <b-col cols="12">
        <h5>Comments</h5>
      </b-col>
      <b-col cols="12" v-if="item.comments_count > 0">
        <ul>
          <li
            v-for="comment_l0 in item.comments"
            :key="comment_l0.id"
            class="comment-item"
          >
            <div class="comment-info">
              <span
                ><b-link
                  :to="`/user/${comment_l0.user}`"
                  class="comment-user"
                  >{{ comment_l0.user }}</b-link
                ></span
              >
              <span>{{ comment_l0.time_ago }}</span>
            </div>
            <div v-html="comment_l0.content"></div>
          </li>
        </ul>
      </b-col>
      <b-col v-else>
        <p>No Comments.</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      opacity: 1,
    };
  },
  components: {
    Loading,
  },
  computed: {
    ...mapState({ item: 'askItem' }),
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.FETCH_ASK_ITEM(this.$route.params.id);
      this.isLoading = false;
    }, 500);
  },
  methods: {
    ...mapActions(['FETCH_ASK_ITEM']),
  },
};
</script>

<style>
.detail-info span {
  display: inline-block;
  padding-right: 5px;
  font-size: 12px;
}

.detail-user {
  color: #828282;
  font-style: italic;
}

.detail-user:hover {
  color: #828282;
}

.detail-content {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #dbdbdb;
}

.detail-content p {
  margin: 0;
}

.comments-row {
  margin-top: 20px;
}

.comments-row ul {
  padding-left: 10px;
  list-style: none;
}

.comment-item {
  margin-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px;
}

.comment-item p {
  margin: 0;
}

.comment-info {
  color: #828282;
  font-size: 14px;
}

.comment-info span {
  padding-right: 5px;
}

.comment-user {
  color: #828282;
  font-style: italic;
}

a.comment-user:hover {
  color: #828282;
}
</style>
