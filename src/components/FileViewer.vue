<template>
    <b-table :data="files" detailed detail-key="file_id">
        <b-table-column v-slot="props" label="Images" field="path">
            {{props.row.name}}
        </b-table-column>
        <template #detail="props">
            <img :src="`http://localhost:8000/${props.row.path}`" />
        </template>
    </b-table>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api"
import axios from "axios";

export default defineComponent({
    setup(){
        const files = ref([]);
        const child = ref(null)
        const fetchFiles = async ()=>{
            let response = await axios.get("http://localhost:8000/files?filter[is_image]=1");

            if(response.status == 200){
                files.value = response.data.data;
            }
        }


        return {
            files,
            fetchFiles,
            child
        }
    },
    mounted(){
        this.fetchFiles();
    },
    watch: {
        child(newVal, oldVal){
            if(oldVal) this.$refs.imageContainer.removeChild(oldVal);
            if(newVal) this.$refs.imageContainer.appendChild(newVal)

        }
    }
})
</script>