import { HeaderInfo } from '@/components'

export default {
  name: "Store",
  components: {
    HeaderInfo,
  },
  data() {
    return {
      activeName: '1st',
      store: {
        material: [
          { id:100, icon:'./static/列克星敦BROKEN.png', name:'12', info:'56', type:1, amount:1 },
          { id:100, icon:'./static/列克星敦NORMAL.png', name:'12', info:'56', type:1, amount:1 },
        ],
        work: [],
        dress: [],
        book: [],
        weapon: [],
        backpack: [],
      },
    };
  },
  mounted() {},
  methods: {}
};



//{ id:0, infoId:0 icon:'', name:'', info:'', type:0, amount:0 }
//{ id:0,  }