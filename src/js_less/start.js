export default {
  name: "Start",
  data() {
    return {
      userInfo: "",
      dialogA: false,
      width1: "",
      width2: "",
      dialogB: false
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
      this.width1 = `width:${(this.userInfo.life / this.userInfo.lifeValue) *
        100}px`;
      this.width2 = `width:${(this.userInfo.energy /
        this.userInfo.energyValue) *
        100}px`;
    },
    out() {
      this.$router.push("/");
    },
    goOut() {
      this.$router.push("/Village");
    },
    goBedroom() {
      this.userInfo.life = this.userInfo.lifeValue;
      this.userInfo.energy = this.userInfo.energyValue;
      this.width1 = `width:${(this.userInfo.life / this.userInfo.lifeValue) *
        100}px`;
      this.width2 = `width:${(this.userInfo.energy /
        this.userInfo.energyValue) *
        100}px`;
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
      this.$message({
        message: "精力充沛",
        type: "success",
        center: true
      });
    },
    goMeditation() {
      this.$router.push("/Meditation");
    },
    goLaboratory() {
      this.$router.push("/Laboratory");
    },
    goStore() {
      this.$router.push("/Store");
    }
  }
};
