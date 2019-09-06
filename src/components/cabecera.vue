<template>
    <header>
        <div class=" header-fondo">
            <h1 class="d-flex justify-content-center align-items-center"> {{titulo}}</h1>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            titulo: "Red Hot Weather"
        }
    }
}
</script>
<style>
   
    header{
        width: 100%;
        padding: 10px;
        background-color: #FF0000;
        color: #FFF;
        text-align: center;
        position:fixed;
        z-index: 1;
    }
    header h1{
        margin:0;
        font-size: 1.5rem;
        text-shadow: 5px 2px 8px rgba(0,0,0,0.5);
    }
    @media (min-width: 768px){ 
        header{ 
            position: static;
            padding: 0;
            }
        header h1{
            height:100vh;
            font-size: 5rem;
            background-image: linear-gradient(to top, #000, transparent);
            text-shadow: 5px 2px 8px #FF0000;
        }
        .header-fondo{
            height:100vh;
            background-blend-mode: multiply;
            background-image: url('../assets/sky1.jpg'), linear-gradient(to top, #FF0000, #FFF);
            background-repeat: no-repeat;
            background-size: cover;  
            background-attachment: fixed;
            background-color: #dc3575;
        }
    }
</style>
