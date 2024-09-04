import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import articles from '../modules/ArticleLoader';

interface ArticleData {
    filename: string
}

interface Props {
    data: ArticleData;
}

function Article({ data }: Props) {
    const [articleText, setArticleText] = useState('');

    useEffect(() => {
        const loadArticle = async () => {
            try {
                const importArticle = articles[`../assets/articles/${data.filename}`];
                if(importArticle) {
                    const articleText = await importArticle();
                    setArticleText(articleText);
                } else {
                    setArticleText(`Error: Article ${data.filename} not found!`);
                }
            } catch(error) {
                console.error(`Error loading article ${data.filename}: `, error);
                setArticleText(`Error loading article ${data.filename}!`);
            }
        }

        loadArticle();
    }, [data.filename, articles]);

    return (
        <div className="text-column">
            <Markdown>{articleText}</Markdown>
        </div>
    );
}

export default Article;