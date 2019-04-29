const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const userArray = [{
  "userId": 1,
  "loginName": "admin",
  "password": "123456",
  "nick": "admin",
  "authority": "admin",
  "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
  "phone": "13513957542",
  "address": "南京市江宁区",
  "registerTime": 1525536000000
}, {
  "userId": 2,
  "loginName": "xuexiang",
  "password": "123456",
  "nick": "薛翔",
  "authority": "admin",
  "avatar": "https://raw.githubusercontent.com/xuexiangjys/Resource/master/img/avatar/avatar_github.jpg",
  "phone": "13913845875",
  "address": "南京市江宁区",
  "registerTime": 1544457600000
}];

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const {
        username
      } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 0,
        data: token,
        msg: ''
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const {
        token
      } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          msg: 'Login failed, unable to get user details.',
          msg: ''
        }
      }

      return {
        code: 0,
        data: info,
        msg: ''
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        data: true,
        msg: ''
      }
    }
  },

  {
    url: '/user/userPageQuery',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        data: {
          total: 2,
          array: userArray,
          pageSize: 10,
          pageNum: 1
        },
        msg: ''
      }
    }
  },

  {
    url: '/user/register',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        data: true,
        msg: ''
      }
    }
  },

  {
    url: '/user/delete',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        data: true,
        msg: ''
      }
    }
  },

  {
    url: '/user/updateInfo',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        data: true,
        msg: ''
      }
    }
  },
]
