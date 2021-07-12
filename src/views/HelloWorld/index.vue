<template>
  <div class="hello-world">
    <p>helloWorld</p>
    <el-button type="primary" @click="showUpload">上传资料</el-button>
    <VueWebuploader
      :belongs="belongs"
    />
  </div>
</template>

<script>
import VueWebuploader from '@/components/VueWebuploader'
export default {
  components: {
    VueWebuploader
  },
  data() {
    return {
      belongs: {
        data_type: 1,
        ownerId: '5dafca369a301f6a9902207a',
        parentId: '5dafca369a301f6a9902207a',
        selectCompanyId: '5dafca369a301f6a9902207a' // zuhu001
      }
    }
  },
  methods: {
    // 启动上传
    showUpload() {
      this.$store.dispatch('fileUpload/isVisibility', 1)
    }
  }
}
</script>

<style scoped lang="scss">
.hello-world {
  height: 100vh;
  width: 100vw;
  background-color: #bfcbd9;
}
</style>
