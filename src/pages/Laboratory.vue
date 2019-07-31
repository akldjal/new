<template>
  <div class="laboratory">
    <HeaderInfo></HeaderInfo>
    <div class="tab2">
      <el-tabs>
        <el-tab-pane label="法术模型构建" name>
          <div class="area2">
            <div class="top">
              <div class="top1">
                <img :src="src" alt />
                <div class="count">
                  <div class="minus">-</div>
                  <div class="value">{{ number }}</div>
                  <div class="add">+</div>
                </div>
              </div>
              <div class="top2">
                <div class="title">{{ title }}</div>
                <div class="info">{{ info }}</div>
              </div>
            </div>
            <div class="middle">
              <div class="item">{{  }}</div>
            </div>
            <div class="bottom" @click="build">构建</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="武器制作加工" name>
          <div class="area2"></div>
        </el-tab-pane>
        <el-tab-pane label="炼金食物烹饪" name>
          <div class="area2"></div>
        </el-tab-pane>
        <el-tab-pane label="魔法物品处理" name>
          <div class="area2"></div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script src="../js_less/laboratory.js"></script>

<style lang="less" src="../js_less/laboratory.less"></style>

