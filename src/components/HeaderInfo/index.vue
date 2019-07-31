<template>
  <div class="HeaderInfo">
    <div class="imgs"></div>
    <div class="life">
      <div class="lifeBack" :style="width1"></div>
      <div class="lifeValue">{{ `${userInfo.life}/${userInfo.lifeValue}` }}</div>
    </div>
    <div class="energy">
      <div class="energyBack" :style="width2"></div>
      <div class="energyValue">{{ `${userInfo.energy}/${userInfo.energyValue}` }}</div>
    </div>
    <div class="back">
      <el-button @click="goHome">回家</el-button>
    </div>
  </div>
</template>

<script src='./index.js'></script>

<style lang="less" src='./index.less'></style>

