<script lang="ts">
	import items from '../items.json'
	import ProductCard from "$lib/productCard.svelte";
	import { get } from "svelte/store";
	import { cartItems } from "../cart";

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

<div class="relative h-full mx-auto  overflow-y-scroll">
	<div class="container  mx-auto flex justify-center items-center  overflow-y-scroll">
		<div class="grid lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-4">
			<div class="lg:col-span-3 sm:col-span-2 xl:col-span-5">
				<h1>A-cart : Shop Anything</h1>
			</div>
			{#each products as product}
				<ProductCard product={product}/>
			{/each}
			<div class="col-span-3">
				<button class="btn variant-filled-primary" on:click={() => checkout()}>Checkout with Stripe API</button>
			</div>
		</div>
	</div>
</div>
