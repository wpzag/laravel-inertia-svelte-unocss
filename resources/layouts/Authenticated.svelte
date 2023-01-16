<script lang='ts'>
  import ApplicationLogo from '@/components/shared/ApplicationLogo.svelte'
  import { route } from '@/helpers/ziggy'
  import DarkThemeSwitcher from '@/components/shared/DarkThemeSwitcher.svelte'
  import { inertia, page } from '@inertiajs/svelte'
  import Avatar from '@/components/Avatar.svelte'
  import NavLink from '@/components/shared/NavLink.svelte'


  let activeRoute = $page.url
  let navLinks = [
    {
      'name': 'Dashboard',
      'href': route('dashboard')
    },
    {
      name: 'Profile',
      href: route('profile')
    }
  ]
  router.on('navigate', (event) => {
    activeRoute = event.detail.page.url
  })
</script>

<div class='min-h-screen pt-10'>
  <div class='container mx-auto'>
    <header class='bg-white dark:bg-slate-8 rounded-lg p-8  w-full rounded mx-auto flex items-center justify-between'>
      <ul class='flex gap-x-4 items-center'>
        <ApplicationLogo class='w-14 h-14 mr-7  dark:fill-slate-4' />
        {
          #each navLinks as { active, href, name }}
          <li>
            <NavLink {href} active={href.endsWith(activeRoute)}>{name}</NavLink>
          </li>
        {/each}
      </ul>
      <div class='flex items-center gap-x-7'>
        <DarkThemeSwitcher />

        <button class='p2 bg-red-300/10 text-red-500/60 rounded'
                use:inertia={{ href: 'logout', method: 'post' }}
        >
          <div class='i-ic-round-logout  '></div>
        </button>

        <a href={route('profile')} use:inertia>
          <Avatar src='https://i.pravatar.cc/300' />
        </a>


      </div>

    </header>

    {#key $page.component}
      <main class='bg-white dark:bg-slate-8 dark:text-slate-3 rounded mt-5 p-6 rounded '
            in:fly|local={{ y: 30, duration: 250, delay: 300 }}
            out:fly|local={{ y: 30,duration: 250 }}
      >
        <slot />
      </main>
    {/key}
  </div>

</div>
