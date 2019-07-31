export default {
  name: "HelloWorld",
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
    },
    gameStart() {
      if (!this.userInfo) {
        this.userInfo = {
          userId: 0, //id
          userName: "???", //名称
          lifeValue: 61, //体力值
          life: 61, //当前体力值
          energyValue: 80, //法力值
          energy: 80, //当前法力值
          powerValue: 15, //力量
          magicValue: 15, //魔力
          agileValue: 5, //敏捷
          defenseValue: 0, //防御
          fame: 0,//名声
          status: [0,0,0,0,0] //当前状态 [0]会心[1]冰冻[2]灼烧[3]感电[4]濒死
        };
        localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        this.$router.push("/Start");
      } else {
        this.$router.push("/Start");
      }
    },
    clearData() {
      this.userInfo = '';
      localStorage.removeItem('userInfo')
    }
  }
};
