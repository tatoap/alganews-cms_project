import ErrorBoundary from "../../app/components/ErrorBoundary"

function withBoundary<T extends Object> (Component: React.ComponentType<T>, componentName?: string) {
    return function (props: T) {
        return <ErrorBoundary component={componentName}>
            <Component {...props}/>
        </ErrorBoundary>
    }
}

export default withBoundary