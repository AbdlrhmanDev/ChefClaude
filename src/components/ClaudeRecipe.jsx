import React from 'react'
import ReactMarkdown from 'react-markdown'

const markdownComponents = {
  code({node, inline, className, children, ...props}) {
    return (
      <code
        style={{
          background: '#f4f4f4',
          borderRadius: '6px',
          padding: '0.2em 0.5em',
          fontSize: '1em',
          color: '#2d3748',
          fontFamily: 'monospace',
          display: inline ? 'inline' : 'block',
          whiteSpace: 'pre-wrap',
        }}
        {...props}
      >{children}</code>
    );
  },
  ul({children, ...props}) {
    return <ul style={{margin: '1em 0', paddingLeft: '2em', fontSize: '1.08rem'}} {...props}>{children}</ul>;
  },
  ol({children, ...props}) {
    return <ol style={{margin: '1em 0', paddingLeft: '2em', fontSize: '1.08rem'}} {...props}>{children}</ol>;
  },
  li({children, ...props}) {
    return <li style={{marginBottom: '0.5em', lineHeight: 1.7, color: '#374151'}} {...props}>{children}</li>;
  },
  h1({children, ...props}) {
    return <h1 style={{fontSize: '1.5rem', color: '#3730a3', margin: '1.2em 0 0.7em 0'}} {...props}>{children}</h1>;
  },
  h2({children, ...props}) {
    return <h2 style={{fontSize: '1.25rem', color: '#3730a3', margin: '1em 0 0.5em 0'}} {...props}>{children}</h2>;
  },
  h3({children, ...props}) {
    return <h3 style={{fontSize: '1.1rem', color: '#3730a3', margin: '0.8em 0 0.4em 0'}} {...props}>{children}</h3>;
  },
  blockquote({children, ...props}) {
    return <blockquote style={{borderLeft: '4px solid #a5b4fc', background: '#f8fafc', color: '#6366f1', fontStyle: 'italic', margin: '1.2em 0', padding: '0.5em 1.2em'}} {...props}>{children}</blockquote>;
  }
};

const ClaudeRecipe = ({recipe}) => {
  return (
    <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3></h3>
        <ReactMarkdown components={markdownComponents}>{recipe}</ReactMarkdown>
    </article>
</section>
  )
}

export default ClaudeRecipe