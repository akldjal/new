<template>
  <div class="store">
    <HeaderInfo></HeaderInfo>
    <div class="tabs">
      <el-tabs tab-position="left" v-model="activeName" style="height:400px">
        <el-tab-pane label="材料" name="1st">
          <div class="area">
            <div v-for="(item,index) in store.material" :key="index">
              <div class="item">
                <img :src="item.icon" :alt="item.name">
                <div class="amount">{{ item.amount }}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="成品" name="2nd">
          <div class="area">
            <div v-for="(item,index) in store.work" :key="index">
              <div class="item">
                <img :src="item.icon" :alt="item.name">
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服饰" name="3rd">
          <div class="area">
            <div v-for="(item,index) in store.dress" :key="index">
              <div class="item">
                <img :src="item.icon" :alt="item.name">
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="书籍" name="4th">
          <div class="area">
            <div v-for="(item,index) in store.book" :key="index">
              <div class="item">
                <img :src="item.icon" :alt="item.name">
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="武器" name="5th">
          <div class="area">
            <div v-for="(item,index) in store.weapon" :key="index">
              <div class="item">
                <img :src="item.icon" :alt="item.name">
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="背包" name="6th">
          <div class="area">
            <div v-for="(item,index) in store.backpack" :key="index">
              <div class="item">
                <img :src="item.icon" :alt="item.name">
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script src="../js_less/store.js"></script>

<style lang="less" src="../js_less/store.less"></style>
