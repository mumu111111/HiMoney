import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
background: #FFFFFF; padding: 12px 16px;
flex-grow: 1; display:flex; flex-direction: column;
justify-content: flex-end; align-items: flex-start;
> ol { margin: 0 -12px;
  > li{
     background: #D9D9D9; border-radius: 18px;
     display:inline-block; padding: 3px 18px; 
     font-size: 14px; margin: 8px 12px;
  }
}
> button{
  background:none; border: none; padding: 2px 4px;
  border-bottom: 1px solid #333; color: #666;
  margin-top: 8px;
}
`;
const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const tagName = window.prompt('新增标签名为')
    if (tagName !== null) {
      setTags([...tags, tagName])
    }
  };
  const onToggleTag = (tag: string) => {
    console.log(tag)

  };
  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag =>
            <li key={tag} onClick={() => onToggleTag(tag)}>{tag}</li>
          )
        }
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };