import React from 'react'
import { RepoContainer } from './RepoStyles'

const Repo = ({ resp }) => {
    return (
        <RepoContainer>
            <div
                className='repoContent'
            >
                <a
                    target='_blank' 
                    className='repoLink'
                    href={resp.html_url}
                    rel='noopener noreferrer'
                >
                    {resp.name}
                </a>
                <p className='repoDescription'>
                    {resp.description} 
                </p>
                <p className='repoUpdate'>
                    Updated: {new Date(resp.updated_at).toUTCString()}
                </p>
            </div>
            <hr />
        </RepoContainer>
    )
}

export default Repo
