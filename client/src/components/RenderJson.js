import React from 'react'
import styled from 'styled-components'


const CodeBlock = styled.div`
  background-color: #adadad;
  margin: 10px;
  border-radius: 10px;
`

const CodeLine = styled.code`
  color: black;
`

const RenderJson = (json) => {
  return(
    <CodeBlock>
      <CodeLine>
        {JSON.stringify(json, null, '\t')}
      </CodeLine>
    </CodeBlock>
  )
};

export default RenderJson;