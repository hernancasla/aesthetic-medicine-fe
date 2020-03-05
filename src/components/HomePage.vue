<template>
    <div>
        <h1>Hi {{account.user.firstName}}!</h1>
        <p>You're logged in with Vue + Vuex & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        <em v-if="files.loading">Loading files...</em>
        <span v-if="files.error" class="text-danger">ERROR: {{files.error}}</span>
        <ul v-if="files.items">
            <li v-for="file in files.items" :key="file.id">
                {{file}}
                <span v-if="file.deleting"><em> - Deleting...</em></span>
                <span v-else-if="file.deleteError" class="text-danger"> - ERROR: {{file.deleteError}}</span>
                <span v-else> - <a @click="deleteFile(file.id)" class="text-danger">Delete</a></span>
            </li>
        </ul>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            files: state => state.files.all
        })
    },
    created () {
        this.getAllFiles();
    },
    methods: {
        ...mapActions('files', {
            getAllFiles: 'getAll',
            deleteFile: 'delete'
        })
    }
};
</script>