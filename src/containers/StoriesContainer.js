import React, { useEffect, useState } from 'react';
import { getStoryId} from '../services/hnApi.js';
import { Story } from '../components/Story';
import { StoriesContainerWrapper, GlobalStyle} from '../styles/StoriesContainerStyles';
import { useInfiniteScroll} from '../hooks/useInfiniteScroll';

export const StoriesContainer = () => {
    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);
    useEffect(() => {
        getStoryId().then( data => setStoryIds(data));
    }, [])
    return (
        <>
        <GlobalStyle/>
            <StoriesContainerWrapper>
                <h1>Hacker News Stories</h1>
                {storyIds.slice(0, count).map(storyId => <Story key={storyId} storyId = {storyId} /> )}
            </StoriesContainerWrapper>
        </>
    );
}
  