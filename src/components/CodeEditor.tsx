import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


export const CodeEditor = () => {
    
    const onChange = React.useCallback((value: any, viewUpdate: any) => {
        console.log('value:', value);
    }, []);

    return (
        <div>
            <CodeMirror
                value="console.log('hello world!');"
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={onChange}
            />
        </div>
    );
}