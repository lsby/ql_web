<template>
  <div>
    <h1>你好世界</h1>
    <b-button variant="outline-primary">
      <router-link to="/test">跳转到测试页</router-link>
    </b-button>
    <b-button variant="success" @click="$router.push('test')">跳转到测试页</b-button>
  </div>
</template>
