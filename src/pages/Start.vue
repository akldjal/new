<template>
  <div class="start">
    <div class="HomeInfo">
      <div class="head" @click="dialogA = true"></div>
      <el-dialog width="360px" :visible.sync="dialogA">
        <div class="image">
          <div class="images"></div>
          <div class="info">
            <div class="item">体力：{{ userInfo.life }}</div>
            <div class="item">法力：{{ userInfo.energy }}</div>
            <div class="item">力量：{{ userInfo.powerValue }}</div>
            <div class="item">魔力：{{ userInfo.magicValue }}</div>
            <div class="item">敏捷：{{ userInfo.agileValue }}</div>
            <div class="item">防御：{{ userInfo.defenseValue }}</div>
            <div class="item">名声：{{ userInfo.fame }}</div>
          </div>
        </div>
      </el-dialog>
      <div class="value">
        <div class="value1">
          <div class="lifeBack" :style="width1"></div>
          <div class="lifeValue">{{ `${userInfo.life}/${userInfo.lifeValue}` }}</div>
        </div>
        <div class="value2">
          <div class="energyBack" :style="width2"></div>
          <div class="energyValue">{{ `${userInfo.energy}/${userInfo.energyValue}` }}</div>
        </div>
      </div>
      <div class="out">
        <div @click="out">退出</div>
      </div>
    </div>
    <div>
      <div class="main"></div>
      <div class="userItem">
        <div class="key" @click="dialogB = true">背包</div>
        <el-dialog width="80%" :visible.sync="dialogB"></el-dialog>
        <div class="key" @click="goOut">出门</div>
        <div>
          <el-dropdown trigger="click">
            <span>
              <div class="key">
                <i class="el-icon-arrow-up"></i>
              </div>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button @click="goBedroom">睡&#12288;觉</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button @click="goMeditation">修炼室</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button @click="goLaboratory">工作间</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button @click="goStore">杂物室</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='../js_less/start.js'></script>

<style lang="less" src='../js_less/start.less'></style>
