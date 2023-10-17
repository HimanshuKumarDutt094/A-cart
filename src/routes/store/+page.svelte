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
<div class="" ><div id="my-element" class="flex justify-center items-center">
<h1 class="rounded-lg text-blue-300 inline-block  hover:variant-glass-secondary p-4 mb-3">A-cart : Shop Anything</h1>
</div></div>
<div class="lg:col-span-4 flex justify-end">
        <button class="btn variant-glass-tertiary " on:click={() => checkout()}>Checkout with Stripe</button>
      </div>
<div class="h-[100vh]" >
  <div id="element" class="container mx-auto flex justify-center items-center">
    <div class="grid content-evenly lg:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 xl:grid-cols-5 gap-5 ">
      {#each products as product}
        <ProductCard product={product}/>
      {/each}

    </div>
  </div>
</div>
