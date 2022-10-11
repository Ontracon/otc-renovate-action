module.exports = {
  branchPrefix: 'auto/',
  dryRun: false,
  gitAuthor: 'Renovate Bot <github-actions@github.com>',
  username: 'x-access-token',
  onboarding: true,
  platform: 'github',
  baseBranches: ['main'],
  includeForks: false,
  recreateClosed: true,
  dependencyDashboard: false,
  dependencyDashboardAutoclose: false,
  autodiscover: true,
  autodiscoverFilter: [ 'Ontracon/*' ],
  packageRules: [
    {
      description: 'Patch Updates',
      automerge: true,
      automergeType: 'pr',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      rebaseStalePrs: true,
      rebaseWhen: 'behind-base-branch',
      stabilityDays: 0,
    },
    {
      description: 'Minor & major updates',
      automerge: true,
      automergeType: 'pr',
      platformAutomerge: true,
      prCreation: 'immediate',
      matchUpdateTypes: [
        'minor',
        'major',
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