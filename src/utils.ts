export function endsWithAny(suffixes: Array<string>, string: string) {
    for (let suffix of suffixes) {
        if(string.endsWith(suffix))
            return true;
    }
    return false;
}

// function get_totals(releases: Array<Release>) {
//     let update_mac_count = 0
//     let update_win_count = 0
//     let update_linux_count = 0
//
//     let downloads_mac_count = 0
//     let downloads_win_count = 0
//     let downloads_linux_count = 0
//
//     for (let release of releases) {
//         update_mac_count += release.update.mac
//         update_win_count += release.update.win
//         update_linux_count += release.update.linux
//
//         downloads_mac_count += release.download.mac
//         downloads_win_count += release.download.win
//         downloads_linux_count += release.download.linux
//     }
//
//     return {
//         downloads_mac_count: downloads_mac_count,
//         downloads_win_count: downloads_win_count,
//         downloads_linux_count: downloads_linux_count,
//         update_mac_count: update_mac_count,
//         update_win_count: update_win_count,
//         update_linux_count: update_linux_count
//     }
// }

//
// function get_downloads_count(releases: array<>) {
//
//
//     let update_mac_count = 0
//     let update_win_count = 0
//     let update_linux_count = 0
//
//     let downloads_mac_count = 0
//     let downloads_win_count = 0
//     let downloads_linux_count = 0
//
//     for (let release of releases) {
//         console.log(release)
//         for (let asset of release.assets) {
//
//             if (endsWithAny(['mac.zip', 'dmg'], asset.name)) {
//                 downloads_mac_count += asset.download_count
//             } else if (asset.name.endsWith('exe')) {
//                 downloads_win_count += asset.download_count
//             } else if (asset.name.endsWith('deb')) {
//                 downloads_linux_count += asset.download_count
//             }
//
//             if (asset.name === 'latest-mac.yml') {
//                 update_mac_count += asset.download_count
//             } else if (asset.name === 'latest.yml') {
//                 update_win_count += asset.download_count
//             } else if (asset.name === 'latest-linux.yml') {
//                 update_linux_count += asset.download_count
//             }
//         }
//     }
//
//     return {
//         downloads_mac_count: downloads_mac_count,
//         downloads_win_count: downloads_win_count,
//         downloads_linux_count: downloads_linux_count,
//         update_mac_count: update_mac_count,
//         update_win_count: update_win_count,
//         update_linux_count: update_linux_count
//     }
// }
//
