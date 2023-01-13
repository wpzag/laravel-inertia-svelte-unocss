<script lang='ts'>
  export let initialValues = {}
  export let url = ''
  export let method = 'post'
  let form = useForm({ values: initialValues })
  setContext('form', form)

  const submitHandler = (event: Event) => {
    $form.transform(data => $form.values)[method](url, {
      preserveScroll: true,
      onError: (error) => {
        $form.errors = error
      }
    })
  }


</script>


<form {...$$restProps} method='POST' on:submit|preventDefault={submitHandler}>
  <slot form={$form} />
</form>
