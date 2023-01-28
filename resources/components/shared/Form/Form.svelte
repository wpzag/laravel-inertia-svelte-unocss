<script lang='ts'>
  import axios from 'axios'
  import { createEventDispatcher } from 'svelte'

  export let initialValues = {}
  export let url = ''
  export let method = 'post'
  export let config = (form: any) => ({})
  export let useAxios: boolean = false
  let form = useForm(initialValues)
  setContext('form', form)
  const disptach = createEventDispatcher()
  const submitHandler = (event: Event) => {
    if (useAxios) {
      event.preventDefault()
      const data = $form.data()
      $form.processing = true
      axios[method](url, data).then(({ data }) => {
        console.log(data)
        disptach('success', data)
        $form.errors = {}
        // $form.reset()
      }).catch((error) => {
        $form.errors = error.response.data.errors
      }).finally(() => {
        $form.processing = false
      })
    } else {
      $form[method](url, {
        data: $form,
        preserveScroll: true,
        onError: (error) => {
          $form.errors = error
        },
        onSuccess: (data) => {
          disptach('success', data)
          $form.errors = {}
          // $form.reset()
        },
        ...config({ form, reset: () => $form.reset() })

      })
    }

  }


</script>


<form {...$$restProps} method='POST' on:submit|preventDefault={submitHandler}>
  <slot form={$form} loading={$form.processing} />
</form>
