<template>
<div class="w-full">
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                Flowbite
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account 
                    </h1>
                    <Form class="space-y-4 md:space-y-6" @submit="onSubmit" :validation-schema="schema">
                        <div>
                            <Field name="email" v-slot="{ field, errorMessage }" v-model="form.email">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email*</label>
                                <input v-bind="field" type="email" :class="{'!border-red-300':errorMessage}" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com">
                                <p v-if="errorMessage" class=" text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                            </Field>
                        </div>
                        <div>
                            <Field name="password" v-slot="{ field, errorMessage }" v-model="form.password" ref="password">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password*</label>
                                <input ref="password"  v-bind="field" type="password" placeholder="••••••••" :class="{'!border-red-300':errorMessage}" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <p v-if="errorMessage" class=" text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                            </Field>
                        </div>
                        <div>
                            <Field name="confirm_password" v-slot="{ field, errorMessage }" v-model="form.confirm_password">
                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password*</label>
                                <input v-bind="field" type="password" placeholder="••••••••" :class="{'!border-red-300':errorMessage}" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <p v-if="errorMessage" class=" text-sm text-red-600 dark:text-red-500">{{ errorMessage }}</p>
                            </Field>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" class="w-full text-white  bg-blue-700  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset passwod</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </Form>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import {
    Form,
    Field,
    ErrorMessage
} from 'vee-validate';
import * as yup from 'yup'; 
export default {
    components: {
        Form,
        Field,
        ErrorMessage
    },
    computed: {
        schema() {
            return yup.object({
                email: yup.string().email().required().label('Enter the email!'),
                password: yup.string().required().min('8').label('Enter the password 2!'),
                confirm_password:yup.string().label('Password Confirm').required().oneOf([yup.ref('password')], 'Passwords does not match'),
            });
        }
    },
    data() {
        return {
            form: {
                email: "",
                password: "",
                confirm_password:""
            }
        }
    },
    methods: {
        onSubmit() {
            alert("Form Is Submited!")
        }
    }
}
</script>
