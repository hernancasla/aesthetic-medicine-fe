<template>
    <div>
            <HelloWorld/>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HelloWorld  from './HelloWorld'

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
    },
    components:{
        HelloWorld
    }
};
</script>