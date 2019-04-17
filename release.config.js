module.exports = {
    repositoryUrl: 'git+https://github.com/fernandoespinosa/semantic-release-sample.git',
    branches: [
        '+([1-9])?(.{+([1-9]),x}).x',
        'master',
        'next',
        'next-major',
        {
            name: 'beta',
            prerelease: true
        },
        {
            name: 'alpha',
            prerelease: true
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        '@semantic-release/git',
        '@semantic-release/github'
    ]
}