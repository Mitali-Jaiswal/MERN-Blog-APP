import React from 'react'
import PostPageHeader from './PostPageHeader';
import ArticleBody from './ArticleBody';
import FixedComponent from './FixedComponent';
import CardComponent from './CardComponent/CardComponent';
export default function PostPageComponent() {
    return (
        <div>
            
            <PostPageHeader />
            <div className="PostPageComponent">
            <div style={{marginBottom:'40px'}}>
            <FixedComponent />
            <ArticleBody />
            </div>
            <CardComponent />
            </div>
            
        </div>
    )
}
