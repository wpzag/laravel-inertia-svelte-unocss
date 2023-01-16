<script lang='ts'>
  export let size =30
  export let color = 'white'
</script>
<div class='loader' style='font-size: {size}px;   --loader-color: {color};' >Loading...</div>


<style>
    :root {
        --loader-color: #000;
    }
    .loader {
        text-indent: -9999em;
        overflow: hidden;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        margin: 0.9em auto;
        position: relative;
        -webkit-animation: load6 1.7s infinite ease;
        animation: load6 1.7s infinite ease;
    }

    @-webkit-keyframes load6 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.11em -0.83em 0 -0.42em var(--loader-color), -0.11em -0.83em 0 -0.44em var(--loader-color), -0.11em -0.83em 0 -0.46em var(--loader-color), -0.11em -0.83em 0 -0.477em var(--loader-color);
        }
        5%,
        95% {
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.11em -0.83em 0 -0.42em var(--loader-color), -0.11em -0.83em 0 -0.44em var(--loader-color), -0.11em -0.83em 0 -0.46em var(--loader-color), -0.11em -0.83em 0 -0.477em var(--loader-color);
        }
        30% {
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.51em -0.66em 0 -0.42em var(--loader-color), -0.75em -0.36em 0 -0.44em var(--loader-color), -0.83em -0.03em 0 -0.46em var(--loader-color), -0.81em 0.21em 0 -0.477em var(--loader-color);
        }
        55% {
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.29em -0.78em 0 -0.42em var(--loader-color), -0.43em -0.72em 0 -0.44em var(--loader-color), -0.52em -0.65em 0 -0.46em var(--loader-color), -0.57em -0.61em 0 -0.477em var(--loader-color);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.11em -0.83em 0 -0.42em var(--loader-color), -0.11em -0.83em 0 -0.44em var(--loader-color), -0.11em -0.83em 0 -0.46em var(--loader-color), -0.11em -0.83em 0 -0.477em var(--loader-color);
        }
    }

    @keyframes load6 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.11em -0.83em 0 -0.42em var(--loader-color), -0.11em -0.83em 0 -0.44em var(--loader-color), -0.11em -0.83em 0 -0.46em var(--loader-color), -0.11em -0.83em 0 -0.477em var(--loader-color);
        }
        5%,
        95% {
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.11em -0.83em 0 -0.42em var(--loader-color), -0.11em -0.83em 0 -0.44em var(--loader-color), -0.11em -0.83em 0 -0.46em var(--loader-color), -0.11em -0.83em 0 -0.477em var(--loader-color);
        }
        30% {
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.51em -0.66em 0 -0.42em var(--loader-color), -0.75em -0.36em 0 -0.44em var(--loader-color), -0.83em -0.03em 0 -0.46em var(--loader-color), -0.81em 0.21em 0 -0.477em var(--loader-color);
        }
        55% {
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.29em -0.78em 0 -0.42em var(--loader-color), -0.43em -0.72em 0 -0.44em var(--loader-color), -0.52em -0.65em 0 -0.46em var(--loader-color), -0.57em -0.61em 0 -0.477em var(--loader-color);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
            box-shadow: -0.11em -0.83em 0 -0.4em var(--loader-color), -0.11em -0.83em 0 -0.42em var(--loader-color), -0.11em -0.83em 0 -0.44em var(--loader-color), -0.11em -0.83em 0 -0.46em var(--loader-color), -0.11em -0.83em 0 -0.477em var(--loader-color);
        }
    }

</style>
