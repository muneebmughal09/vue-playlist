<template>

<nav class="navbar">
    <ul>
        <li class="item"><a href="#" @click.prevent="onPostsClick()">Home</a></li>
        <li class="item"><a href="#" @click.prevent="onServicesClick()">Services</a></li>
        <li class="item"><a href="#" @click.prevent="onAboutClick()">About Us</a></li>
        <li class="item"><a href="#">Login</a></li>
    </ul>
</nav>

<div class="page">
    <img class="logo" src="../assets/blog-logo.jpg" />
    <h3>Sign Up</h3>
    <div class="register">
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Password" />
        <div class="btn1">
            <button>Sign Up</button>
        </div>
    </div>

</div>
<div class="fot">
        <div class="foot">
        Copyright &copy; My Portfolio | All Right Reserved
    </div>
</div>
</template>

<script>
export default {
    name: 'SignUp',
    methods:{
        onPostsClick(){
            this.$router.push('/')
        },
        onAboutClick(){
            this.$router.push('/componentb')
        },
        onServicesClick(){
            this.$router.push('/our-services')
        }
    }
}

</script>

<style>
.page{
    padding-top: 113px;
}
.logo {
    width: 200px;
    padding: 10px 10px;
    margin: -47px 561px;
    align-content: center;

}
h3{
    padding: 28px 624px;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 20px;
}
.btn1{
    padding: 30px 630px;
}
.fot{
    padding-top: 4.3%;
}

.foot{
    padding: 10px;
    text-align: center;
    color: white;
    font-size: 15px;
    background-color:black;
    letter-spacing: 1px;
}
</style>
