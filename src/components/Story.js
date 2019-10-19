import React, { useState, useEffect} from 'react';
import {getStory, storyUrl} from '../services/hnApi';
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/StoryStyles';
import {mapTime} from '../mappers/mapTime';

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, [storyId])

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>    
            </StoryTitle>
            <StoryMeta>
                <span className="story_by" data-testid="story-by">
                    <StoryMetaElement color="#000">By:</StoryMetaElement>{story.by}
                </span>
                <span className="story_time" data-testid="story-time">
                    <StoryMetaElement color="#000">Posted:</StoryMetaElement>{` `}
                    {mapTime(story.time)}
                </span>
            </StoryMeta>
        </StoryWrapper>
    ) : null;
}