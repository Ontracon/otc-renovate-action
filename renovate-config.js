module.exports = {
  branchPrefix: 'auto/',
  dryRun: false,
  gitAuthor: 'Renovate Bot <github-actions@github.com>',
  username: 'x-access-token',
  onboarding: true,
  platform: 'github',
  baseBranches: ['main'],
  includeForks: false,
  rebaseWhen: 'behind-base-branch',
  rebaseStalePrs: true,
  recreateClosed: true,
  autodiscoverFilter: [ 'Ontracon/*' ],
  packageRules: [
    {
      description: 'lockFileMaintenance',
      automerge: false,
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'major',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      rebaseStalePrs: true,
      rebaseWhen: 'behind-base-branch',
      stabilityDays: 0,
    }
  ],
  "hostRules": [
  {
    "matchHost": "https://github.com/",
    "username": "x-access-token",
    "password": "steps.get_token.outputs.token"
  },
],
};