<p class="text">
    <slot />
</p>

<style>
    .text{
        font-size: 15px;
        font-weight: 400;
        color: var(--text-color);
        margin-bottom: 5px;
        display: flex;
        gap: 5px;
    }
    /* Mobile Responsiveness */
    @media (max-width: 768px) {
        .text {
            font-size: 13px;
        }
    }
</style>