<script>
    import "../app.css";
</script>
<style lang="postcss">
    :global(html) {
        background-color: black;
        color:white;
        font-family: 'jejugothic-regular', sans-serif;
    }
</style>
<link href="https://www.dafontfree.net/embed/amVqdWdvdGhpYy1yZWd1bGFyJmRhdGEvNDYvai82MDgyOC9KZWp1R290aGljLVJlZ3VsYXIudHRm" rel="stylesheet" type="text/css"/>
<header>
    <div class="flex flex-row text-center justify-center mt-6">
        <p class="basis-1/6">Главная</p>
        <p class="basis-1/6">Обо мне</p>
        <p class="basis-1/6">Мои работы</p>
        <p class="basis-1/6">Об этом сайте</p>
    </div>
</header>
<div class="container mx-auto">
    <slot />
</div>
<footer class="h-[400px] bg-[#0F0F0F]	">
    <img src="cat.gif" alt="meow" class="mx-auto w-[267px] h-[246px]">
    <h2 class="text-[48px] text-center">Это конец страницы</h2>
    <div class="flex flex-row text-center justify-center">
        <p class="basis-1/6 mt-6">Главная</p>
        <p class="basis-1/6 mt-6">Обо мне</p>
        <p class="basis-1/6 mt-6">Мои работы</p>
        <p class="basis-1/6 mt-6">Об этом сайте</p>
    </div>
</footer>