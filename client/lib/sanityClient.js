import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ws0uh589',
    dataset: 'production',
    apiVersion: 'v1',
    token:
        'skSpYxt1kSfJf0I2dnAydAu6Sf0EcL4pN85Yz3hBtTrpAf0i2wvNlTqZ0HApi8rrLvpMf5N53n3Z7zRpSE7ioBx2nCCFjOFXj6J1eEc8EY5ErUxYoHXMfcOdpAEHbGHxS9sgpq9XtiAK52FFxOMBQ9iHFFUdp6BZrZxDlGes34DEhERXrbiA',
    useCdn: false,
})
