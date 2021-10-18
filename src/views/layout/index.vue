<template>
  <div class="wrap">
    <el-container>
      <el-header class="header-wrap">
        <Header />
      </el-header>
      <el-main class="main-wrap">
        <keep-alive>
          <router-view v-if="$route.meta.cache"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.cache"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./header.vue"
export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.wrap {
  font-size: 30px;
  .header-wrap {
    height: 80px !important;
  }
  .main-wrap {
    min-height: calc(100vh - 80px);
    width: 1140px;
    margin: 0 auto;
  }
}
</style>
