<template>
    <div class="d-flex justify-content-center position-fixed bottom-0 top-0 start-0" @click.self="hide">
        <div class="box bg-white w-50 p-5" style="border-radius:2rem;margin-top:100px;height:fit-content;margin-bottom:100px;">
            <div class="content h-100">
                <h5>Order Acceptance</h5>
                <div class="row justify-content-center">
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 1 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 2 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Ultimate Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                </div>
                <h5 class="mt-5">Reaching Vendor Time</h5>
                <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Standard Reach Vendor Time:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 1 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 2 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 3 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                </div>
                <h5 class="mt-5">Delivering Order</h5>
                <div class="row justify-content-center mt-3">
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Prime Zone Minutes:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Secondary Zone Minutes:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Other Zone Minutes:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 1 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 2 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 3 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                </div>
                <h5 class="mt-5">Clearing Payments</h5>
                <div class="row justify-content-center mt-3">
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 1 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Phase 2 Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                    <div class="col-md-4 col-sm-6 col-12">
                        <p class="mb-0">Ultimate Goal Limit:</p>
                        <select class="w-100 py-1 px-3">
                            <option value="" selected disabled>Select</option>
                        </select>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <button @click="hide">Update</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        hide(){
            this.$parent.showModal();
        }
    }   
}
</script>
<style lang="scss" scoped>
.position-fixed{
    // background: rgba(255, 255, 255, 0.151);
    backdrop-filter: blur(15px);
    height: 100%;
    width: 100%;
    z-index: 98;
    overflow-y: auto;
    // padding-top: 200px;
    // padding-bottom: 200px;
}
p{
    font-size: 0.8rem;
}
h5{
    font-size: 1.1rem;
    font-weight: bold;
}
select {
    border: 1px solid rgb(206, 206, 206);
    box-shadow: 0 2px 10px -2px #dddddd;
    font-size: 0.8rem;
}
button{
    background: #E11E25;
    padding: 8px 30px;
    border: none;
    color: white;
    font-size: 0.8rem;
    border-radius: 1rem;
}
@media screen and (max-width:992px) {
        .w-50{
            width: 70% !important;
        }
    }
    @media screen and (max-width:500px) {
        .w-50{
            width: 90% !important;
        }
    }
</style>