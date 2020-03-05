<template>
  <div class="row justify-content-md-center">
    <div class="col-lg-6 col-md-9 col-12">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data" class="form-group">
        <h2>Uploads</h2>

        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input class="form-control" id="title" placeholder="Title" />
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon icon="upload" />
            </span>
          </div>
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              @change="onSelect"
              name="file"
              ref="file"
              id="file"
            />
            <label class="custom-file-label" for="file">{{this.fileSelected}}</label>
          </div>
        </div>

        <div class="message">
          <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
        </div>
        <div class="row">
          <div class="col-lg-9 col-md-9 col-6">
            <button @submit="onSubmit" class="btn btn-primary">Submit</button>
          </div>
          <div class="col-lg-3 col-md-3 col-6">
            <router-link
              v-if="files.item"
              :to="{path:'/files',query:{id:files.item.id}}"
              class="btn btn-link button button2"
            >{{files.item.id}}</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      file: "",
      fileSelected: "Choose file",
      submitted: false,
      message: ""
    };
  },
  computed: {
    ...mapState({
      files: state => state.files.upload,
      alert: state => state.alert
    })
  },
  created() {},
  methods: {
    ...mapActions("files", ["upload"]),
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
      this.fileSelected = file.name;
    },
    onSubmit(/*e*/) {
      this.submitted = true;
      const { file } = this;
      if (file) {
        this.upload({ file });
      }
    }
  }
};
</script>

<style>
.custom-file-label {
  overflow: hidden;
}
</style>