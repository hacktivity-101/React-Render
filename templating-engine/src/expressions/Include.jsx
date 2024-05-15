import React, { useEffect, useState } from 'react';

const Include = (props) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = () => {
        const { src } = props;
        fetch(src)
            .then(response => response.text())
            .then(content => {
                setContent(content);
            })
            .catch(error => {
                console.error(`Error fetching content from ${src}:`, error);
            });
    }

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default Include;
