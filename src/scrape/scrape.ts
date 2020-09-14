import { Octokit } from "@octokit/rest";
import { Metrics, Globals, IssueState } from "./dto";
import { map_releases } from "./mapper";

export class Scraper {
    owner: string;
    repo: string;
    auth: string;
    client: Octokit;

    constructor(owner: string, repo: string, auth: string) {
        this.owner = owner;
        this.repo = repo;
        this.auth = auth;
        this.client = new Octokit({auth: auth});
    }

    async scrape(): Promise<Metrics> {
        const s = await this.get_social()
        const cic = await this.get_issues_count(IssueState.Closed)
        const opc = await this.get_pulls_count(IssueState.Open)
        const cpc = await this.get_pulls_count(IssueState.Closed)
        const r = await this.get_releases()

        const g: Globals = {
            closed_issues_count: cic,
            closed_pulls_count: cpc,
            forks_count: s.forks_count,
            open_issues_count: s.open_issues_count,
            open_pulls_count: opc,
            stargazers_count: s.stargazers_count,
            subscribers_count: s.subscribers_count,
            total_issues_count: cic + s.open_issues_count,
            total_pulls_count: cpc + opc,
            watchers_count: s.watchers_count
        }

        const m: Metrics = {
            globals: g,
            releases: r
        }

        return m
    }


    async get_social() {
        const r = await this.client.repos.get({owner: this.owner, repo: this.repo});

        const data = {
            stargazers_count: r.data.stargazers_count,
            watchers_count: r.data.watchers_count,
            forks_count: r.data.forks_count,
            open_issues_count: r.data.open_issues_count,
            subscribers_count: r.data.subscribers_count
        }

        return data
    }

    async get_issues_count(state: IssueState = IssueState.All) {
        const issues = await this.client.paginate(`GET /repos/:owner/:repo/issues?state=${state}`, {owner: this.owner, repo: this.repo})
        return issues.length
    }

    async get_pulls_count(state: IssueState = IssueState.All) {
        const pulls = await this.client.paginate(`GET /repos/:owner/:repo/pulls?state=${state}`, {owner: this.owner, repo: this.repo})
        return pulls.length
    }

    async get_releases() {
        const r = await this.client.paginate(`GET /repos/:owner/:repo/releases`, {owner: this.owner, repo: this.repo})
        return map_releases(r)
    }
}
