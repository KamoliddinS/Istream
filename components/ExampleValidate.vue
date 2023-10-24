<template>
<div class="example-view">
    <div class="example-view-container"> 
    <Form @submit="onSubmit">
        <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
                <div >
                    <icon-auth class="text-green-400 mb-3" />
                    <i class="block text-sm">SVG nomi oldidan "icon-" so'zi bo'lishi lozim!</i>
                </div>
                <h2 class="text-base font-semibold leading-7 text-gray-900 mt-3">Lofin template</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Please fill all fields!</p>
                <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-4">
                       
                        <div class="mt-2 w-full">
                            <label for="username" class="mb-1 text-sm font-medium leading-6 text-gray-900">Username*</label>
                            <Field v-model="formData.username"  name="username"   rules="required"  placeholder="Username*" class="w-full rounded-md border-x border-y border-gray-400 py-2 pl-3 pr-3 text-gray-900" /> 
                              <div class="text-red-400 text-sm  mt-0.5">
                                <ErrorMessage name="username">Enter username!</ErrorMessage>
                              </div>  
                        </div>
                        <div class="mt-4 w-full">
                            <label for="username" class="mb-1 block text-sm font-medium leading-6 text-gray-900">Password*</label>
                            <Field  name="password"  rules="required" v-model="formData.password"   v-slot="{ field, errorMessage }">
                                <input type="password" v-bind="field"  placeholder="Password*" class="w-full rounded-md border-x  border-y border-gray-400 py-2 pl-3 pr-3 text-gray-900" :class="{'!border-rose-600':errorMessage}"> 
                                <div class="text-red-400 text-sm  mt-1">{{ errorMessage }}</div>
                            </Field>   
                        </div> 
                        <div class="mt-4 w-full">
                            <label for="username" class="mb-1 block text-sm font-medium leading-6 text-gray-900">Phone*</label>
                            <Field  name="phone"  rules="required|min:9" v-model="formData.phone"   v-slot="{ field, errorMessage }">
                                <input type="text" v-maska data-maska="+998 ## ### ## ##"   v-bind="field"  placeholder="+998 -- --- -- --" class="w-full rounded-md border-x  border-y border-gray-400 py-2 pl-3 pr-3 text-gray-900" :class="{'!border-rose-600':errorMessage}"> 
                                <div class="text-red-400 text-sm  mt-1">{{ errorMessage }}</div>
                            </Field>   
                        </div> 
                    </div>
                    
                </div>
            </div>
 
        </div>
        <div class="mt-6  flex items-center justify-end gap-x-4 ">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div> 
    </Form> 
</div>

</div>
</template>

<script setup>
import {
    Form,
    Field,
    ErrorMessage 
} from 'vee-validate';

import { defineRule } from 'vee-validate';
import {  email, min } from '@vee-validate/rules'; 
defineRule('email', email); 
defineRule('min', min); 


defineRule('required', value => {
  if (!value || !value.length) {
    return "Iltimos ma'lumot kiriting!";
  }
  return true;
}); 

import { useApi } from '~/composables/useApi';
const api=useApi()
 

const formData=reactive({
    username:"",
    password:"", 
    phone:""
})


function onSubmit(){
    alert("Form Is Submited!")
    api.post('/')
}
</script>
