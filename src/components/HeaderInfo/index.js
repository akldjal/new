export default {
  data() {
    return {
      userInfo: "",
      width1: "",
      width2: '',
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
      this.width1 = `width:${this.userInfo.life/this.userInfo.lifeValue*140}px`;
      this.width2 = `width:${this.userInfo.energy/this.userInfo.energyValue*142}px`;
    },
    goHome() {
      this.$router.push("/Start");
    }
  }
};
