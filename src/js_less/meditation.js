export default {
  name: "Meditation",
  data() {
    return {
      userInfo: ""
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!this.userInfo) {
        setTimeout(this.$message("获取用户数据失败,返回初始界面"), 50);
        this.$router.push("/");
      }
    },
    meditation() {
      this.$confirm("是否消耗1/5的体力进行冥想？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (this.userInfo.life > Math.floor(this.userInfo.lifeValue / 5)) {
            this.userInfo.life =
              this.userInfo.life - Math.floor(this.userInfo.lifeValue / 5);
            this.userInfo.energyValue = this.userInfo.energyValue + 3;
            this.userInfo.magicValue = this.userInfo.magicValue + 1;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            this.$message({
              message: "最大法力值+3,魔力+1",
              type: "success",
              center: true
            });
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    natureMeditation() {
      this.$confirm("是否消耗2/5的体力进行自然冥想？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (
            this.userInfo.life > Math.floor((this.userInfo.lifeValue * 2) / 5)
          ) {
            this.userInfo.life =
              this.userInfo.life -
              Math.floor((this.userInfo.lifeValue * 2) / 5);
            this.userInfo.energyValue = Math.ceil(
              this.userInfo.energyValue * (1 + 1 / 20)
            );
            this.userInfo.magicValue = this.userInfo.magicValue + 1;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            this.$message({
              message: `最大法力值+${this.userInfo.energyValue -
                this.userInfo.energy},魔力+1`,
              type: "success",
              center: true
            });
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    spellPractice() {
      this.$confirm("是否消耗1/5的体力进行法术练习？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (this.userInfo.life > Math.floor(this.userInfo.lifeValue / 5)) {
            this.userInfo.life =
              this.userInfo.life - Math.floor(this.userInfo.lifeValue / 5);
            this.userInfo.energyValue = Math.ceil(
              this.userInfo.energyValue * (1 + 1 / 33)
            );
            this.userInfo.magicValue = this.userInfo.magicValue + 2;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            this.$message({
              message: `最大法力值+${this.userInfo.energyValue -
                this.userInfo.energy},魔力+2`,
              type: "success",
              center: true
            });
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    scarecrow() {
      this.$confirm("是否消耗1/5的体力进行击桩？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (this.userInfo.life > Math.floor(this.userInfo.lifeValue / 5)) {
            this.userInfo.life =
              this.userInfo.life - Math.floor(this.userInfo.lifeValue / 5);
            this.userInfo.powerValue = this.userInfo.powerValue + 2;
            this.userInfo.agileValue = this.userInfo.agileValue + 1;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            this.$message({
              message: "力量+2,敏捷+1",
              type: "success",
              center: true
            });
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    stone() {
      this.$confirm("是否消耗2/5的体力进行击石？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (
            this.userInfo.life > Math.floor((this.userInfo.lifeValue * 2) / 5)
          ) {
            this.userInfo.life =
              this.userInfo.life -
              Math.floor((this.userInfo.lifeValue * 2) / 5);
            this.userInfo.powerValue = this.userInfo.powerValue + 3;
            this.userInfo.defenseValue = this.userInfo.defenseValue + 1;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            this.$message({
              message: "力量+3,防御+1",
              type: "success",
              center: true
            });
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    dodge() {
      this.$confirm("是否消耗2/5的体力进行走桩？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (
            this.userInfo.life > Math.floor((this.userInfo.lifeValue * 2) / 5)
          ) {
            this.userInfo.life =
              this.userInfo.life -
              Math.floor((this.userInfo.lifeValue * 2) / 5);
            this.userInfo.agileValue = this.userInfo.agileValue + 3;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
            this.$message({
              message: "敏捷+3",
              type: "success",
              center: true
            });
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    swimming() {
      this.$confirm("是否消耗2/5的体力进行游泳？", "提示", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "info",
        center: true
      })
        .then(() => {
          if (
            this.userInfo.life > Math.floor((this.userInfo.lifeValue * 2) / 5)
          ) {
            this.userInfo.life =
              this.userInfo.life -
              Math.floor((this.userInfo.lifeValue * 2) / 5);
            this.$message({
              message: `最大体力值+${Math.ceil(
                this.userInfo.lifeValue * (1 + 1 / 33)
              ) - this.userInfo.lifeValue}`,
              type: "success",
              center: true
            });
            this.userInfo.lifeValue = Math.ceil(
              this.userInfo.lifeValue * (1 + 1 / 33)
            );
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
          } else {
            this.$message("体力不够啦");
          }
        })
        .catch(() => {});
    },
    out() {
      this.$router.push("/Start");
    }
  }
};
