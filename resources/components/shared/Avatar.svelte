<script lang='ts'>
  export let src: string
  export let size: number = 4

</script>

<div style='width: {size}rem;height:{size}rem' class='rounded-g overflow-hidden  rounded-full border border-blue p1 '>
  <img class='h-full w-full object-cover rounded-full' {src}>
</div>
