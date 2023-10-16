// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare class Product {
	id: string; // Stripe ID
	title: string; // "Coffee"
	price: number; // 5
	image: string; // "coffee.jpg"
	category: string; // "drinks"
}

declare class CartItem {
	id: string;
	quantity: number;
}
