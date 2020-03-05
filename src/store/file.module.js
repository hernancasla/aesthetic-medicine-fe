import { fileService } from '../services';

const state = {
    all: {},
    download:{},
    upload:{}
};

const actions = {
    upload({ dispatch, commit }, { file }) {
        commit('uploadRequest', { file });

        fileService.upload(file)
            .then(
                file => {
                    commit('uploadSuccess', file);
                    dispatch('alert/success', "File uploaded successfully!", { root: true });
                },
                error => {
                    commit('uploadFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    download({ dispatch, commit }, file) {
        commit('downloadRequest', { file });

        fileService.downloadDataFile(file)
            .then(
                data => {
                    commit('downloadSuccess', file.id);
                    dispatch('alert/success', "File download successfully!", { root: true, data: data });
                },
                error => {
                    commit('downloadFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    getAll({ commit }) {
        commit('getAllRequest');

        fileService.getAll()
            .then(
                files => commit('getAllSuccess', files),
                error => commit('getAllFailure', error)
            );
    },

    delete({ commit }, id) {
        commit('deleteRequest', id);

        fileService.delete(id)
            .then(
                file => commit('deleteSuccess', file.id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, files) {
        state.all = { items: files, loading: false};
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    downloadRequest(state) {
        state.download = { downloading: true };
    },
    uploadRequest(state) {
        state.upload = { uploading: true };
    },
    downloadSuccess(state) {
        state.download = { downloading: false };
    },
    uploadSuccess(state, file) {
        state.upload = { item: file, uploading: false };
    },
    downloadFailure(state, error) {
        state.download = { error };
    },
    uploadFailure(state, error) {
        state.upload = { error };
    },
    deleteRequest(state, id) {
        state.all.items = state.all.items.map(file =>
            file.id === id
                ? { ...file, deleting: true }
                : file
        )
    },
    deleteSuccess(state, id) {
        state.all.items = state.all.items.filter(file => file.id !== id)
    },
    deleteFailure(state, { id, error }) {
        state.all.items = state.items.map(file => {
            if (file.id === id) {
                // make copy of fime without 'deleting:true' property
                const { /*deleting,*/ ...fileCopy } = file;
                // return copy of file with 'deleteError:[error]' property
                return { ...fileCopy, deleteError: error };
            }

            return file;
        })
    }
};

export const files = {
    namespaced: true,
    state,
    actions,
    mutations
};