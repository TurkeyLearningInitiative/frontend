import { Octokit } from '@octokit/core'
import { GithubRepositories, repositories } from '../constants'

export async function fetchContributers({
  repository,
}: {
  repository: GithubRepositories
}) {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  })

  const payload = repositories[repository]
  const response = await octokit.request(
    'GET /repos/{owner}/{repo}/contributors',
    payload
  )
  return response.data
}
