// @ts-ignore
import { Ziggy } from '@/js/ziggy'
import type { RouteParam, RouteParamsWithQueryOverload } from 'ziggy-js'
import ZiggyRoute from 'ziggy-js'

export const route = (name: string, params?: RouteParamsWithQueryOverload | RouteParam, absolute?: boolean) => {
  return ZiggyRoute(name, params, absolute, Ziggy)
}
