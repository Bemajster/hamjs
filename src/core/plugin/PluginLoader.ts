export class PluginLoader {
  plugins = []

  constructor(p_plugins) {
    this.plugins = p_plugins
  }

  useAdditionRules(a, b?) {
    return 0
  }

  useSubtractionRules(a, b?) {
    return 0
  }

  useMultiplicationRules(a, b?) {
    return 0
  }

  useDivisionRules(a, b?) {
    return 0
  }
}
