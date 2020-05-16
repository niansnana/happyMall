/**
* @author niansnana
* @Description 全局过滤器
* @Start_Writing_Date 2020-05-16 11:56:07
* @Last_Modified_Date 2020-05-16 11:56:07
*/
// 只显示年月日
const dataFilter = (time) => {
  if (!time) {
    return ''
  } else {
    return /\d{4}-\d{1,2}-\d{1,2}/g.exec(time) + ''
  }
}

export {
  dataFilter
}
