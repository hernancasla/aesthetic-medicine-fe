<template>
  <div class="filesView">
    <div class="row">
      <div class="col-12">
        <h2>Files</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <b-table
          id="files-table"
          v-if="files.items"
          striped
          hover
          :items="files.items"
          :fields="fields"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :busy="files.loading"
          :per-page="perPage"
          :filter="filter"
          :current-page="currentPage"
          responsive="sm"
        >
          <template v-slot:table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <strong>Loading...</strong>
            </div>
          </template>
          <template v-slot:cell(createdAt)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            {{ data.value | moment('MMMM Do YYYY, h:mm:ss a')}}
          </template>

          <template v-slot:cell(name)="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <!-- <a
              :href="`#${data.value.replace(/[^a-z]+/i,'-').toLowerCase()}`"
            >{{ data.value | truncate(20) }}</a>-->
            {{ data.value | truncate(20) }}
          </template>
          <template v-slot:cell(actions)="row">
            <b-button
              size="sm"
              @click="deleteFile(row.item.id)"
              class="mr-1"
              variant="outline-danger"
            >
              <font-awesome-icon icon="trash-alt" />
            </b-button>
            <b-button
              size="sm"
              @click="downloadDataFile(row.item)"
              class="mr-1"
              variant="outline-primary"
            >
              <font-awesome-icon icon="file-download" />
            </b-button>
            <b-button
              size="sm"
              @click="info(row.item, row.index, $event.target)"
              class="mr-1"
              variant="outline-success"
            >
              <font-awesome-icon icon="edit" />
            </b-button>
          </template>
        </b-table>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <b-pagination
          v-model="currentPage"
          :total-rows="files.items?files.items.length:null"
          :per-page="perPage"
          align="center"
          aria-controls="files-table"
        ></b-pagination>
      </div>
      <div class="col-lg-0"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      sortBy: "id",
      sortDesc: false,
      perPage: 8,
      currentPage: 1,
      filter: null,
      fields: [
        { key: "id", sortable: true },
        { key: "name", sortable: true },
        { key: "createdAt", sortable: true },
        { key: "actions", sortable: false }
      ]
    };
  },
  computed: {
    ...mapState({
      files: state => state.files.all,
      download: state => state.files.download
    })
  },
  created() {
    this.getAllFiles();
  },
  methods: {
    ...mapActions("files", {
      getAllFiles: "getAll",
      deleteFile: "delete",
      downloadDataFile: "download"
    })
  }
};
</script>