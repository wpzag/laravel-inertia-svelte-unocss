<script lang='ts'>
  import ApplicationLogo from '@/components/layout/ApplicationLogo.svelte'
  import { route } from '@/helpers/ziggy'
  import DarkThemeSwitcher from '@/components/layout/DarkThemeSwitcher.svelte'
  import { inertia, page } from '@inertiajs/svelte'
  import Avatar from '@/components/shared/Avatar.svelte'
  import NavLink from '@/components/layout/NavLink.svelte'
  import Toast from '@/components/shared/Toast/Toast.svelte'
  import SideMenu from '@/components/layout/SideMenu.svelte'

  let activeRoute = $page.url
  let navLinks = [
    {
      'name': 'Dashboard',
      'href': route('dashboard'),
      icon: 'i-carbon-home'
    },
    {
      name: 'Users',
      href: route('users.index'),
      icon: 'i-carbon-user'
    }
  ]
  router.on('navigate', (event) => {
    activeRoute = event.detail.page.url.split('?')[0]
  })
</script>
<Toast />
<div class='min-h-screen pt-10'>
  <div class='container mx-auto'>
    <header class='bg-white dark:bg-slate-8 rounded-lg p-8  w-full rounded mx-auto flex items-center justify-between'>
      <div class='md:hidden'>
        <SideMenu {activeRoute} items={navLinks} />
      </div>
      <ul class='flex gap-x-4 items-center lt-md:hidden'>
        <ApplicationLogo class='w-14 h-14  mr-7  dark:fill-slate-4' />
        {
          #each navLinks as { active, href, name }}
          <li>
            <NavLink {href} active={href.includes(activeRoute)}>{name}</NavLink>
          </li>
        {/each}
      </ul>
      <div class='flex items-center gap-x-7'>
        <DarkThemeSwitcher />
        <button class='p2 bg-red-300/10 text-red-500/60 rounded'
                use:inertia={{ href: 'logout', method: 'post' }}
        >
          <div class='i-ic-round-logout'></div>
        </button>
        <a href={route('users.index')} use:inertia>
          <Avatar src='https://i.pravatar.cc/300' />
        </a>
      </div>

    </header>

    {#key $page.component}
      <main class='bg-white rounded dark:bg-slate-8 dark:text-slate-3 rounded mt-5 p-6 rounded '
            in:fly|local={{ y: 30, duration: 250, delay: 300 }}
            out:fly|local={{ y: 30,duration: 250 }}
      >
        <slot />
      </main>
    {/key}
  </div>

</div>
