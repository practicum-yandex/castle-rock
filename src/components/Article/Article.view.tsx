import React from "react";
import { Component } from "@/utils/components";
import { Textarea, Content, Section } from "./Article.styles";
import Title from "@/share/Title";

const Article: Component = (props) => {
    return (
        <Section>
            <Title level={1}>Заголовок темы</Title>
            <Content>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit ipsum molestias deserunt eius illo doloribus soluta quas commodi fuga a adipisci necessitatibus rerum, 
                ab corporis optio facere, dolorem deleniti hic.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit ipsum molestias deserunt eius illo doloribus soluta quas commodi fuga a adipisci necessitatibus rerum, 
                ab corporis optio facere, dolorem deleniti hic.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit ipsum molestias deserunt eius illo doloribus soluta quas commodi fuga a adipisci necessitatibus rerum, 
                ab corporis optio facere, dolorem deleniti hic.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Impedit ipsum molestias deserunt eius illo doloribus soluta quas commodi fuga a adipisci necessitatibus rerum, 
                ab corporis optio facere, dolorem deleniti hic.
            </Content>
            <Textarea/>
        </Section>
    )
};

export default Article;
