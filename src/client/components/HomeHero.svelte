<script lang="ts">
    import engineSrc from "client/assets/engine.png"
</script>

<div class="home">
    <div class="left">
        <h2>svelte<span>CMS</span></h2>
        <h3>All in one CMS for your svelteKit apps.</h3>
        <p>Add a cms to your svelte projects without having to leave your work folder.</p>
        <div class="buttons">
            <a href="/docs" class="button">Get started</a>
        </div>
    </div>
    <div class="image">
        <img src={engineSrc} alt="svelte engine">
    </div>
</div>

<style lang="scss">
    .home{
        display: flex;
        align-items: center;
        padding: 30px 0px;
    }
    .left{
        flex: 2.5;
        margin-right: 20px;
        h2,h3,p{ text-shadow: 1px 1px 3px rgba(0,0,0,.1);}
        h2{
            font-size: 60px;
            font-weight: 800;
            text-transform: uppercase;
            color: var(--header-color);
            span{ color: var(--main-color);}
        }
        h3{
            font-size: 30px;
            font-weight: 400;
            text-transform: capitalize;
            color: var(--text-color);
            margin-bottom: 10px;
        }
        p{
            font-size: 15px;
            font-weight: 200;
            text-transform: capitalize;
            color: var(--text-color);
        }
    }
    .buttons{
        display: flex;
        align-items: center;
    }
    .button{
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 600;
        color: var(--button-color);
        background-color: var(--button-bg);
        margin-top: 20px;
        margin-right: 10px;
        box-shadow: 1px 1px 4px rgba(0,0,0,.1);
    }
    .image{
        flex: 1;
        img{
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
    // Mobile
    @media(max-width:700px){
        .left{
            text-align: center;
            margin-right: 0px;
            h2{
                font-size: 50px;
            }
            h3{
                font-size: 20px;
            }
            p{
                font-size: 14px;
            }
        }
        .buttons{
            justify-content: center;
        }
        .home{
            flex-direction: column;
        }
        .image{
            margin-top: 30px;
            padding: 20px;
        }
    }
</style>