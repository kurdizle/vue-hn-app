<template>
  <b-container>
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
      <b-col cols="12">
        <span>about: </span>
        <div v-html="user.about"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
  },
  created() {
    this.FETCH_USER(this.$route.params.id);
  },
  methods: {
    ...mapActions(['FETCH_USER']),
  },
};
</script>

<style></style>
