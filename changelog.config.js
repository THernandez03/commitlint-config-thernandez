/* eslint-disable import/no-commonjs, import/unambiguous */
module.exports = {
  maxMessageLength: 50,
  minMessageLength: 5,
  list: [
    'style',
    'perf',
    'prune',
    'fix',
    'hotfix',
    'feature',
    'docs',
    'deploy',
    'ui',
    'init',
    'test',
    'security',
    'osx',
    'linux',
    'windows',
    'android',
    'ios',
    'release',
    'lint',
    'wip',
    'fix-ci',
    'downgrade',
    'upgrade',
    'pushpin',
    'ci',
    'analytics',
    'refactoring',
    'docker',
    'dep-add',
    'dep-rm',
    'config',
    'i18n',
    'typo',
    'poo',
    'revert',
    'merge',
    'dep-up',
    'compat',
    'mv',
    'license',
    'breaking',
    'assets',
    'review',
    'access',
    'docs-code',
    'beer',
    'texts',
    'db',
    'log-add',
    'log-rm',
    'contrib-add',
    'ux',
    'arch',
    'responsive',
    'mock',
    'egg',
    'gitignore',
    'snapshot',
    'experiment',
    'seo',
    'k8s',
    'types',
    'seed',
    'flags',
    'animation',
  ],
  types: {
    style: {
      emoji: '🎨',
      value: 'style',
      description: 'Improving structure / format of the code.',
    },
    perf: {
      emoji: '⚡️',
      value: 'perf',
      description: 'Improving performance.',
    },
    prune: {
      emoji: '🔥',
      value: 'prune',
      description: 'Removing code or files.',
    },
    fix: {
      emoji: '🐛',
      value: 'fix',
      description: 'Fixing a bug.',
    },
    hotfix: {
      emoji: '🚑',
      value: 'hotfix',
      description: 'Critical hotfix.',
    },
    feature: {
      emoji: '✨',
      value: 'feature',
      description: 'Introducing new features.',
    },
    docs: {
      emoji: '📝',
      value: 'docs',
      description: 'Writing docs.',
    },
    deploy: {
      emoji: '🚀',
      value: 'deploy',
      description: 'Deploying stuff.',
    },
    ui: {
      emoji: '💄',
      value: 'ui',
      description: 'Updating the UI and style files.',
    },
    init: {
      emoji: '🎉',
      value: 'init',
      description: 'Initial commit.',
    },
    test: {
      emoji: '✅',
      value: 'test',
      description: 'Adding tests.',
    },
    security: {
      emoji: '🔒',
      value: 'security',
      description: 'Fixing security issues.',
    },
    osx: {
      emoji: '🍎',
      value: 'osx',
      description: 'Fixing something on macOS.',
    },
    linux: {
      emoji: '🐧',
      value: 'linux',
      description: 'Fixing something on Linux.',
    },
    windows: {
      emoji: '🏁',
      value: 'windows',
      description: 'Fixing something on Windows.',
    },
    android: {
      emoji: '🤖',
      value: 'android',
      description: 'Fixing something on Android.',
    },
    ios: {
      emoji: '🍏',
      value: 'ios',
      description: 'Fixing something on iOS.',
    },
    release: {
      emoji: '🔖',
      value: 'release',
      description: 'Releasing / Version tags.',
    },
    lint: {
      emoji: '🚨',
      value: 'lint',
      description: 'Removing linter warnings.',
    },
    wip: {
      emoji: '🚧',
      value: 'wip',
      description: 'Work in progress.',
    },
    'fix-ci': {
      emoji: '💚',
      value: 'fix-ci',
      description: 'Fixing CI Build.',
    },
    downgrade: {
      emoji: '⬇️',
      value: 'downgrade',
      description: ' Downgrading dependencies.',
    },
    upgrade: {
      emoji: '⬆️',
      value: 'upgrade',
      description: ' Upgrading dependencies.',
    },
    pushpin: {
      emoji: '📌',
      value: 'pushpin',
      description: 'Pinning dependencies to specific versions.',
    },
    ci: {
      emoji: '👷',
      value: 'ci',
      description: 'Adding CI build system.',
    },
    analytics: {
      emoji: '📈',
      value: 'analytics',
      description: 'Adding analytics or tracking code.',
    },
    refactoring: {
      emoji: '♻️',
      value: 'refactoring',
      description: ' Refactoring code.',
    },
    docker: {
      emoji: '🐳',
      value: 'docker',
      description: 'Work about Docker.',
    },
    'dep-add': {
      emoji: '➕',
      value: 'dep-add',
      description: 'Adding a dependency.',
    },
    'dep-rm': {
      emoji: '➖',
      value: 'dep-rm',
      description: 'Removing a dependency.',
    },
    config: {
      emoji: '🔧',
      value: 'config',
      description: 'Changing configuration files.',
    },
    i18n: {
      emoji: '🌐',
      value: 'i18n',
      description: 'Internationalization and localization.',
    },
    typo: {
      emoji: '✏️',
      value: 'typo',
      description: ' Fixing typos.',
    },
    poo: {
      emoji: '💩',
      value: 'poo',
      description: 'Writing bad code that needs to be improved.',
    },
    revert: {
      emoji: '⏪',
      value: 'revert',
      description: 'Reverting changes.',
    },
    merge: {
      emoji: '🔀',
      value: 'merge',
      description: 'Merging branches.',
    },
    'dep-up': {
      emoji: '📦',
      value: 'dep-up',
      description: 'Updating compiled files or packages.',
    },
    compat: {
      emoji: '👽',
      value: 'compat',
      description: 'Updating code due to external API changes.',
    },
    mv: {
      emoji: '🚚',
      value: 'mv',
      description: 'Moving or renaming files.',
    },
    license: {
      emoji: '📄',
      value: 'license',
      description: 'Adding or updating license.',
    },
    breaking: {
      emoji: '💥',
      value: 'breaking',
      description: 'Introducing breaking changes.',
    },
    assets: {
      emoji: '🍱',
      value: 'assets',
      description: 'Adding or updating assets.',
    },
    review: {
      emoji: '👌',
      value: 'review',
      description: 'Updating code due to code review changes.',
    },
    access: {
      emoji: '♿️',
      value: 'access',
      description: 'Improving accessibility.',
    },
    'docs-code': {
      emoji: '💡',
      value: 'docs-code',
      description: 'Documenting source code.',
    },
    beer: {
      emoji: '🍻',
      value: 'beer',
      description: 'Writing code drunkenly.',
    },
    texts: {
      emoji: '💬',
      value: 'texts',
      description: 'Updating text and literals.',
    },
    db: {
      emoji: '🗃',
      value: 'db',
      description: ' Performing database related changes.',
    },
    'log-add': {
      emoji: '🔊',
      value: 'log-add',
      description: 'Adding logs.',
    },
    'log-rm': {
      emoji: '🔇',
      value: 'log-rm',
      description: 'Removing logs.',
    },
    'contrib-add': {
      emoji: '👥',
      value: 'contrib-add',
      description: 'Adding contributor(s).',
    },
    ux: {
      emoji: '🚸',
      value: 'ux',
      description: 'Improving user experience / usability.',
    },
    arch: {
      emoji: '🏗',
      value: 'arch',
      description: ' Making architectural changes.',
    },
    responsive: {
      emoji: '📱',
      value: 'responsive',
      description: 'Working on responsive design.',
    },
    mock: {
      emoji: '🤡',
      value: 'mock',
      description: 'Mocking things.',
    },
    egg: {
      emoji: '🥚',
      value: 'egg',
      description: 'Adding an easter egg.',
    },
    gitignore: {
      emoji: '🙈',
      value: 'gitignore',
      description: 'Adding or updating a .gitignore file',
    },
    snapshot: {
      emoji: '📸',
      value: 'snapshot',
      description: 'Adding or updating snapshots',
    },
    experiment: {
      emoji: '⚗',
      value: 'experiment',
      description: ' Experimenting new things',
    },
    seo: {
      emoji: '🔍',
      value: 'seo',
      description: 'Improving SEO',
    },
    k8s: {
      emoji: '☸️',
      value: 'k8s',
      description: ' Work about Kubernetes',
    },
    types: {
      emoji: '🏷️',
      value: 'types',
      description: ' Adding or updating types (Flow, TypeScript)',
    },
    seed: {
      emoji: '🌱',
      value: 'seed',
      description: 'Adding or updating seed files',
    },
    flags: {
      emoji: '🚩',
      value: 'flags',
      description: 'Adding, updating, or removing feature flags',
    },
    animation: {
      emoji: '💫',
      value: 'animation',
      description: 'Adding or updating animations and transitions',
    },
  },
};
