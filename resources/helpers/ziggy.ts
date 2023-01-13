// @ts-ignore
import { Ziggy } from '@/generated/ziggy-routes'
import type { RouteParam, RouteParamsWithQueryOverload } from 'ziggy-js'
import ZiggyRoute from 'ziggy-js'

export const route = (name?: string, params?: RouteParamsWithQueryOverload | RouteParam, absolute?: boolean) => {
  // @ts-ignore
  return ZiggyRoute(name, params, absolute, Ziggy)
}
