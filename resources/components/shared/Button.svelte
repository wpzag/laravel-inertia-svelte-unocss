<script lang='ts'>
  import { clsx } from 'clsx'

  export let color: string = 'btn-blue'
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
  export let loading: boolean = false
  export let icon: string | null = null

  const sizeClasses = {
    xs: 'px-3 py-2 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-base',
    xl: 'px-6 py-3.5 text-base'
  }
  const sizeWithOnlyIconClasses = {
    xs: 'p-1  text-xs',
    sm: 'p-2  text-sm',
    md: 'p-3  text-sm',
    lg: 'p-5  text-base',
    xl: 'p-6 text-base'
  }

  $: classes = clsx(
    'rounded-lg  relative  active:scale-95 duration-300 transform transition-all ',
    icon !== null && !$$slots.default && sizeWithOnlyIconClasses[size],
    $$slots.default && sizeClasses[size],
    color,
    ($$props.disabled || loading) && 'pointer-events-none ',
    $$props.class
  )
</script>

<button {...$$restProps} class={classes} disabled={$$props.disabled || loading} on:click>
  <div>
    {#if loading}
      <div class='absolute inset-0 flex justify-center items-center'>
        <div
          class={clsx(
						'w-5 h-5 rounded-full animate-spin animate-duration-2000  border-2 border-dashed btn-spinner'
					)}></div>
      </div>
    {/if}
    <div class={clsx(icon && 'flex justify-between items-center gap-x-3', loading && 'op-0')}>
      {#if icon}
        <div class={clsx(icon)}></div>
      {/if}
      <slot />
    </div>
  </div>
</button>
