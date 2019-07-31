<template>
  <div class="meditation">
    <div class="RoomInfo">
      <div class="imgs"></div>
      <div class="info">
        <div class="main">
          <div class="item">体力：{{ userInfo.life }}/{{ userInfo.lifeValue }}</div>
          <div class="item">法力：{{ userInfo.energy }}/{{ userInfo.energyValue }}</div>
        </div>
        <div class="value">
          <div class="item">力量：{{ userInfo.powerValue }}</div>
          <div class="item">魔力：{{ userInfo.magicValue }}</div>
          <div class="item">敏捷：{{ userInfo.agileValue }}</div>
          <div class="item">防御：{{ userInfo.defenseValue }}</div>
          <div class="item">名声：{{ userInfo.fame }}</div>
        </div>
      </div>
    </div>
    <div class="todo">
      <div class="magic">
        <div class="item" @click="meditation">冥想</div>
        <div class="item" @click="natureMeditation">自然冥想</div>
        <div class="item" @click="spellPractice">法术练习</div>
        <div class="item" @click="scarecrow">击桩</div>
        <div class="item" @click="stone">击石</div>
        <div class="item" @click="dodge">走桩</div>
        <div class="item" @click="swimming">游泳</div>
      </div>
      <div class="img"></div>
    </div>
    <div class="end" @click="out">结束修炼</div>
  </div>
</template>

<script src="../js_less/meditation.js"></script>

<style lang="less" src="../js_less/meditation.less"></style>
