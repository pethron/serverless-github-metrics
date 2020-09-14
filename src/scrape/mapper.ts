import {ReposListReleasesResponseData} from "@octokit/types";
import {endsWithAny} from "../utils";
import {Platforms, Release} from "./dto";

export function map_releases(releases: ReposListReleasesResponseData) {
    let r = []

    for (let release of releases) {
        let update_mac_count = 0
        let update_win_count = 0
        let update_linux_count = 0

        let downloads_mac_count = 0
        let downloads_win_count = 0
        let downloads_linux_count = 0

        for (let asset of release.assets) {
            if (endsWithAny(['mac.zip', 'dmg'], asset.name)) {
                downloads_mac_count += asset.download_count
            } else if (asset.name.endsWith('exe')) {
                downloads_win_count += asset.download_count
            } else if (asset.name.endsWith('deb')) {
                downloads_linux_count += asset.download_count
            }

            if (asset.name === 'latest-mac.yml') {
                update_mac_count += asset.download_count
            } else if (asset.name === 'latest.yml') {
                update_win_count += asset.download_count
            } else if (asset.name === 'latest-linux.yml') {
                update_linux_count += asset.download_count
            }
        }

        const download: Platforms = {
            mac: downloads_mac_count,
            win: downloads_win_count,
            linux: downloads_linux_count
        }

        const update: Platforms = {
            mac: update_mac_count,
            win: update_win_count,
            linux: update_linux_count
        }

        const t: Release = {
            name: release.name,
            downloads: download,
            updates: update
        }

        r.push(t)
    }

    return r
}
