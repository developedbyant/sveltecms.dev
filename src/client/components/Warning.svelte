<div class="warning">
    <p>
        <slot>
            Before adding or running svelteCMS, make sure to have initialize a svelteKit project with TypeScript
            <!-- <a href="https://mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a> connection url and
            <a href="https://cloudinary.com/" target="_blank" rel="noopener noreferrer">Cloudinary</a> account. -->
        </slot>
    </p>
</div>

<style lang="scss">
    .warning{
        padding: 10px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 300;
        border: 1px dashed var(--error-color);
        color: var(--error-color);
        background:var(--error-bg);
        margin: 10px 0;
        /* a{
            text-decoration: none;
            font-weight: 600;
            color: #383e41;
        } */
    }
    // Mobile
    @media(max-width:700px){
        .warning{
            font-size: 13px;
        }
    }
</style>