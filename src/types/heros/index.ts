import React from 'react';

export type herosProps = {
    id: number;
    name: string;
    description?: string;
    comics: {
        available: number;
    };
    series: {
        available: number;
    };
    events: {
        available: number;
    };
    stories: {
        available: number;
    };
    thumbnail: {
        extension: string;
        path: string;        
    }
}