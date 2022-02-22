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
    };
    urls: {
        urls: {
            type: string;
            url: string;
        }
    }
}

export type comicProps = {
    title: string;
    thumbnail: {
        extension: string;
        path: string;        
    };
    creators: {
        items: {
            name: string;
            role: string;
        }
    }
}