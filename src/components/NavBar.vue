<script>
    export default {
        methods: {
            isLogout() {
                this.$store.dispatch('isLogout')
                this.$router.push('/login')
            }
        }
    }
</script>
<template>
    <div>
        <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <div class="ctn">
                    <img src="../assets/check.png" alt="check" class="img">
                    <span class="navbar-brand mb-0 h1">Tasks Manager App</span>
                </div>
                <div>
                    <span class="cursor text-danger" @click="isLogout">
                        <i class="fa-solid fa-right-from-bracket fa-size"></i>
                    </span>
                </div>
            </div>
        </nav>
    </div>
</template>

<style>
    .ctn{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img {
        height: 2rem;
        margin-right: 5px;
    }
    .fa-size {
        font-size :2em;
    }
</style>