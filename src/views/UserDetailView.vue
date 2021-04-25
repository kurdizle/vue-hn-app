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
      <b-col md="4">
        <div class="user-box">
          <div class="avatar">
            <img :src="require('../assets/images/avatar.png')" alt="" />
          </div>
          <h4>{{ user.id }}</h4>
          <div>
            created <b>{{ user.created }}</b>
          </div>
          <div>
            karma <b>{{ user.karma }}</b>
          </div>
        </div>
      </b-col>
      <b-col md="8" v-if="user.about">
        <div class="user-box">
          <div>about:</div>
          <div v-html="user.about"></div>
        </div>
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
    ...mapState(['user']),
  },
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.FETCH_USER(this.$route.params.id);
      this.isLoading = false;
    }, 500);
  },
  methods: {
    ...mapActions(['FETCH_USER']),
  },
};
</script>

<style>
.user-box {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #dbdbdb;
}

.avatar {
  width: 100px;
  height: auto;
}

.avatar img {
  width: 100%;
}
</style>
