<script lang="ts">
    import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../cart";
    export let product : Product = {id: "",title:"", category:"",price: 0,image:""};
    let cart = get(cartItems); // [ { id: "1", quantity: 6 }, { id: "2", quantity: 3 } ]
    // id: "1"
    let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    });
</script>


<div class="card ">
    <header class="card-header h-20 pb-4" ><p>{product.title}</p></header>
    {#if cartProduct !== undefined}
   <p class="mt-6 ml-3"> Quantity: <strong>{cartProduct.quantity}</strong></p>
    <div class="card-body px-4">
        </div>
        {/if}
        <div class="top-4 pt-2 ">
        <img src={product.image} alt="hey" class="w-103 h-62 aspect-[100/110]" >       </div>
    <div class="card-body px-4">
        Price: ₹{product.price}
    </div>
    <footer class="card-footer">
        <button class="p-2 rounded variant-glass-primary " on:click={() => addToCart(product.id)}>Add</button>
        <button class="p-2 rounded variant-glass-error"   on:click={() => removeFromCart(product.id)}>Remove</button>
    </footer>
</div>
