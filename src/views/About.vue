<template>
    <div class="tqm container">
        <Modal v-if="modalVisible"/>
        <div class="d-flex justify-content-center mt-5 position-relative">
            <button class="qlt">Quality</button>
            <button class="prf">Performance</button>
            <i @click="showModal" class="fa-solid fa-pencil rounded-circle mx-2 position-absolute end-0" style="color:white;padding: 10px;background-color:#283848;cursor:pointer"></i>
        </div>
        <div class="d-flex justify-content-between mt-3 flex-wrap">
            <h4>Company Insights</h4>
            <div class="d-flex justify-content-center">
                <i class="fa-solid fa-calendar-days rounded mx-2" style="color:white;padding: 10px;background-color:#283848"></i>
                <div class="position-relative" style="width:230px">
                    <input type="text" placeholder="Search Vendor/Ridor" class="border-0 px-3 py-2 bg-white rounded shadow w-100" style="font-size:0.8rem">
                    <button class="bg-transparent border-0 text-muted position-absolute end-0" style="top:5px"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
        <div class="boxes_cont mt-3 row justify-content-center">
            <div class="col-lg-4 col-sm-6 mt-4 px-3">
                <div class="text-center p-3 shadow bg-white" style="border-radius:1rem">
                    <i class="fa-solid fa-box-open fs-1"></i>
                    <h4>Order Acceptance</h4>
                    <p>85% <span class="ms-3 text-danger" style="font-size:0.7rem">-8%</span></p>
                    <button class="ins_btn shadow-sm" style="background-color:#FF9500">Phase 1 Goal</button>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-4 px-3">
                <div class="text-center p-3 shadow bg-white" style="border-radius:1rem">
                    <i class="fa-solid fa-box-open fs-1"></i>
                    <h4>Order Acceptance</h4>
                    <p>85% <span class="ms-3 text-danger" style="font-size:0.7rem">-8%</span></p>
                    <button class="ins_btn shadow-sm" style="background-color:#46C864">Phase 1 Goal</button>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-4 px-3">
                <div class="text-center p-3 shadow bg-white" style="border-radius:1rem">
                    <i class="fa-solid fa-box-open fs-1"></i>
                    <h4>Order Acceptance</h4>
                    <p>85% <span class="ms-3 text-danger" style="font-size:0.7rem">-8%</span></p>
                    <button class="ins_btn shadow-sm" style="background-color:#FF9500">Phase 1 Goal</button>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-4 px-3">
                <div class="text-center p-3 shadow bg-white" style="border-radius:1rem">
                    <i class="fa-solid fa-box-open fs-1"></i>
                    <h4>Order Acceptance</h4>
                    <p>85% <span class="ms-3 text-danger" style="font-size:0.7rem">-8%</span></p>
                    <button class="ins_btn shadow-sm" style="background-color:#D4242A">Phase 1 Goal</button>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mt-4 px-3">
                <div class="text-center p-3 shadow bg-white" style="border-radius:1rem">
                    <i class="fa-solid fa-box-open fs-1"></i>
                    <h4>Order Acceptance</h4>
                    <p>85% <span class="ms-3 text-danger" style="font-size:0.7rem">-8%</span></p>
                    <button class="ins_btn shadow-sm" style="background-color:#6DBCDB">Phase 1 Goal</button>
                </div>
            </div>
        </div>
    </div>
</template> 
<script>
import Modal from '@/components/modal.vue'
export default {
    components: {Modal},
    data(){
        return{
            modalVisible: false
        }
    },
    methods: {
        showModal(){
            this.modalVisible = !this.modalVisible;
        }
    }
}
</script>
<style lang="scss" scoped>
    .qlt{
        border: none;
        background: #E11E25;
        color: white;
        padding: 10px;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        width: 120px;
    }
    .prf{
        border: none;
        background: #ffffff;
        color: rgb(0, 0, 0);
        padding: 10px;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        width: 120px;
    }
    .ins_btn{
        padding: 5px 30px;
        border: none;
        border-radius: 2rem;
        color: white;
    }
    @media screen and (max-width:420px) {
        .fa-pencil{
            top: 50px;
        }
    }
</style>