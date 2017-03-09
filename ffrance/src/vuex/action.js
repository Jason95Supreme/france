export default{
  setDisplay({commit},value){
    commit('CHANGE_DISPLAY',value)
  },
  setAnimate({commit},value){
    commit('CHANGE_ANIMATE',value)
  },
  setIcon({commit},value){
    commit('CHANGE_ICON',value)
  },
};
