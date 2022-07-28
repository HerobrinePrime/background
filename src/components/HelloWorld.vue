<template>
  <div>{{ mes }}</div>
</template>

<script>
import { mapState } from "vuex";
import { test } from "@/request/apis/apis.js";
import requests from "@/request/requests";

export default {
  data() {
    return {
      mes: "",
    };
  },
  computed: {
    ...mapState("testStore", ["res", "sum"]),
  },
  mounted() {
    test().then((res) => {
      this.mes = res;
    });

    requests({
      url: "/lg/login",
      method:'post',
      data: {
        id:'8',
        password:'sms',
        status:'student'
      },
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  },
};
</script>

<style scoped>
</style>
