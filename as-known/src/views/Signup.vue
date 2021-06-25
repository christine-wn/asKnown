<template>
<div class="signup-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">注册者也账户</h5>
    <validate-form>
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
      </div>
      <template v-slot:submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">注册新用户</button>
      </template>
    </validate-form>
  </div> 
</template>

<script>
import { defineComponent } from 'vue'
import ValidateForm from '../base/ValidateForm.vue'

export default defineComponent({
  name: 'Signup',
  components: {
    ValidateForm
  }
})
</script>
