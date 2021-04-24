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
      <b-col cols="12">
        <span>user: {{ user.id }}</span>
      </b-col>
      <b-col cols="12">
        <span>created: {{ user.created }}</span>
      </b-col>
      <b-col cols="12">
        <span>karma: {{ user.karma }}</span>
      </b-col>
      <b-col cols="12" v-if="user.about">
        <span>about: </span>
        <div v-html="user.about"></div>
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

<style></style>
