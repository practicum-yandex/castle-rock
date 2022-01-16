import React from "react";
import { Component } from "@/utils/components";
import { ThemeLink, Description, CustomTitle, List } from "./ArticlesList.styles";

export interface Article {
    id: number;
    name: string;
    desc: string;
    content: unknown;
}

// Mock data
const Articles: Article[] = [
    {
        id: 1,
        name: 'Some name',
        desc: 'Some description',
        content: '...some content 1'
    },
    {
        id: 2,
        name: 'Some name',
        desc: 'Some description',
        content: '...some content 2'
    },
    {
        id: 3,
        name: 'Some name',
        desc: 'Some description',
        content: '...some content 3'
    }
]

const ArticlesList: Component = (props) => {

    return (
        <List>
            { 
                Articles.map((theme) => (
                    <ThemeLink
                        key={theme.id} 
                        to={'/forum/' + theme.id}
                    >
                        <CustomTitle>{theme.name}</CustomTitle>
                        <Description>{theme.desc}</Description>
                    </ThemeLink>
                )) 
            }
        </List>
    )
};

export default ArticlesList;
