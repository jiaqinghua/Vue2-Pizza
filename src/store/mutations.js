 //更改登录状态 登录名
 export const userStatus = (state, data) => {
     if (data) {
         state.loginName = data
         state.islogin = true
     } else {
         state.loginName = data
         state.islogin = false
     }
 }

 export const setMenuItems = (state, data) => {
     state.itemMenu = data
 }

 //使用vuex同步新添加的数据
 export const pushMenuData = (state, data) => {
     state.itemMenu.push(data)
 }

 //使用vuex同步删除
 export const removeItemMenu = (state, data) => {
     state.itemMenu.forEach((item, index) => {
         if (item == data) {
             state.itemMenu.splice(index, 1)
         }
     })
 }