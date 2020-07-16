import React from 'react'
import { RepoContainer } from './RepoStyles'

const Repo = ({ resp }) => {
    return (
        <RepoContainer>
            <div
                className='repo__content'
            >
                <a
                    href={resp.html_url}
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    {resp.name}
                </a>
                <p>
                    {resp.description} 
                </p>
                <p>
                    Updated: {new Date(resp.updated_at).toUTCString()}
                </p>
            </div>
            <div
                className='line'
            />
        </RepoContainer>
    )
}

export default Repo
