<template>
    <form class="is-flex is-flex-direction-column is-align-content-center">
        <b-field label="File">
            <b-upload v-model="file" accept=".jpg,.png,.jpeg,.xlsx,.xlsx" class="file-label" >
                <span class="file-cta">
                    <b-icon class="file-icon" icon="upload"></b-icon>
                    <span class="file-label">Click to upload</span>
                </span>
            </b-upload>
        </b-field>
        <span v-if="fileName">Uploaded: {{fileName}}</span>
        
        <b-button style="width: 85%; margin:auto; text-align:center;" type="is-primary" @click="uploadFile">Upload File</b-button>
    </form>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'
import axios from "axios";
import { ToastProgrammatic as Toast } from 'buefy'

export default defineComponent({
    computed:{ 
        fileName(){
            return this.file?.name;
        }
    },
    setup() {
        const file = ref(null);
        const uploadFile = async ()=>{
            var formData = new FormData();
            formData.append('file', file.value)
            try{
                let response = await axios.post("http://localhost:8000/upload",formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })  

                if(response.status == 200){
                    Toast.open({
                        message: `Uploaded file to ${response.data.data.path}`,
                        type: 'is-success',
                        duration: 1000
                    })
                }
            }catch(err){
                let error = {...err}
                Toast.open({
                    message: error.response.data.data.message,
                    type: 'is-danger',
                    duration: 1000
                })
            }
            
        }
        return {
            file,
            uploadFile
        }
    },
})
</script>
