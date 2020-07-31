import React, { useState, useEffect } from 'react'
import Repo from '../Repo/Repo'
import { ReposContainer } from './ReposStyles'

const Repos = () => {

    const [repo, setRepo] = useState([])
    const [repoCount, setRepoCount] = useState([])

    useEffect(() => {

        let resp
        const data = sessionStorage.getItem('repo')

        if(data) {
            resp = JSON.parse(data)
            setRepoCount(resp.length)
            resp = resp.slice(1, 6)
            return setRepo(resp)
        }

        const getRepos = async () => {
            const url = 'https://api.github.com/users/armandopbringas/repos'
            const called = await fetch(url)
            resp = await called.json()
            setRepo(resp)
            sessionStorage.getItem('repo', JSON.stringify(resp))
            resp = resp.slice(1, 6)
            setRepo(resp)
        }

        getRepos()

    }, [])

    return (
        <ReposContainer>
            <div className='reposContainer'>
                <h1 className='reposTitle'>
                    My latest repositories
                </h1>
                <ul>
                    {
                        repo.map((repo) => {
                            return <Repo 
                                        resp={repo}
                                        key={repo.id}
                                    />
                        }) 
                    }
                </ul>
                <a
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='reposLink'
                    href='https://github.com/armandopbringas?tab=repositories'
                >
                    see more on GitHub { repoCount }
                </a>
            </div>
        </ReposContainer>
    )
}

export default Repos
