<template>
<nav class="navbar">
    <ul>
        <li class="item"><a href="#" @click.prevent="onHomeClick()">Home</a></li>
        <li class="item"><a href="#" @click.prevent="onServicesClick()">Services</a></li>
        <li class="item"><a href="#">About Us</a></li>
        <li class="item"><a href="#" @click.prevent="onPostsClick()">Login</a></li>
    </ul>
</nav>
<section class="about">
    <div class="main">
        <img src="../assets/muneeb.jpeg" alt="">
        <div class="about-text">
            <h1>About Us</h1>
            <h5>Developer<span> & Designer</span></h5>
            <p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.</p>
            <button class="btn2">let's Talk</button>
        </div>
    </div>
</section>
<div class="fote">
        <div class="foot">
        Copyright &copy; My Portfolio | All Right Reserved
    </div>
</div>
</template>

<script>
export default {
    name: 'ComponentB',
    methods:{
        onPostsClick(){
            this.$router.push('/sign-up')
        },
        onHomeClick(){
            this.$router.push('/')
        },
        onServicesClick(){
            this.$router.push('/our-services')
        }
    }
    
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: 'Josefin Sans', sans-serif;
    box-sizing: border-box;
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
    color: rgb(255, 102, 0);
    text-decoration: underline;
}

.about {
    width: 100%;
    padding: 78.5px 0px;
    background-color: rgb(255, 255, 255);
}

.about img {
    height: auto;
    width: 420px;
}

.about-text {
    width: 550px;
}

.main{
    width: 1130px;
    max-width: 95%;
    margin:13px auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.about-text h1{
    color: rgb(0, 0, 0);
    font-size:80px;
    text-transform: capitalize;
    margin-bottom: 20px;
}
.about-text h5{
    color: rgb(0, 0, 0);
    font-size:25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
}
span{
    color: #f9004d;
}
.about-text p{
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
}
.btn2{
    background: #f9004d;
    color: aliceblue;
    text-decoration: none;
    border: 2px solid transparent;
    font-weight: bold;
    padding: 13px 30px;
    border-radius: 30px;
    transition: .4s;
}
.btn2:hover{
    background: transparent;
    border: 2px solid #f9004d;
    cursor: pointer0;
}
.fote{
    padding-top: 0%;
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
