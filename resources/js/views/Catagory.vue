<template>
  <div class="container-fluid">
    <h1 class="mt-4">Catagory</h1>
    <ol class="breadcrumb mb-4">
      <li class="breadcrumb-item active">Catagory</li>
    </ol>
    <div class="row">
      <div class="col-xl-12">
        <div class="card mb-4">
          <div class="card-header d-flex">
            <span>
              <i class="fas fa-chart-area mr-1"></i>Data Table
            </span>
            <button class="btn btn-primary btn-sm ml-auto" v-on:click="showNewCatagoryModal">
              <span class="fa fa-plus"></span>Tambah
            </button>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <td>NO</td>
                  <td>Nama Catagory</td>
                  <td>Keterangan</td>
                  <td>Image</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(catagory, index) in catagories" :key="index">
                  <td>{{index+1}}</td>
                  <td>{{catagory.nama_catagory}}</td>
                  <td>{{catagory.keterangan}}</td>
                  <td>
                    <img  :src="`${$store.state.serverPath}/storage/${catagory.image}`" 
                     class="table-image" width="70px"/>

                  </td>
                  <td>
                    <button class="btn btn-primary btn-sm" v-on:click="editCatagory(catagory)">
                      <span class="fa fa-edit"></span>
                    </button>
                    <button class="btn btn-danger btn-sm" v-on:click="deleteCatagory(catagory)">
                      <span class="fa fa-trash"></span>
                    </button>
                  </td>
                </tr>

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <b-modal ref="newCatagoryModal" hide-footer title="Tambah Catagory">
      <div class="d-block">
        <form v-on:submit.prevent="createCatagory">
          <div class="form-group">
            <label for="nama_catagory">Nama Catagory</label>
            <input
              type="text"
              class="form-control"
              id="nama_catagory"
              aria-describedby="emailHelp"
              v-model="catagoryData.nama_catagory"
            />
            <div class="invalid-feedback" v-if="errors.nama_catagory">{{errors.nama_catagory[0]}}</div>
          </div>

          <div class="form-group">
            <label for="image">Pilih Gambar</label>
            <div v-if="catagoryData.image.name">
              <img src ref="newCatagoryImageDisplay" class="w-150px" />
            </div>
            <input
              type="file"
              class="form-control"
              id="image"
              aria-describedby="emailHelp"
              v-on:change="attachImage"
              ref="newCatagoryImage"
            />
            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
          </div>

          <div class="form-group">
            <label for="keterangan">Keterangan</label>
            <textarea
              class="form-control"
              id="keterangan"
              rows="3"
              v-model="catagoryData.keterangan"
            ></textarea>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideNewCatagoryModal">Cencel</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span>Save
            </button>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal ref="editCatagoryModal" hide-footer title="Tambah Catagory">
      <div class="d-block">
        <form v-on:submit.prevent="updateCatagory">
          <div class="form-group">
            <label for="nama_catagory">Nama Catagory</label>
            <input
              type="text"
              class="form-control"
              id="nama_catagory"
              aria-describedby="emailHelp"
              v-model="editCatagoryData.nama_catagory"
            />
            <div class="invalid-feedback" v-if="errors.nama_catagory">{{errors.nama_catagory[0]}}</div>
          </div>

          <div class="form-group">
            <label for="image">Pilih Gambar</label>
            <div v-if="editCatagoryData.image">
              <img :src="`${$store.state.serverPath}/storage/${editCatagoryData.image}`" ref="editCatagoryImageDisplay" class="w-150px" />
            </div>
            <input
              type="file"
              class="form-control"
              id="image"
              aria-describedby="emailHelp"
              v-on:change="editAttachImage"
              ref="editCatagoryImage"
            />
            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
          </div>

          <div class="form-group">
            <label for="keterangan">Keterangan</label>
            <textarea
              class="form-control"
              id="keterangan"
              rows="3"
              v-model="editCatagoryData.keterangan"
            ></textarea>
          </div>

          <hr />
          <div class="text-right">
            <button type="button" class="btn btn-default" v-on:click="hideEditCatagoryModal">Cencel</button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span>update
            </button>
          </div>
        </form>
      </div>
    </b-modal>

  </div>
</template>

<script>
import * as catagoryService from "../services/CatagoryService";
export default {
  name: "catagory",
  data() {
    return {
      catagories:[],
      catagoryData: {
        nama_catagory: "",
        image: "",
        keterangan: ""
      },
      editCatagoryData:{},
      errors: {}
    };
  },
  mounted(){
    this.loadCatagory();

  },
  methods: {
    loadCatagory: async function () {
      try {
        const response = await catagoryService.loadCatagory();
        
        this.catagories = response.data.data;
      } catch (error) {
         this.flashMessage.error({
              title: "Errors ",
              message: "Catagory, not found!",
              time: 5000
            });
      }
    },
    attachImage() {
      // to use file reader
      this.catagoryData.image = this.$refs.newCatagoryImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.newCatagoryImageDisplay.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.catagoryData.image);
    },
    hideNewCatagoryModal() {
      this.$refs.newCatagoryModal.hide();
    },
    showNewCatagoryModal() {
      this.$refs.newCatagoryModal.show();
    },
    createCatagory: async function() {
      let formData = new FormData();

      formData.append("nama_catagory", this.catagoryData.nama_catagory);
      formData.append("keterangan", this.catagoryData.keterangan);
      formData.append("image", this.catagoryData.image);

      try {
        const response = await catagoryService.createCatagory(formData);
        this.catagories.unshift(response.data);
        this.hideNewCatagoryModal();
        this.flashMessage.success({
          title: "Success ",
          message: "Catagory, has been save to database!",
          time: 5000
        });

        this.catagoryData ={
        nama_catagory: "",
        image: "",
        keterangan: ""
        };

      } catch (error) {
        console.log(error.response.status);
        switch (error.response.status) {
          case 442:
            this.errors = error.response.data.errors;
            break;

          default:
            this.flashMessage.error({
              title: "Errors ",
              message: "Catagory, Failed to database!",
              time: 5000
            });
            break;
        }
      }
      
    },
    deleteCatagory: async function(catagory) {
      if(!window.confirm(`Are you sure want to delete ${catagory.nama_catagory}`)){
        return;
      }
      try{
          await catagoryService.deleteCatagory(catagory.id);

          this.catagories = this.catagories.filter(obj => {
          return obj.id != catagory.id;
           });

          this.flashMessage.success({
          title: "Success ",
          message: "Catagory, has been deleted!",
          time: 5000
        });
       
      }catch(error){
         this.flashMessage.error({
              title: "Errors ",
              message: "Catagory, Failed to database!",
              time: 5000
            });
      }
    },
    hideEditCatagoryModal(){
      this.$refs.editCatagoryModal.hide();
    },
    showEditCatagoryModal(){
      this.$refs.editCatagoryModal.show();
    },
    editAttachImage() {
      // to use file reader
      this.editCatagoryData.image = this.$refs.editCatagoryImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function() {
          this.$refs.editCatagoryImageDisplay.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.editCatagoryData.image);
    },
    editCatagory(catagory){
      this.editCatagoryData = {...catagory};
      this.showEditCatagoryModal();
    },
    updateCatagory: async function(){
      try {
        const formData = new FormData();
        formData.append('nama_catagory',this.editCatagoryData.nama_catagory);
        formData.append('image',this.editCatagoryData.image);
        formData.append('keterangan',this.editCatagoryData.keterangan);
        formData.append('_method','put');

        const response = await catagoryService.updateCatagory(this.editCatagoryData.id, formData);
        this.catagories.map(catagory =>{
          if(catagory.id == response.data.id){
            for(let key in response.data.id){
              catagory = response.data;
            }
          }
        });
        this.hideEditCatagoryModal();
        this.flashMessage.success({
            message:'Catagory updated successfully',
            time: 5000
        });
      } catch (error) {
         this.flashMessage.error({
              title: "Errors ",
              message: error.response.data.message,
              time: 5000
            });
      }
    }
   
  }
};
</script>