<template>
    <div>
        <h2>New Post</h2>
        <form @submit="onSubmit">
            <label>Email : </label>
            <input type="email" v-bind="email" />
            <div>{{ errors.email }}</div>
            <label>Title : </label>
            <input type="text" v-bind="title" />
            <div>{{ errors.title }}</div>
            <br />
            <button>Save</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { useForm } from 'vee-validate';
import * as yup from 'yup'

const store = useStore()
const router = useRouter()

const { errors, handleSubmit, defineInputBinds } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
        title: yup.string().required(),
    }),
});

const onSubmit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2));
    store.dispatch('modulePost/addPost', values).then(() => {
        router.push('/posts');
    });
});

const email = defineInputBinds('email');
const title = defineInputBinds('title');

</script>

<style scoped>
input {
    margin: 1rem 0;
}
</style>