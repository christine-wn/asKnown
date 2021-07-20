<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules"></validate-input>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input 
          type="email" class="form-control" id="exampleInputEmail1"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
    </form>
  </div> 
  <!-- <div id="app">
    <column-list :list="list"></column-list>
  </div> -->
</template>
 
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import ValidateInput, { RulesProp } from './base/ValidateInput.vue'
import GlobalHeader, { UserProps} from './components/GlobalHeader.vue'

const currentUser: UserProps = {
  isLogin: true,
  name: 'viking'
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avator: ''
  }, {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avator: ''
  }, {
    id: 3,
    title: 'test3的专栏',
    description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧'
    // avator: ''
  }, {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test4专栏，有一段非常有意思的简介，可以更新一下欧',
    avator: ''
  }
]

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
    name: 'App',
    components: {
      ColumnList,
      GlobalHeader,
      ValidateInput
    },
    setup() { 
      const emailRules: RulesProp = [
        {type: 'required', message: '点在邮箱地址不能为空'},
        {type: 'email', message: '请输入正确的电子邮箱格式'}
      ]
      const emailRef = reactive({
         val: '',
         error: false,
         message: ''
      })
      const validateEmail = () => {
        if(emailRef.val.trim() === '') {
          emailRef.error = true
          emailRef.message = 'can not be empty'
        } else if(!emailReg.test(emailRef.val)) {
          emailRef.error = true
          emailRef.message = 'should be valid eamil'
        }
      }
      return {
        list: testData,
        currentUser,
        emailRef,
        validateEmail,
        emailRules
      }
    }
})
</script>


<style lang="less">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
