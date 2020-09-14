export interface Platforms {
    mac: number,
    linux: number,
    win: number
}

export interface Release {
    name: string,
    downloads: Platforms,
    updates: Platforms
}

export interface Globals {
    closed_issues_count: number,
    closed_pulls_count: number,
    forks_count: number,
    open_issues_count: number,
    open_pulls_count: number,
    stargazers_count: number,
    subscribers_count: number,
    total_issues_count: number,
    total_pulls_count: number,
    watchers_count: number,
}

export interface Metrics {
    globals: Globals,
    releases: Array<Release>,
}

export enum IssueState {
    Open = 'open',
    Closed = 'closed',
    All = 'all'
}
