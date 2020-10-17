export default {
  extends: ['@commitlint/config-conventional', '@commitlint/parse'],
  rules: {
    'header-max-length': [2, 'always', 70],
    'subject-case': [2, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      [
        'access',
        'analytics',
        'android',
        'animation',
        'arch',
        'assets',
        'beer',
        'breaking',
        'ci',
        'compat',
        'config',
        'contrib-add',
        'db',
        'dep-add',
        'dep-rm',
        'dep-up',
        'deploy',
        'docker',
        'docs',
        'docs-code',
        'downgrade',
        'egg',
        'experiment',
        'feature',
        'fix',
        'fix-ci',
        'flags',
        'gitignore',
        'hotfix',
        'i18n',
        'init',
        'ios',
        'k8s',
        'license',
        'lint',
        'linux',
        'log-add',
        'log-rm',
        'merge',
        'mock',
        'mv',
        'osx',
        'perf',
        'poo',
        'prune',
        'pushpin',
        'refactoring',
        'release',
        'responsive',
        'revert',
        'review',
        'security',
        'seed',
        'seo',
        'snapshot',
        'style',
        'test',
        'texts',
        'todo',
        'types',
        'typo',
        'ui',
        'update',
        'ux',
        'windows',
        'wip',
      ],
    ],
  },
  parserPreset: './index.js',
  parserOpts: {
    // eslint-disable-next-line prefer-named-capture-group
    headerPattern: /^(.*?)(?:\((.*?)\))?!?:\s(?:(.)\s)?(.*)$/u,
    headerCorrespondence: ['type', 'scope', 'emoji', 'subject'],
    // eslint-disable-next-line prefer-named-capture-group
    revertPattern: /^(revert):\s(?:(.)\s)?(\w{7})\s-\s(.*?)$/u,
    revertCorrespondence: ['type', 'emoji', 'hash', 'subject'],
  },
};
