import request from "../utils/request";

/**
 * 获取所有项目
 */
export function getObject() {
  return request({
    url: `/getObject`,
    method: "get"
  });
}

/**
 * 新建项目
 * @param {object} form 新建项目配置
 */
export function setObject(form) {
  return request({
    url: `/setObject`,
    method: "post",
    data: form
  });
}

/**
 *
 * @param {string} parentName 项目名
 * @param {Array} template 项目模板信息
 */
export function saveActivity(parentName, template) {
  return request({
    url: `/saveActivity`,
    method: "post",
    data: {
      parentName,
      template
    }
  });
}

/**
 * 获取项目配置
 * @param {string} name 项目名称
 */
export function getActivity(name) {
  return request({
    url: `/getActivity/${name}`,
    method: "post"
  });
}