export default {
  extends: ['@commitlint/config-conventional', '@commitlint/parse'],
  formatter: '@commitlint/format',
  rules: {
    'header-max-length': [2, 'always', 50],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      [
        'style',
        'perf',
        'prune',
        'fix',
        'quickfix',
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
    ],
  },
  parserPreset: {
    parserOpts: {
      // eslint-disable-next-line prefer-named-capture-group
      headerPattern: /^(\w*)(?:\((\w*)\))?!?: (. )?(.*)$/u,
      headerCorrespondence: ['type', 'scope', 'emoji', 'subject'],
    },
  },
};
