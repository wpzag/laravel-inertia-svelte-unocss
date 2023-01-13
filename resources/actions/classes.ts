type ConditionValue = string | boolean | number | null | undefined;

export const classes = (node: Element, props: Record<string, ConditionValue>) => {

  for (let key in props) {
    if (props[key]) {
      node.classList.add(...key.split(' ').filter(String))
    } else {
      node.classList.remove(...key.split(' ').filter(String))
    }
  }

  return {
    update: (newProps: Record<string, ConditionValue>[]) => {
      for (let key in newProps) {
        if (newProps[key]) {
          node.classList.add(...key.split(' ').filter(String))
        } else {
          node.classList.remove(...key.split(' ').filter(String))
        }
      }
    }
  }

}
