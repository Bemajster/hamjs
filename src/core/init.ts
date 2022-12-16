export let currentPluginLoader
export let currentSettings

export function init(p_settings: JSON, p_pluginLoader) {
  currentSettings = p_settings
  currentPluginLoader = p_pluginLoader
}
