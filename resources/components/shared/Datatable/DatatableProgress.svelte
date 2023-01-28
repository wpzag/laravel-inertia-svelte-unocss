<script>
  import { onMount } from 'svelte'

  onMount(() => {
    const progressBar = document.querySelector('.progress-bar')

    let progress = 100
    let interval = setInterval(() => {
      progress = (progress - 10)
      if (progress < 0) progress = 100
      progressBar.style.width = `${progress}%`
    }, 1000)
  })
</script>

<div class='progress-container'>
  <div class='progress-bar'></div>
</div>

<style>
    .progress-container {
        width: 100%;
        height: 8px;
        background-color: #f5f5f5;
        border-radius: 4px;
        overflow: hidden;
    }

    .progress-bar {
        width: 100%;
        height: 100%;
        background-color: #4caf50;
        animation: progress 2s linear infinite;
    }
</style>
