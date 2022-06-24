import React, { Suspense } from 'react';
import Nav from '../../components/Nav';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));
const ErrorComponent = React.lazy(() => import('./ErrorComponent'));

function CodeSplittingExample() {
    return (
        <div>
            <Nav />
            <div>
                <div>
                    CodeSpilttingExample:
                </div>
            </div>
            <div>
                <MyErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <OtherComponent />
                            <AnotherComponent />
                        </section>
                    </Suspense>
                </MyErrorBoundary>
                <p>==============</p>
                <MyErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <ErrorComponent />
                        </section>
                    </Suspense>
                </MyErrorBoundary>
            </div>
        </div>
    );
}

export default CodeSplittingExample;