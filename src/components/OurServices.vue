<template>
<nav class="navbar">
    <ul>
        <li class="item"><a href="#" @click.prevent="onHomeClick()">Home</a></li>
        <li class="item"><a href="#">Services</a></li>
        <li class="item"><a href="#" @click.prevent="onAboutClick()">About Us</a></li>
        <li class="item"><a href="#" @click.prevent="onPostsClick()">Login</a></li>
    </ul>
</nav>
<div class="happy">
    <h1>OUR SERVICES</h1>
    <div class="wrapper">
        <div class="box-one">
            <img src="../assets/l-1.png" alt="">
            <h2 class="heading1">Web Development</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore suscipit exercitationem!</p>
        </div>

        <div class="box-two">
            <img src="../assets/l-3.png" alt="">
            <h2 class="heading1">Photo Editing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore suscipit exercitationem!</p>
        </div>

        <div class="box-three">
            <img src="../assets/l-2.png" alt="">
            <h2 class="heading1">Video Editing</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit dolore suscipit exercitationem!</p>
        </div>
    </div>
</div>
<div class="fote">
        <div class="foot">
        Copyright &copy; My Portfolio | All Right Reserved
    </div>
</div>
</template>

<script>
export default {
    name: 'OurServices',
    methods:{
        onPostsClick(){
            this.$router.push('/sign-up')
        },
        onHomeClick(){
            this.$router.push('/')
        },
        onAboutClick(){
            this.$router.push('/componentb')
        }
    }
}
</script>

<style>
.happy {
    height: 87vh;
    background-color: rgb(255, 255, 255);
    padding: 0 10px;
}
.happy h1{
    font-size: 40px;
    text-align: center;
    text-transform: capitalize;
    padding: 50px 20px;
}

.box-one{
    border: 2px solid black;
    width: 30%;
    padding: 10px 10px ;
    margin: 20px;
}
.box-one:hover{
    transform: scale(1.03);
}
.box-two{
    border: 2px solid black;
        width: 30%;
    padding: 10px 10px ;
        margin: 20px;
}
.box-two:hover{
    transform: scale(1.03);
}
.box-three{
    border: 2px solid black;
        width: 30%;
    padding: 10px 10px ;
        margin: 20px;
}
.box-three:hover{
    transform: scale(1.03);
}
.wrapper{
    display: flex;
    text-align: center;
    margin:-12px 34px;
}

.heading1{
    font-size: 2.3rem;
    padding: 12px;
}
</style>
