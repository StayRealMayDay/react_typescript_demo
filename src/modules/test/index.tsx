import React, { Suspense } from 'react';

const TestComponent = React.lazy(() => import("./view"));

function Component() {
    return (
        <>
            <Suspense fallback={<div>Loading</div>}>
                <TestComponent/>
            </Suspense>
        </>
    )
}

export default Component;





