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
  dependencyDashboard: true,
  autodiscoverFilter: [ 'Ontracon/*' ],
  packageRules: [
    {
      description: 'Patch and Minor Updates',
      automerge: true,
      automergeType: 'pr',
      platformAutomerge: false,
      prCreation: 'immediate',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'minor',
        'lockFileMaintenance',
      ],
      dependencyDashboardApproval: false,
      rebaseStalePrs: true,
      rebaseWhen: 'behind-base-branch',
      stabilityDays: 0,
    },
    {
      description: 'lockFileMaintenance',
      automerge: false,
      prCreation: 'immediate',
      matchUpdateTypes: [
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