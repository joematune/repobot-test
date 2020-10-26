import * as React from 'react'
import { useTrackedState } from './store'
import CategoryList from './components/CategoryList'
import styled from 'styled-components'
import github_logo from './assets/github_logo.svg'
import './index.css'

// Styled H1 serving as a banner
const StyledH1 = styled.h1`
    margin: 4vmin;
    padding-bottom: 4vmin;
    border-bottom: 3px solid  rgba(255, 99, 71, 0.8);
`
// Styled horizontal bar
const StyledHr = styled.hr`
    margin: 4vmin;
    border: none;
    border-top: 3px solid  rgba(255, 99, 71, 0.8);
`
// Styled div to provide a max-width for desktops
const StyledContainer = styled.div`
    max-width: 1080px;
    text-align: center;
`
// Styled card for centering the joke
const StyledCard = styled.div`
    display: grid;
    padding: 2vmin 0;
    place-content: center;
`
// Stylized joke text
const StyledCardContent = styled.div`
    box-sizing: border-box;
    display: grid;
    place-content: center;
    max-width: 600px;
    padding: 2rem;
    margin: 0 1rem;
    min-height: 4rem;
    font-size: 16px;
    font-size: clamp(1rem, 2.5vmax, 2rem);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19),
                0 6px 6px rgba(0,0,0,0.23);
`
const StyledGitHubAnchor = styled.a`
    position: absolute;
    bottom: 3vmin;
    left: 5vmin;
`
const StyledGitHubImg = styled.img`
    width: 5vmin;
    min-width: 2rem;
    height: 5vmin;
    min-height: 2rem;
`

const App = (): JSX.Element => {
    const state = useTrackedState()
    const position = state.jokes.length - 1

    return (
        <StyledContainer>
            <StyledH1>
                <span role="img" aria-label="Bearded Man Emoji" data-testid="emoji">🧔</span> - Chuck Facts
            </StyledH1>
            
            <StyledCard>
                <StyledCardContent>{state.jokes[position].text}</StyledCardContent>
            </StyledCard>

            <StyledHr />

            {/* Query for categories & create buttons */}
            <CategoryList />

            <StyledGitHubAnchor href="https://github.com/joematune/repobot-test" title="GitHub" target="_blank">
                <StyledGitHubImg src={github_logo} alt="GitHub Logo"></StyledGitHubImg>
            </StyledGitHubAnchor>
        </StyledContainer>
    )
}

export default App
