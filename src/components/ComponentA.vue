<template>
<nav class="navbar">
    <ul>
        <li class="item"><a href="#">Home</a></li>
        <li class="item"><a href="#" @click.prevent="onServicesClick()">Services</a></li>
        <li class="item"><a href="#" @click.prevent="onAboutClick()">About Us</a></li>
        <li class="item"><a href="#" @click.prevent="onPostsClick()">Login</a></li>
    </ul>
</nav>
<section id="home">
    <h1 class="h-primary">Welcome to <span> Home</span></h1>
    <p class="p1">"Here's a hearty welcome, big and warm enough to encompass you all! To say we are thrilled to see you is an understatement." "It's my pleasure to extend a cheerful welcome to you all! Your presence makes us very happy."</p>
    <button class="btn" v-on:click="fun()">Click Now</button>
</section>
<footer>
    <div class="foot">
        Copyright &copy; My Portfolio | All Right Reserved
    </div>
</footer>
</template>
<script>
 export default {
    name : 'ComponentA',
    methods:{
        onPostsClick(){
            this.$router.push('/sign-up')
        },
        onAboutClick(){
            this.$router.push('/componentb')
        },
        onServicesClick(){
            this.$router.push('/our-services')
        },
        fun(){
            alert("Hello Guyz")
        }
    }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
.navbar{
    display: flex;
    align-items: center;
    position: relative;
}

.navbar ul{
    display: flex;
}

.navbar::before{
    content: "";
    background-color: black;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 1.9;
}

.navbar ul li{
    list-style: none;
    font-size: 1.3rem;
}
.navbar ul li a{
    color: white;
    display: block;
    padding: 18px 31px;
    text-decoration: none;
}
.navbar ul li a:hover{
    color: rgb(255, 60, 0);
    text-decoration: underline;
}
/*Home Section*/ 
#home{
    display: flex;
    flex-direction: column;
    padding: 40px 200px;
    justify-content: center;
    align-items: center;
    height: 400px;
}
#home::before{
    content: "";
    position: absolute;
    background: url('../assets/blue.jpg') no-repeat center center/cover;
    height: 125.5%;
    width: 100%;
    z-index: -1;
    opacity: 0.89;
}
/* Services Classes*/

/*Utility Classes */
.h-primary{
    font-size: 2.8rem;
    padding: 20px 95px
}
#home h1{
    color:white;
    text-align: center;
}
.p1{
    color:white;
    text-align: center;
    font-size: 1.5rem;
    padding: 30px;
}
.btn{
    padding: 6px 20px;
    border: 2px solid white;
    background-color:transparent;
    margin: 17px;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
}

span{
    color: aqua;
}
footer{
    padding-top: 14.9%;
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