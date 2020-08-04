<template>
    <div>
        <br>
        <h1 class="text-center">Edit element</h1>
        <div class="row">
            <div class="col-10"></div>
            <div class="col-2">
                <router-link :to=" {name: 'DisplayItem'}" class="btn btn-danger">
                    Regresar
                </router-link>
            </div>
            <div class="col-6 offset-3">
                <form v-on:submit.prevent="updateItem">
                    <div class="form-group">
                        <label>Item Name</label>
                        <input type="text" class="form-control" v-model="item.name">
                    </div>

                    <div class="form-group">
                        <label name="product_price">Item Price</label>
                        <input type="text" class="form-control" v-model="item.price">
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style media="screen">

</style>

<script>
export default {
    data(){
        return{
            item:{}
        }
    },
    created:function(){
        this.getItem();
    },
    methods:{
        getItem(){
            let uri = 'http://localhost:4000/api/items/'+this.$route.params.id;
            this.axios.get(uri).then((response) =>{
                this.item = response.data;
            })
        },
        updateItem(){
             let uri = 'http://localhost:4000/api/items/' + this.$route.params.id;
            this.axios.put(uri, this.item).then((response) => {
                this.$router.push({name: 'DisplayItem'});
            });
        }
    }
}
</script>