import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import ArticlesList from "@/components/ArticlesList";
import { CustomButtom, Section } from "./Forum.styles";

const Forum: React.FC = () => {
    const showButton = !!useMatch('/forum');

    return (
    <>
        <Section>
            <ArticlesList />
            <Outlet />
        </Section>
        {showButton && <CustomButtom>Создать тему</CustomButtom>}
    </>
    )
};

export default Forum;
