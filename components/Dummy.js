// Now in nextjs also, we can import/export react components. We have kept this component inside components folder just as an example, it can be inside any folder or even the parent folder.
import React from 'react'

export default function Dummy() {
    return (<>
        {/* In index.js, we saw that how styled jsx can be used to write styles in a component itself. But these styles are only valid for this component. Even if we import this component inside another component, we won't be able to use this component's styled jsx inside another component. But we can add a global attribute to make this happen as below. */}
        <style jsx global>
            { // Now if we import this Dummy component inside another component, we will be able to use dummy class inside that component because of global attribute
            `
            .dummy {
                background-color: yellow;
            }
            `}
        </style>
        <div className='dummy'>Dummy</div>
        {/* We know that the upper div will acquire a bg-color of yellow */}
    </>)
}
