<template>
  <section class="model-9">
    <div class="checkbox">
      <input type="checkbox" @click="a" checked />
      <label></label>
    </div>
  </section>
</template>

<script>
export default {
  methods:{
    a:function (){
      
    }
  }
}
</script>

<style>

.checkbox {
  position: relative;
  display: inline-block;
}
.checkbox label {
  width: 90px;
  height: 42px;
  background: #ccc;
  position: relative;
  display: inline-block;
  border-radius: 46px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.checkbox label:after {
  content: '';
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  left: 0;
  top: -5px;
  z-index: 2;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.checkbox input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
}

.checkbox input:checked + label:after {
  left: 40px;
}

.model-9 .checkbox label {
  background: #A84141;
  width: 90px;
  height: 32px;
  border-radius: 20px;
}
.model-9 .checkbox label:after {
  border-radius: 20px;
  top: 0;
  width: 50px;
  height: 32px;
}
.model-9 .checkbox input:checked + label {
  background: #256c32;
}
.model-9 .checkbox input:checked + label:after {
  background: #359a48;
  left: 40px;
}

</style>
