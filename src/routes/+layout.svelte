<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	  import { onMount } from 'svelte';

  let activeLink = null;

  onMount(() => {
    setActiveLink(window.location.pathname);
  });

  function setActiveLink(path) {
    activeLink = path;
  }

  function handleClick(event) {
    setActiveLink(event.target.pathname);
  }


</script>

<header class=" text-gray-700   flex body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
    <nav class="flex text-xl flex-wrap items-center  justify-center">
      <a class="mr-5  hover:text-gray-900" href="/" class:selected={activeLink === '/'} on:click={handleClick} style:border-bottom-color={activeLink === '/' ? 'blue' : 'transparent'}>Home</a>
      <a class="mr-5 hover:text-gray-900" href="/store" class:selected={activeLink === '/store'} on:click={handleClick} style:border-bottom-color={activeLink === '/store' ? 'blue' : 'transparent'}>Store</a>
      <a class="mr-5 hover:text-gray-900" href="/team" class:selected={activeLink === '/team'} on:click={handleClick} style:border-bottom-color={activeLink === '/team' ? 'blue' : 'transparent'}>Team</a>
    </nav>
  </div>
  </header>
<style>
  .selected {
    border-bottom-width: 2px;
  }
</style>
<slot />
