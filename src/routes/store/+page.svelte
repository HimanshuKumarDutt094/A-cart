<script lang="ts">
	import items from '/src/items.json'
	import ProductCard from "$lib/productCard.svelte";
	import { get } from "svelte/store";
	import { cartItems } from "/src/cart";

	const products : Product[]=items as Product[];

	async function checkout() {
		await fetch("api/stripeCheckout", { // http://localhost:5173/api/stripeCheckout
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(
				{ items: get(cartItems) }
			)
		}).then((data) => {
			return data.json()
		}).then((data) => {
			window.location.replace(data.url);
		});
	}


</script>
<style>
	div {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  div::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

</style>
<div class="" ><div id="my-element" class="flex justify-center items-center">
<h1 class="rounded-lg inline-block  hover:variant-glass-secondary p-4 mb-3">A-cart : Shop Anything</h1>
</div></div>
<div class="lg:col-span-4 flex justify-end">
        <button class="btn variant-glass-tertiary " on:click={() => checkout()}>Checkout with Stripe</button>
      </div>
<div class="h-[130vh] mb-8" >
  <div id="element" class="  container mb-25 mx-auto flex justify-center items-center">
    <div class="grid overflow-auto content-evenly lg:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 xl:grid-cols-5 gap-5 ">
      {#each products as product}
        <ProductCard product={product}/>
      {/each}

    </div>
  </div>
</div>
