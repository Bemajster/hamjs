import { currentPluginLoader } from "./../init"

function additionRules(a, b?) {
  return 0
}

export function add(a, b?) {
  return additionRules(a, b) || currentPluginLoader.useAdditionRules(a, b)
}
