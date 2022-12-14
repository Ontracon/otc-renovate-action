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
  autodiscover: true,
  autodiscoverFilter: [ 'Ontracon/*' ],
  reuseExistingBranch: true,
  updateLockFiles: true,
  transitiveRemediation: true,

  packageRules: [
    {
      description: 'Patch Updates',
      automerge: true,
      automergeType: 'branch',
      matchUpdateTypes: [
        'pin',
        'digest',
        'patch',
        'lockFileMaintenance',
      ],
      dependencyDashboard: true,
      dependencyDashboardAutoclose: true,
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
      dependencyDashboard: true,
      dependencyDashboardAutoclose: true,
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