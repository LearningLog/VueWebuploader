const getDefaultState = () => {
  return {
    applicationInfo: {
      uploadUrl: 'https://xxx.xxx.com/upload/'
    } // 应用信息
  }
}

const state = getDefaultState()

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

