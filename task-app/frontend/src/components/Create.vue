<template>
    <div>
        <br><br><br><br><br><br>
        <h1 class="text-center">Create An Item</h1>
        <form v-on:submit.prevent="addItem">
            <div class="row">
                <div class="col-6 offset-3">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Item Name:</label>
                                <input type="text" class="form-control" v-model="item.name" autofocus>
                            </div>
                        </div>
                        <br>    
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                        <div class="form-group">
                            <label>Item Price:</label>
                            <input type="text" class="form-control" v-model="item.price">
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Add Item</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style media="screen">

</style>

<script>
import toastr from 'toastr';
export default {
    data(){
        return{
            item:{}
        }
    },
    methods:{
        addItem(){
            let uri = 'http://localhost:4000/api/items/';
            this.axios.post(uri, this.item).then((response) =>{
                toastr.success(response.data.item, 'Response');
                this.$router.replace({name: 'DisplayItem'});
            });
        }
    }
}
</script>