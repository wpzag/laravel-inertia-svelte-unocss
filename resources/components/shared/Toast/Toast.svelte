<script>
  import { toast } from './toast'
  import ToastItem from './ToastItem.svelte'

  export let options = {}
</script>

<ul class='fixed top-5 right-5 z-50'>
  {#each $toast as item (item.id)}
    <li
      out:fade={{ duration: 200 }}
      in:fly={{ y: 100, duration: 200 }}
      animate:flip={{duration:200 }}
      class='mb-2'
      on:click={() => toast.remove(item.id)}
    >
      <ToastItem {item} />
    </li>
  {/each}
</ul>

