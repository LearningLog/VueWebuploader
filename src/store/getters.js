const getters = {
  visibility: state => state.fileUpload.visibility, // 是否弹出上传组件
  isMinimality: state => state.fileUpload.isMinimality, // 控制最小化
  belongs: state => state.fileUpload.belongs, // 上传的文件所属 工作台还是知识库
  deskAddFileSuccessData: state => state.fileUpload.deskAddFileSuccessData, // 工作台上传成功后返回的数据
  createFileSuccessData: state => state.fileUpload.createFileSuccessData // 上传的文件所属 工作台还是知识库
}
export default getters
