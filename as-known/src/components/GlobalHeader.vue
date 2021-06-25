<template>
  <nav class="navbar">
    <div class="navbar-title">
      <router-link class="navbar-brand" to="/">者也专栏</router-link>
    <ul class="list-inline">
      <li class="list-inline-item">
        <router-link to="/login" class="btn">登陆</router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/signup" class="btn">注册</router-link>
      </li>
    </ul>
    <!-- <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <dropdown :title="`你好 ${user.nickName}`">
          <dropdown-item>
            <router-link to="/create" class="dropdown-item">新建文章</router-link>
          </dropdown-item>
          <dropdown-item>
            <router-link :to="`/column/${user.column}`" class="dropdown-item">我的专栏</router-link>
          </dropdown-item>
          <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
          <dropdown-item><a href="#" class="dropdown-item" @click.prevent="handleLogout">退出登录</a></dropdown-item>
        </dropdown>
      </li>
    </ul> -->
    </div>
  </nav>
</template>

<style lang="less" scoped>
.navbar {
    background-color: #0d6efd!important;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between!important;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-right: 1.5rem!important;
    padding-left: 1.5rem!important;
    margin-bottom: 1.5rem!important;
    .navbar-title {
        width: 75%;
        margin-right: auto!important;
        margin-left: auto!important;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between!important;
        padding-top: .5rem;
        padding-bottom: .5rem;
        .navbar-brand {
            color: #fff;
            padding-top: .3125rem;
            padding-bottom: .3125rem;
            margin-right: 1rem;
            font-size: 1.25rem;
            text-decoration: none;
            white-space: nowrap;
        }
        ul {
                margin-top: 0;
                &.list-inline {
                margin-bottom: 0!important;
                padding-left: 0;
                list-style: none;
                .list-inline-item:not(:last-child) {
                    margin-right: .5rem;
                }
                .list-inline-item {
                    display: inline-block;
                    .btn {
                            margin-top: .5rem!important;
                            margin-bottom: .5rem!important;
                            color: #f8f9fa;
                            border: 1px solid #f8f9fa;
                            padding: .375rem .75rem;
                            border-radius: .25rem;
                            text-decoration: none;
                    }
                }
           }
        }
    }
}
</style>